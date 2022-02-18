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
} from "./styled";
import { useForm } from "./../../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Base_URL } from "./../../constants/Base_URL";
import { goToEndereco } from "../../router/coordinator";

export default function Login() {
  const history = useHistory();
  const { form, onChange, limpaCampos } = useForm({ name: "", email: "", cpf:"", password:"" });


  const criaUsuario = (e) => {
    e.preventDefault();
    axios
      .post(`${Base_URL}/signup`, {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        toast.success("Usuário criado com sucesso", {
          theme: "colored",
          className: "toastifySize",
        })
        goToEndereco(history)
        history.push("/endereco")
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`, {
          theme: "colored",
          className: "toastifySize",
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
      <P>Cadastrar</P>
      <form onSubmit={criaUsuario}>
        <Fildset>
          <Legend>Nome</Legend>
          <Input
            placeholder="nome e sobrenome"
            type={"text"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            required
          />
        </Fildset>
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
          <Legend>CPF</Legend>
          <Input
            placeholder="12312312312"
            type={"text"}
            name={"cpf"}
            value={form.cpf}
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
        {/* <Fildset>
          <Legend>Confirme a senha</Legend>
          <Input
            placeholder="Confirme a senha anterior"
            type={"password"}
            name={"passwordConfirm"}
            value=""
            onChange={onChange}
            required
          />
        </Fildset> */}
        <BTNEntrar>Criar</BTNEntrar>
      </form>
      <ToastContainer autoClose={2000}/>
    </Container>
  );
}
