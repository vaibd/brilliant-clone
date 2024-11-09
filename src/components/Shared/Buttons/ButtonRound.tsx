export const ButtonRound = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={`px-5 py-3 rounded-full transition-colors duration-200 ${className}`}>
      {children}
    </button>
  );
};