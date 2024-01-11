import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (testRedirect, to) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (testRedirect()) navigate(to);
  }, []);
};
