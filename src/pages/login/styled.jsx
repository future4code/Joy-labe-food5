import styled from "styled-components";

export const Container = styled.div`
  background: coral;
  width: 100vw;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 2%;
  }
`;

export const Fildset = styled.fieldset`
  width: 100%;
  height: 3.5rem;
  border: 1px solid #b8b8b8;
`;

export const Legend = styled.legend`
  padding: 0 5px;
`
