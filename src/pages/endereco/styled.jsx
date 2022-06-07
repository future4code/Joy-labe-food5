import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  @media (min-width: 375px) and (max-width: 768px) {
    padding: 2%;
  }
`;

export const IMG = styled.img`
  width: 6.5rem;
  height: 3.625rem;
  margin: 4.25rem 8rem 1rem;
  object-fit: contain;
`;

export const Fildset = styled.fieldset`
  width: 20.5rem;
  height: 3.5rem;
  margin: 0.5rem 0;
  padding: 1.188rem 1rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
`;

export const Legend = styled.legend`
  padding: 0 5px;
  color: #b8b8b8;
`;

export const P = styled.p`
  width: 18.5rem;
  margin: 2rem 0;
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: center;
`;

export const Input = styled.input`
  width: 18.5rem;
  height: 1.7rem;
  letter-spacing: -0.39px;
  padding: 0 7px;
  border: none;
`;

export const BTNEntrar = styled.button`
  font-size: 1em;
  width: 20.5rem;
  height: 2.625rem;
  margin-top: 1.188rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 2px;
  background-color: #e8222e;
  cursor: pointer;
`;
