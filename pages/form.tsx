import { Form } from "@/components/ui/Form/Form";
import { PrivateRoute } from "@/components/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const form = () => {
  return (
    <PrivateRoute>
      <Form />
      <ToastContainer />
    </PrivateRoute>
  );
};

export default form;
