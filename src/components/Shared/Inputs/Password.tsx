import { useState } from "react";
import Input from "./Input";

const Password = ({
  className,
  helperText,
  ...props
}: {
  className?: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        className={`w-full pr-10 ${className}`}
        {...props}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}>
        <img
          src={`src/assets/icons/${
            showPassword ? "eye-close" : "eye-open"
          }.svg`}
          alt={showPassword ? "hide password" : "show password"}
          className="size-4"
        />
      </button>
    </div>
  );
};

export default Password;
