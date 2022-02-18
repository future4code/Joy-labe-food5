import React from "react";
import { BTNEntrar, Container, Fildset, Input, Legend, P } from "./styled";
import { useForm } from "../../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Base_URL } from "../../constants/Base_URL";

export default function Login() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const { form, onChange, limpaCampos } = useForm({
    street: "",
    number: "",
    complement: "",
    state: "",
    neighbourhood: "",
    city: "",
  });

  const adcEndereco = (e) => {
    e.preventDefault();
    axios
      .put(
        `${Base_URL}/address`,
        {
          street: form.street,
          number: form.number,
          complement: form.complement,
          state: form.state,
          neighbourhood: form.neighbourhood,
          city: form.city,
        },
        {
          headers: {
            auth: token,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        toast.success("Endereço adicionado com sucesso", {
          theme: "colored",
          className: "toastifySize",
        });
        data.user.hasAddress = !data.use.hasAddress;
        history.push("/restaurants");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Ops, verifique os dados dos campos", {
          theme: "colored",
          className: "toastifySize",
        });
      });
    limpaCampos();
  };
  return (
    <Container>
      <P>Meu endereço</P>
      <form onSubmit={adcEndereco}>
        <Fildset>
          <Legend>Logradouro</Legend>
          <Input
            placeholder="Rua / AV"
            type={"text"}
            name={"street"}
            value={form.street}
            onChange={onChange}
            required
          />
        </Fildset>
        <Fildset>
          <Legend>Número</Legend>
          <Input
            placeholder="Número"
            type={"number"}
            name={"number"}
            value={form.number}
            onChange={onChange}
            required
          />
        </Fildset>
        <Fildset>
          <Legend>Complemento</Legend>
          <Input
            placeholder="Apto / Bloco"
            type={"text"}
            name={"complement"}
            value={form.complement}
            onChange={onChange}
          />
        </Fildset>
        <Fildset>
          <Legend>Bairro</Legend>
          <Input
            placeholder="Bairro"
            type={"text"}
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            required
          />
        </Fildset>
        <Fildset>
          <Legend>Cidade</Legend>
          <Input
            placeholder="Cidade"
            type={"text"}
            name={"city"}
            value={form.city}
            onChange={onChange}
            required
          />
        </Fildset>
        <Fildset>
          <Legend>Estado</Legend>
          <Input
            placeholder="Estado"
            type={"text"}
            name={"state"}
            value={form.state}
            onChange={onChange}
            required
          />
        </Fildset>

        <BTNEntrar>Salvar</BTNEntrar>
      </form>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
