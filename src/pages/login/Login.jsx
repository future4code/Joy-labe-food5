import React from "react";
import logo from "../../img/logo.png";
import {
  BTNEntrar,
  Container,
  Fildset,
  IMG,
  Input,
  Legend,
  P,
  Span,
} from "./styled";
import { useForm } from "./../../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_URL";
import { goToHome, goToSignUp, goToEndereco } from "../../router/coordinator";

export default function Login() {
  const history = useHistory();
  const { form, onChange, limpaCampos } = useForm({ email: "", password: "" });

  const logaUsuario = (e) => {
    e.preventDefault();
    const id = toast.loading("Logando...");

    const sucesso = () =>{
      toast.update(id, {
        render: "Tudo certo, vamos lá",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        theme: "colored",
      })
      goToHome(history)
    }

    const aviso = () =>{
      toast.update(id, {
        render: "Ops, hora de finalizar o cadastro",
        type: "warning",
        isLoading: false,
        autoClose: 3000,
        theme: "colored",
      })
      goToEndereco(history);
    }

    axios
      .post(`${BASE_URL}/login`, {
        email: form.email,
        password: form.password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        data?.user.hasAddress ? sucesso() : aviso()
      })
      .catch((e) => {
        toast.update(id, {
          render: `${e.response.data.message}`,
          type: "error",
          isLoading: false,
          autoClose: 3000,
          theme: "colored",
        });
      });
    limpaCampos();
  };
  return (
    <Container>
      <IMG
        src={logo}
        alt="logo"
        style={{ maxWidth: "6.5rem", marginTop: "5.5rem" }}
      ></IMG>
      <P>Entrar</P>
      <form onSubmit={logaUsuario}>
        <Fildset>
          <Legend>E-mail</Legend>
          <Input
            placeholder="email@email.com"
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
        </Fildset>
        <Fildset>
          <Legend>Senha</Legend>
          <Input
            placeholder="Senha de 6 dígitos(números)"
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            pattern={"[0-9]{6,6}"}
            title="Insira uma senha de 6 dígitos(números)"
          />
        </Fildset>
        <span className="botao">
        <BTNEntrar>Entrar</BTNEntrar>
        </span>
      </form>
      <P style={{ marginTop: "1.75rem" }}>
        Não possui cadastro?{" "}
        <Span onClick={() => goToSignUp(history)}>Clique aqui</Span>
      </P>
      <ToastContainer />
    </Container>
  );
}
