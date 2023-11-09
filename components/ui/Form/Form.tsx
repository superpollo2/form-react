import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Form = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    toast.success("Form success");
    console.log(data);
  });

  return (
    <main className="flex items-center justify-center w-screen bg-zinc-50 h-screen  ">
      <div>
        <h1>Registra tu mascota</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-4 p-6 shadow-xl text-zinc-800 text-medium bg-zinc-200 rounded-xl"
        >
          <span className="flex flex-col space-y-1">
            <label>Nombre</label>
            <input
              type="text"
              className="rounded-lg p-1 text-base"
              placeholder="Pepito Pérez"
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
                sx={{  minWidth: 120,
                  fontSize: 16       
                            }} size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10} >Gato</MenuItem>
                  <MenuItem value={20}>Perro</MenuItem>
                  <MenuItem value={30}>Empanada</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </span>

          <span className="flex flex-col space-y-1">
            <label>Raza</label>
            <input
              type="email"
              className="rounded-lg p-1 text-base "
              placeholder="Persa"
              {...register("email", {
                required: {
                  value: true,
                  message: "the email is required",
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
                sx={{  minWidth: 120,
                  fontSize: 16       
                            }} size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10} >Gato</MenuItem>
                  <MenuItem value={20}>Perro</MenuItem>
                  <MenuItem value={30}>Empanada</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </span>



          <span className="flex flex-col">
            <label>Fecha de nacimiento</label>
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
