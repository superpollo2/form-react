import { PrivateRoute } from "@/components/PrivateRoute";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '@/components/ui/Table/Table';
import { useSession } from "next-auth/react";

const mypets = () => {
    const [pets, setPets] = useState([]);
    const { data } = useSession();


    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('/api/pets', {
                    params: {
                        userId: data?.user.id,  // Reemplaza con la lógica para obtener el ID del usuario logueado
                    },
                });
                setPets(response.data.pets || []);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };

        fetchPets();
    }, []);

    // Formatear el valor de weight a string con dos decimales
    const formattedPets = pets.map(pet => ({
        ...pet,
        weight: pet.wight.toFixed(0),

    }));

    const columns = ['id', 'name', 'breed', 'type', 'gender', 'weight'];
    return (
        <PrivateRoute >
            <div className="space-y-5">
                <h1 className="text-3xl font-semibold text-center">Mis mascotas</h1>
                <Table colums={columns} data={formattedPets} />
            </div>
        </PrivateRoute >

    );
};

export default mypets;