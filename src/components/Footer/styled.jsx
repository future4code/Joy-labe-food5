import styled from "styled-components";

export const ContainerMenuButtons = styled.div`
  display: flex;
  height: 13vh;
  padding:0px 10vw 0px 10vw;
  max-width:100vw;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0.1vh;
  background-color: #fff;
  bottom: 0%;
  @media (min-width: 375px) and (max-width: 768px) {
    padding: 2%;
  }
  
  button {
    display: flex;
    justify-content: space-evenly;
    width: 10vw;
    height: 10vh;
    border-radius: 10%;
    background-color: #fff;
    color: #e8222e;
  }
`;

export const GlobalFooter = styled.div`
  display: grid;
  
`