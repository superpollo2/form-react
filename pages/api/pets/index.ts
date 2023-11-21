import { Pet } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/services/prisma'
import { checkPrivateApi, checkProtectedApi } from '@/utils/checkServerSession';

interface ResponseData {
    pets?: Pet[];
    pet?: Pet;
    message?: string;
};

const petsApi = async (
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) => {
    try {
    
        if (req.method === 'GET') {
            const pets = await prisma.pet.findMany()
            return res.status(200).json({ pets });
        }

        if (req.method === 'POST') {
            const { name, breed, type, birthDate, gender, wight } = req.body;

            // Validar que los campos requeridos estén presentes en el cuerpo de la solicitud
            if (!name || !breed || !type || !birthDate || !gender || !wight ) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            // Crear una nueva mascota en la base de datos
            const newPet = await prisma.pet.create({
                data: {
                    name,
                    breed,
                    type,
                    birthDate: new Date(birthDate), // Asegúrate de que birthDate sea un objeto Date
                    gender,
                    wight   
                }
            });

            return res.status(201).json({ pet: newPet });
        }
        return res.status(405).json({ message: 'Method not allowed' });
    } catch {
        return res.status(500).json({ message: 'Internal server error' });
    }



};

export default petsApi;