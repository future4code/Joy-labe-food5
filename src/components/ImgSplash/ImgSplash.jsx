import React from "react";
import styled from "styled-components";
import IfutureSplash from "../../img/splash.png";


const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff2200;
  min-height: 100vh;
  width: 100%;

  img {
    text-align: center;
    object-fit: contain;
    width: 126vw;
    height: 100vh;
  }
`;

const Conteiner = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
 

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

