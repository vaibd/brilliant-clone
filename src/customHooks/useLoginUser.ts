import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "./useAuthState";

export const useLoginUser = () => {
  const { user, loading } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/home");
    }
  }, [user, loading, navigate]);

  return { user, loading };
};