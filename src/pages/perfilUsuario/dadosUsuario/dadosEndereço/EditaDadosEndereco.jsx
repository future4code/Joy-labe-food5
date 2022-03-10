import React, { useEffect, useState } from "react";
import {
  BTNEntrar,
  Container,
  Fildset,
  Input,
  Legend,
  P,
  Spinner,
  GoBack,
  Cabecalho,
} from "./styled";
import { useForm } from "../../../../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { BASE_URL } from "../../../../constants/BASE_URL";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useProtectPage } from './../../../../hooks/useProtectPage';

export default function EditaDadosEndereco() {
  useProtectPage()
  let token = localStorage.getItem("token");
  const history = useHistory();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const { form, onChange, limpaCampos } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    pegaUser();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const msgSucesso = () => {
    toast.success("Usuário atualizado com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const msgFracasso = (e) => {
    toast.error(`${e.response.data.message}`, {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const pegaUser = () => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: token,
        },
      })
      .then(({ data }) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {});
  };

  const atualizaUsuario = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/address`,
        {
          name: form.name,
          email: form.email,
          cpf: form.cpf,
          street: form.street,
          number: form.number,
          neighbourhood: form.neighbourhood,
          city: form.city,
          state: form.state,
          complement: form.complement,
        },
        {
          headers: {
            auth: token,
          },
        }
      )
      .then(() => {
        msgSucesso();
      })
      .catch((e) => {
        msgFracasso(e);
      });
    limpaCampos();
  };

  return (
    <Container>
      {loading ? (
        <Spinner>
          <BeatLoader color="#e8222e" />
        </Spinner>
      ) : (
        <>
          <Cabecalho>
            <GoBack>
              <ArrowBackIosIcon fontSize="small" onClick={goBack} />
            </GoBack>
            <P>Editar Endereço</P>
          </Cabecalho>
          <form onSubmit={atualizaUsuario}>
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
            <BTNEntrar onClick={atualizaUsuario}>Salvar</BTNEntrar>
          </form>
        </>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
