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
import { BASE_URL } from "../../../../constants/Base_URL";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function EditaDadosLogin() {
  let token = localStorage.getItem("token");
  const history = useHistory();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const { form, onChange, limpaCampos } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  useEffect(() => {
    pegaUser();
  }, []);

  const goBack = () => {
    history.goBack();
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
      .catch((e) => {
        toast.error(`${e.response.data.message}`, {
          theme: "colored",
          className: "toastifySize",
        });
      });
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

  const atualizaUsuario = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/profile`,
        {
          name: form.name,
          email: form.email,
          cpf: form.cpf,
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
            <P>Editar Usuário</P>
          </Cabecalho>
          <form onSubmit={atualizaUsuario}>
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
            <BTNEntrar onClick={atualizaUsuario}>Salvar</BTNEntrar>
          </form>
        </>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
