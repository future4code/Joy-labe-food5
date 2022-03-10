import React from "react";
import styled from "styled-components"

export const Ordem = styled.div`
  background: #eeeeee;
  box-shadow: 0px 0px 0px 1px rgba(50, 50, 50, 0.77);
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2vh;
  margin: 0 2vh;

  p{
    margin-top: 10px;
  }
`

export const Cabecalho = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;

  p{
    font-size: 3vh;
  }
  
`
export const ContainerGlobal = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  
`