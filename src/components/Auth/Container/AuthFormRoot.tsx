export const AuthFormRoot = ({
  heading,
  children,
  className,
}: {
  heading: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`smLaptop:w-1/2 flex flex-col justify-center text-center ${className}`}>
      <h2 className="heading-sans-md font-[5] mb-8 text-center">{heading}</h2>
      {children}
    </div>
  );
};
