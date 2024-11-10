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
      className={`rounded-2xl p-6 shadow-sm border-2 border-dim ${
        clickable ? "border-dim clickable-3d-grey" : ""
      } ${className}`}>
      {children}
    </div>
  );
};

export default Card;
