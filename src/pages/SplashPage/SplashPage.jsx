import React from "react";
import ImgSplash from "../../components/ImgSplash/ImgSplash";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";


 const SplashPage = () => {
  const history = useHistory();

  ReactDOM.render(
    <React.StrictMode>
      <ImgSplash />
    
    </React.StrictMode>,
    document.getElementById("root")
  );

  const changePage = () => {
    setTimeout(() => {
      history.push("/home");
      history.go();
    }, 2999);
  };
  changePage();
  return <>   </>;
};

export default SplashPage;
