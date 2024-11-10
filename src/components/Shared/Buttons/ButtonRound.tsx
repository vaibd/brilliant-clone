export const ButtonRound = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-5 py-3 rounded-full transition-colors duration-200 ${className}`}
      {...props}>
      {children}
    </button>
  );
};
