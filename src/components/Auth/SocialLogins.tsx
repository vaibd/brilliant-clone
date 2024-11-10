import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/config";
import Button3D from "../Shared/Buttons/Button3D";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import { useState } from "react";

const SocialLogins = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
        <Button3D
          onClick={googleLogin}
          className="flex items-center justify-center clickable-3d-grey">
          <img
            src="src/assets/icons/google.svg"
            alt="Google"
            className="size-6"
          />
        </Button3D>

        <Button3D className="flex items-center justify-center clickable-3d-grey">
          <img
            src="src/assets/icons/facebook.svg"
            alt="Facebook"
            className="size-6"
          />
        </Button3D>
        <Error error={error} />
      </div>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gray-300" />
        <p className="text-gray-500 text-xs">OR</p>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
    </>
  );
};

export default SocialLogins;
