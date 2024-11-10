export const AuthFooter = ({
  className,
  text,
  actionText,
  actionLink,
}: {
  className?: string;
  text: string;
  actionText: string;
  actionLink: string;
}) => {
  return (
    <p className={`text-dimText text-center text-[1rem] mt-7 ${className}`}>
      {text}&nbsp;
      <a href={actionLink} className="underline ">
        {actionText}
      </a>
    </p>
  );
};
