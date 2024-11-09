import { useScrollVisibility } from "../../../customHooks/useScrollVisibility";
import { ButtonRound } from "../Buttons/ButtonRound";
import { GetStarted } from "../Buttons/GetStarted";
import NavigationContainer from "../Navigation/NavigationContainer";

const Navbar = () => {
  const showButton = useScrollVisibility();

  return (
    <NavigationContainer>
      <div className="flex items-center gap-4">
        <ButtonRound className="border-2 border-gray-300 hover:border-black max-tablet:hidden">
          Log in
        </ButtonRound>
        {showButton && <GetStarted />}
      </div>
    </NavigationContainer>
  );
};

export default Navbar;
