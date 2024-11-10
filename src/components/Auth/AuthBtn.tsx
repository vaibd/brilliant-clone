import Button3D from "../Shared/Buttons/Button3D";

const AuthBtn = ({
  className,
  text,
  ...props
}: { className?: string; text: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button3D
      type="submit"
      className={`bg-black/80 text-white py-3 mb-4
      md:px-8 md:py-3 hover:bg-black/70 border-b-4 border-black
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black/80 ${className}`}
      {...props}>
      {text}
    </Button3D>
  );
};

export default AuthBtn;
