import Input from "../Shared/Inputs/Input";
import { emailHelper } from "../../constants/login";
import { SignupFormValues } from "../../types/auth";
import Password from "../Shared/Inputs/Password";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "./Error";
import { emailValidate, emptyFieldValidate } from "../../lib/auth";
import AuthBtn from "./AuthBtn";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(
      formData.entries()
    ) as unknown as SignupFormValues;

    const emptyFieldError = emptyFieldValidate(loginData);
    const emailError = emailValidate(loginData.email);
    const allErrors = emptyFieldError || emailError;
    if (allErrors) {
      setError(allErrors);
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      navigate("/home");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        helperText={emailHelper}
        placeholder="Email"
      />
      <Password name="password" placeholder="Password" />

      <Error error={error} />

      <AuthBtn text="Login" />
    </form>
  );
};

export default LoginForm;
