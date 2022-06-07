import React from "react";
import styled from "styled-components"

export const Ordem = styled.div`
  padding: 0 1vh;
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

export const Vazio = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;

`

export const ContainerPedido = styled.div`
  background-color: #eeeeee;
  border: 1px solid #d6d6d6;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
`

export const TituloPedido = styled.p`
  height: 1.125rem;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #e8222e;
  font-weight: bold;
`;

export const DataPedido = styled.p`
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  margin-bottom: 5px;
  `;

export const TotalPedido = styled.p`
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  font-weight: bold;
  margin-bottom: 5px;
`;