import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { goToHome } from './../router/coordinator';

export const useUnProtectPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToHome(history);
    }
  }, [history]);
};
