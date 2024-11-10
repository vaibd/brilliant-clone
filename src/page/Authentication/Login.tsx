import { AuthFooter } from "../../components/Auth/Container/AuthFooter";
import { AuthFormRoot } from "../../components/Auth/Container/AuthFormRoot";
import { AuthRoot } from "../../components/Auth/Container/AuthRoot";
import { LBanner } from "../../components/Auth/Container/LBanner";
import LoginForm from "../../components/Auth/LoginForm";
import SocialLogins from "../../components/Auth/SocialLogins";
import TnC from "../../components/Auth/TnC";

const Login = () => {
  return (
    <AuthRoot>
      {/* Left side - Image */}
      <LBanner />

      {/* Right side - Form */}
      <AuthFormRoot heading="Log in to your account">
        <SocialLogins />
        <LoginForm />
        <TnC />

        <AuthFooter
          text="Existing user?"
          actionText="Sign up"
          actionLink="/signup"
        />
      </AuthFormRoot>
    </AuthRoot>
  );
};

export default Login;
