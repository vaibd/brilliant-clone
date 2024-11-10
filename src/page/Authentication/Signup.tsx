import { AuthFooter } from "../../components/Auth/Container/AuthFooter";
import { AuthFormRoot } from "../../components/Auth/Container/AuthFormRoot";
import { AuthRoot } from "../../components/Auth/Container/AuthRoot";
import { LBanner } from "../../components/Auth/Container/LBanner";
import SignupForm from "../../components/Auth/SignupForm";
import SocialLogins from "../../components/Auth/SocialLogins";
import TnC from "../../components/Auth/TnC";

const Signup = () => {
  return (
    <AuthRoot>
      {/* Left side - Image */}
      <LBanner />

      {/* Right side - Form */}
      <AuthFormRoot heading="Create a free account to discover your personalized learning path">
        <SocialLogins />
        <SignupForm />
        <TnC />

        <AuthFooter
          text="Existing user?"
          actionText="Log in"
          actionLink="/login"
        />
      </AuthFormRoot>
    </AuthRoot>
  );
};

export default Signup;
