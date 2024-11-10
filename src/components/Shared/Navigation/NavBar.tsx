import { Gift } from "./Gift";
import NavigationContainer from "./NavigationContainer";
import Paths from "./Paths";
import Search from "./Search";
import Streak from "./Streak";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationContainer className="shadow-lg smLaptop:py-3 py-2" logoClassName="smLaptop:block md:w-[6.5rem] hidden">
        <Paths />
        <div className="flex items-center gap-4">
          <Search className="smLaptop:block hidden" />
          <Gift />
          <Streak />
          <img
            src="src/assets/icons/burger-menu.svg"
            alt="burger-menu"
            className="ml-6"
          />
        </div>
      </NavigationContainer>
      {children}
    </>
  );
};

export default NavBar;
