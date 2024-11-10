import { Navigate } from "react-router-dom";
import { useLoginUser } from "../customHooks/useLoginUser";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const NonAuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useLoginUser();

  if (loading) return <LoadingSpinner />;
  return user ? <Navigate replace to="/home" /> : <>{children}</>;
};

export default NonAuthRoutes;
