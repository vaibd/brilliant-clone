import { useState } from "react";

const Input = ({
  className,
  helperText,
  ...props
}: {
  className?: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [showHelper, setShowHelper] = useState(false);

  return (
    <div className="relative w-full">
      <div className="flex">
        <input
          className={`w-full p-3 border rounded-lg focus:border-black ${className}`}
          {...props}
        />
        {helperText && (
          <div className="absolute -right-7 top-1/2 -translate-y-1/2 z-50">
            <button
              type="button"
              className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
              onClick={() => setShowHelper(!showHelper)}>
              ?
            </button>
            {showHelper && (
              <div className="absolute w-40 md:w-60 whitespace-break-spaces right-6 top-1/2 -translate-y-1/2 p-4 rounded bg-white text-xs border border-dim">
                {helperText}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
