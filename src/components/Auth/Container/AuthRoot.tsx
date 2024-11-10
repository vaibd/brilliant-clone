export const AuthRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex min-h-screen width-md gap-16 ${className}`}>
      {children}
    </div>
  );
};

