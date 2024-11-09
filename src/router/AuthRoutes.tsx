
import { Navigate } from "react-router-dom";

const AuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate replace to="/login" />;
};

export default AuthRoutes;
