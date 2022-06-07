import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const Spinner = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cabecalho = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin: 5% 0;
`;

export const P = styled.p`
  width: 100%;
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: center;
`;

export const HR = styled.hr`
  width: 100%;
  border: 1px solid #d6d6d6;
  margin-bottom: 1rem;
`;

export const DivPaiDados = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DivFilhoDados = styled.div`
  width: 100%;
`;

export const DivFilhoDadosEdita = styled.div`
  width: 100%;
  text-align: end;
`;

export const PP = styled.p`
  width: 100%;
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: left;
  margin-bottom: 5px;
`;

export const PPP = styled.p`
  height: 1.125rem;
  width: 20.5rem;
  margin-top: 2rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: left;
  color: #d6d6d6;
  margin-bottom: 5px;
`;

export const PPPP = styled.p`
  height: 1.125rem;
  width: 20.5rem;
  margin-top: 2rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: left;
  margin-bottom: 5px;
`;

export const ContainerPedido = styled.div`
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

export const GoBack = styled.div`
  position: absolute;
  display: flex;
  align-items: center;  
`