import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from 'react';
import axios from 'axios';



const Form = () => {

  const [petTypes, setPetTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [gender, setGender] = useState("");
  const [petTyp, setPetType] = useState("");
  const [date, setDate] = useState("")

  const { data } = useSession();

  useEffect(() => {
    const fetchEnums = async () => {
      try {
        const response = await axios.get('/api/enums'); // Ajusta la ruta según tu configuración
        setPetTypes(response.data.petTypes);
        setGenders(response.data.genders);
      } catch (error) {
        console.error('Error fetching enums:', error);
      }
    };

    fetchEnums();
  }, []);




  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };


  const handleTypeChange = (event: SelectChangeEvent) => {
    setPetType(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit(async (dataForm) => {
    try {
      const postData = {
        name: dataForm.name,
        breed: dataForm.raza, 
        type: petTyp,
        birthDate: date,
        gender: gender,
        wight: parseFloat(dataForm.weigh),
        userId: data?.user.id,
      };
     
      const response = await axios.post('/api/pets', postData); 
      
      console.log(response.data); 
      toast.success('🐹 Mascota registrada!')
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('💀 Error submitting form');
    }

  });

  return (
    <main className="flex items-center justify-center w-screen  h-screen  ">
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-center">Registra tu mascota</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-4 p-10 shadow-xl text-zinc-800 text-medium w-full bg-zinc-100 rounded-xl"
        >
          <span className="flex flex-col space-y-1">
            <label>Nombre</label>
            <input
              type="text"
              className="rounded-lg p-1 text-base"
              placeholder="Pepito Pérez"
              autoComplete="off"
              {...register("name", {
                required: {
                  value: true,
                  message: "The name is required",
                },
              })}
            />
            {errors.name && errors.name.message ? (
              <span className="block text-red-400 text-xs">
                {String(errors.name.message)}
              </span>
            ) : null}
          </span>

          <span className="flex flex-col">
            <Box className="mt-2 ">
              <FormControl
                sx={{
                  minWidth: 120,
                  fontSize: 16
                }} size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={petTyp}
                  label="Pet Type"
                  onChange={handleTypeChange}
                >
                  {petTypes.map((petType) => (
                    <MenuItem key={petType} value={petType}>
                      {petType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </span>

          <span className="flex flex-col space-y-1">
            <label>Raza</label>
            <input
              type="text"
              className="rounded-lg p-1 text-base "
              placeholder="Persa"
              autoComplete="off"
              {...register("raza", {
                required: {
                  value: true,
                  message: "the breed is required",
                },
              })}
            />
            {errors.raza && errors.raza.message ? (
              <span className="block text-red-400 text-xs">
                {String(errors.raza.message)}
              </span>
            ) : null}
          </span>

          <span className="flex flex-col space-y-1">
            <label>Peso</label>
            <input
              type="number"
              className="rounded-lg p-1 text-base "
              placeholder="80"
              autoComplete="off"
              {...register("weigh", {
                required: {
                  value: true,
                  message: "the weigh is required",
                },
              })}
            />
            {errors.email && errors.email.message ? (
              <span className="block text-red-400 text-xs">
                {String(errors.email.message)}
              </span>
            ) : null}
          </span>
          <span className="flex flex-col">
            <Box className="mt-2 ">
              <FormControl
                sx={{
                  minWidth: 120,
                  fontSize: 16
                }} size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="gender"
                  onChange={handleGenderChange}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </span>



          <span className="flex flex-col space-y-1">
            <label>Fecha de nacimiento</label>
            <input
              type='date' onChange={(e) => setDate(e.target.value)}
              className="rounded-lg p-1 text-base" />
          </span>

          <span className="flex flex-col justify-center items-center">
            <input
              type="submit"
              name="Submit"
              value="send"
              className="rounded-xl bg-zinc-500 w-1/3 p-1 text-white  hover:bg-[#B06F91] "
            />
          </span>
        </form>
      </div>
    </main>
  );
};

export { Form };
