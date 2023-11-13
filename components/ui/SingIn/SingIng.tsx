import { signIn } from "next-auth/react";
import { MdPets } from "react-icons/md";
import { Lilita_One } from '@next/font/google'
import { Form } from "@/components/ui/Form/Form";
const lilita = Lilita_One(
  {
    subsets: ["latin-ext"],
    weight: "400",
  }
);

const SingIn = () => {
  return (
    <section className="flex w-screen h-screen bg-pink-100">
      <section className="bg-[#B06F91] w-1/3 ">
        <img src="/dog2.jpg" alt="perrito" />
        <div className="flex items-center grow  justify-center text-6xl font-bold text-white space-x-2">
          <MdPets className=" " />
          <span className={lilita.className}> Patitas</span>
        </div>
      </section>
      <section className="w-[70%] flex items-center justify-center bg-pink-200">
        <div className="flex items-center justify-center flex-col bg-white rounded-lg p-8 shadow-md w-96 ">
          <h1 className="text-3xl font-bold text-center mb-4">
            Bienvenido al Sistema de mascotas patitas
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Cominicaciones ll
          </p>
          <button className="rounded-xl bg-zinc-500 w-1/3 p-1 text-white  hover:bg-[#B06F91] "
            onClick={() => {
              signIn("auth0");
            }}>
            Iniciar Sesion
          </button>
        </div>
      </section>
    </section>
  );
};

export { SingIn };
