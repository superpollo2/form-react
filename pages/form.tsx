import { Form } from "@/components/ui/Form/Form";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "@/components/ui/navbar/navbar";

const form = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#ffedff]">
      <NavBar >
        <Form />
        <ToastContainer />
      </NavBar >

    </div>
  );
};

export default form;
