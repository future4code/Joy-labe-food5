import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../router/coordinator";

export const useProtectPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};
