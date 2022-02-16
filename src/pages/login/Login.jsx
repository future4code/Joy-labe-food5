import React from "react";
import logo from "../../img/logo.png";
import {Container, Fildset, Legend} from "./styled";

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="logo" style={{maxWidth:"6.5rem", marginTop:"5.5rem"}}></img>
      <p className="tituloTela">Entrar</p>
      <Fildset>
        <Legend>E-mail</Legend>
      </Fildset>
    </Container>
  );
}
