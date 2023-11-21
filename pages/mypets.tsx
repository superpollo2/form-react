import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '@/components/ui/Table/Table';
import { useSession } from "next-auth/react";
import { API_ROUTES } from "@/services/apiConfig";
import { NavBar } from '@/components/ui/navbar/navbar';
import { Spinner } from '@/components/Spinner';
const mypets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get(API_ROUTES.pets);
                setPets(response.data.pets || []);
            } catch (error) {
                console.error('Error fetching pets:', error);
            } finally {
                setLoading(false)
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
        <div className="flex items-center justify-center w-full h-full bg-[#ffedff]">
            <NavBar >
                <main className='flex flex-col items-center justify-center w-screen  h-screen space-y-5 '>
                    {loading ? (
                        <Spinner color={'zinc-600'} />
                    ) : (
                        <>
                            <h1 className="text-3xl font-semibold text-center">Mis mascotas</h1>
                            <Table colums={columns} data={formattedPets} />
                        </>

                    )}
                </main>
            </NavBar >

        </div>
    );
};

export default mypets;