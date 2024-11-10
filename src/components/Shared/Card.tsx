const Card = ({
  children,
  clickable,
}: {
  children: React.ReactNode;
  clickable?: boolean;
}) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm border-2 border-dim ${
        clickable ? "border-dim clickable-3d-grey" : ""
      }`}>
      {children}
    </div>
  );
};

export default Card;
