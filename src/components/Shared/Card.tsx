const Card = ({
  children,
  clickable,
  className,
}: {
  children: React.ReactNode;
  clickable?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm relative ${
        clickable ? "clickable-card" : "border-2 border-dim"
      } ${className}`}>
      {children}
    </div>
  );
};

export default Card;
