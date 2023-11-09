import { signIn } from "next-auth/react";
import { MdPets } from "react-icons/md";
import { Lilita_One } from '@next/font/google'
import {Form} from "@/components/ui/Form/Form";
const lilita = Lilita_One(
    {
        subsets: ["latin-ext"],
        weight: "400",}
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
      <section className="w-[70%] flex items-center justify-center">
      <Form />
      </section>
    </section>
  );
};

export { SingIn };
