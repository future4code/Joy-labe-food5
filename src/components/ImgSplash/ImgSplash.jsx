import React from "react";
import styled from "styled-components";
import IfutureSplash from "../../img/splash.png";

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E8222E;
  min-height: 100vh;
  width: 100%;

  justify-content: center;
  align-items: center;
  @media (min-width: 375px) and (max-width: 768px) {
    padding: 2%;
  }
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

