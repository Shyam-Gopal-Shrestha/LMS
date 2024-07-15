import { Form, Button } from "react-bootstrap";
import CustomInput from "./customInput";
import useForm from "../hooks/useForm.js";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { email, password } = formData;
  const { formData, handleOnChange } = useForm(initialFormData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // call axios to hit login endpoint
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          value: email,
          placeholder: "Enter your Email",
          required: true,
        }}
      />

      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          value: password,
          placeholder: "Enter your Email",
          required: true,
        }}
      />

      <Button vatiant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
