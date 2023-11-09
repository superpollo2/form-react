import { Form } from "@/components/ui/Form/Form";
import { PrivateRoute } from "@/components/PrivateRoute";

const form = () => {
  return (
    <PrivateRoute>
      <Form />
    </PrivateRoute>
  );
};

export default form;
