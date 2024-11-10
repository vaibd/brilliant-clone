import { useState } from "react";
import { Gift } from "./Gift";
import NavigationContainer from "./NavigationContainer";
import Paths from "./Paths";
import Search from "./Search";
import Streak from "./Streak";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/loadingSlice";
const NavBar = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      dispatch(setLoading(true));
      await signOut(auth);
      dispatch(setLoading(false));
      navigate("/");
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };

  return (
    <>
      <NavigationContainer
        className="shadow-lg smLaptop:py-3 py-2"
        logoClassName="smLaptop:block md:w-[5.8rem] hidden">
        <Paths />
        <div className="flex items-center gap-4">
          <Search className="smLaptop:block hidden bg-dim/50 !py-1" />
          <Gift />
          <Streak />
          <div className="relative ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu">
              <img
                src="src/assets/icons/burger-menu.svg"
                alt="burger-menu"
                className="size-full"
              />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-[100%] w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50 border border-dim">
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </NavigationContainer>
      {children}
    </>
  );
};

export default NavBar;
