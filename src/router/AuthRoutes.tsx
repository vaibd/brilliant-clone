import { Navigate } from "react-router-dom";
import NavBar from "../components/Shared/Navigation/NavBar";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import { useAuthState } from "../customHooks/useAuthState";

const AuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthState();
  
  if (loading) return <LoadingSpinner />;
  return user ? <NavBar>{children}</NavBar> : <Navigate replace to="/login" />;
};

export default AuthRoutes;
