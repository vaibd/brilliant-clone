import { useState } from "react";
import Input from "../Shared/Inputs/Input";
import AuthBtn from "./AuthBtn";
import { emailHelper, ageHelper } from "../../constants/login";
import { SignupFormValues } from "../../types/auth";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import {
  emailValidate,
  emptyFieldValidate,
  passwordValidate,
} from "../../lib/auth";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";

const SignupForm = () => {
  const [showRestOfForm, setShowRestOfForm] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!emailValidate(e.target.value) && !showRestOfForm) {
      setShowRestOfForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const signupData = Object.fromEntries(
      formData.entries()
    ) as unknown as SignupFormValues;

    const emptyFieldError = emptyFieldValidate(signupData);
    const passwordError = passwordValidate(signupData.password);
    const emailError = emailValidate(signupData.email);
    const allErrors = emailError || emptyFieldError || passwordError;
    if (allErrors) {
      setError(allErrors);
      return;
    }
    signupData.age = Number(signupData.age);

    try {
      dispatch(setLoading(true));
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );

      // await setDoc(doc(db, "users", userCredential.user.uid), {
      //   name: `${signupData.firstName} ${signupData.lastName}`,
      //   age: signupData.age,
      //   email: signupData.email,
      // });
      dispatch(setLoading(false));
      navigate("/home");
    } catch (error) {
      dispatch(setLoading(false));
      setError((error as Error).message);
    }
  };

  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          helperText={emailHelper}
          placeholder="Email"
          onChange={handleEmailChange}
        />

        {showRestOfForm && (
          <>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full"
            />

            <div className="flex w-full">
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                className="flex-1 rounded-r-none border-r-0"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="flex-1 rounded-l-none -ml-px"
              />
            </div>

            <Input
              type="number"
              name="age"
              placeholder="Age"
              helperText={ageHelper}
            />

          </>
        )}
        <Error error={error} />

        <AuthBtn text="Sign up" />
      </form>
    </>
  );
};

export default SignupForm;
