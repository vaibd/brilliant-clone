import { Navigate } from "react-router-dom";
import NavBar from "../components/Shared/Navigation/NavBar";

const AuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <NavBar>{children}</NavBar>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default AuthRoutes;
