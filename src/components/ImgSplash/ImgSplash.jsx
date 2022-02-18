import React from "react";
import styled from "styled-components";
 import IfutureSplash from "../../img/splash.png";
//import IfutureSplash from "../../img/splash.svg";

const SplashContainer = styled.div`
  display: flex;
  background-color: #ff2200;
  min-height: 100vh;
  width: 100%;

  justify-content: center;
  align-items: center;

  img {
    text-align: center;
    width: 126vw;
    height: 100vh;
    object-fit: contain;
  }
`;

const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

`;

 const ImgSplash = () => {
  return (
    <Conteiner>
      <SplashContainer>
        <img src={IfutureSplash} alt="ifuture" />
  
      </SplashContainer>
    </Conteiner>
  );
};
export default ImgSplash

