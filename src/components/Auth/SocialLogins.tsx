import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/config";
import Button3D from "../Shared/Buttons/Button3D";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loadingSlice";

const SocialLogins = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const googleLogin = async () => {
    try {
      dispatch(setLoading(true));
      await signInWithPopup(auth, googleProvider);
      dispatch(setLoading(false));
      navigate("/home");
    } catch (error) {
      dispatch(setLoading(false));
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
