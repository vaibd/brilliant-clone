import Button3D from "../Shared/Buttons/Button3D";

const SocialLogins = () => {
  return (
    <>
      <div className="flex justify-center gap-4 mb-8">
        <Button3D className="flex items-center justify-center clickable-3d-grey">
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
