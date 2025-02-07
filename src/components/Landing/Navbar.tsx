import { useScrollVisibility } from "../../customHooks/useScrollVisibility";
import { ButtonRound } from "../Shared/Buttons/ButtonRound";
import { GetStarted } from "../Shared/Buttons/GetStarted";
import NavigationContainer from "../Shared/Navigation/NavigationContainer";

const Navbar = () => {
  const showButton = useScrollVisibility();

  return (
    <NavigationContainer className="md:py-8 py-4">
      <div className="flex items-center gap-4">
        <a href="/login">
          <ButtonRound className="w-28 btn-grey max-tablet:hidden">
            Log in
          </ButtonRound>
        </a>
        {showButton && <GetStarted />}
      </div>
    </NavigationContainer>
  );
};

export default Navbar;
