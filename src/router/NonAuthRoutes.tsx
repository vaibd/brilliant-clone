import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import { useAuthState } from "../customHooks/useAuthState";

const NonAuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthState();

  if (loading) return <LoadingSpinner />;
  return user ? <Navigate replace to="/home" /> : <>{children}</>;
};

export default NonAuthRoutes;
