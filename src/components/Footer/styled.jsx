import styled from "styled-components";

export const ContainerMenuButtons = styled.div`
  display: flex;
  height: 12vh;
  padding:0px 10vw 0px 10vw;
  max-width:100vw;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  bottom: 0.1vh;
  background-color: #fff;
  bottom: 0%;
  
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
