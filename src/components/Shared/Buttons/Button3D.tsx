import { ButtonRound } from "./ButtonRound";

const Button3D = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ButtonRound
      className={` h-[52px] w-full whitespace-nowrap clickable-3d ${className}`}
      {...props}>
      {children}
    </ButtonRound>
  );
};

export default Button3D;
