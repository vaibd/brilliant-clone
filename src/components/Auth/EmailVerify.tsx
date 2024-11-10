import Input from "../Shared/Inputs/Input";
import SignupBtn from "./AuthBtn";

const EmailVerify = ({
  setValidEmail,
}: {
  setValidEmail: (v: boolean) => void;
}) => {
  const checkEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidEmail(false);
    setValidEmail(true);
  };

  return (
    <form onSubmit={checkEmail}>
      <div className="mb-6">
        <Input type="email" placeholder="Email" />
      </div>

      <SignupBtn />
    </form>
  );
};

export default EmailVerify;
