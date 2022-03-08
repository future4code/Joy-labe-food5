import React, { useEffect, useState } from "react";
import {
  Container,
  P,
  Spinner,
  Cabecalho,
  HR,
  DivPaiDados,
  DivFilhoDados,
  DivFilhoDadosEdita,
  PP,
  PPP,
  PPPP,
  TituloPedido,
  TotalPedido,
  ContainerPedido,
  DataPedido,
} from "./styled";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { BASE_URL } from "../../constants/Base_URL";
import EditIcon from "@mui/icons-material/Edit";
import FooterUsuario from "../../components/footerUsuario/footerUsuario";
import { goToEditAddressEdit, goToEditProfile } from "../../router/coordinator";

export default function Usuario() {
  let token = localStorage.getItem("token");
  const history = useHistory();
  const [user, setUser] = useState({});
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  // const pedidos = [
  //   {
  //     name: "Bullguer Vila Madalena",
  //     date: "11/11/2011",
  //     total: `67,00`,
  //   },
  //   {
  //     name: "Vinil Burger Butantã",
  //     date: "17/02/2011",
  //     total: `20,00`,
  //   },
  //   {
  //     name: "Bullguer Vila Madalena",
  //     date: "04/07/2011",
  //     total: `89,00`,
  //   },
  // ];

  useEffect(() => {
    pegaUser();
    puxaPedidos();
  }, []);

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

  const puxaPedidos = () => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: token,
        },
      })
      .then(({ data }) => {
        setPedidos(data.orders);
      })
      .catch(() => {});
  };

  const converteData = (data) => {
    const date = new Date(data);
    const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    // const meses = ("0" + (date.getMonth() + 1)).slice(-2)
    const mes = meses[date.getMonth()];
    const dia = ("0" + date.getDate()).slice(-2);
    return `${dia} de ${mes} de ${date.getFullYear()}`;
  };

  const chamaEditaDadosLogin = () => {
    goToEditProfile(history);
  };

  const chamaEditaDadosEndereco = () => {
    goToEditAddressEdit(history);
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
            <P>Meu Perfil</P>
          </Cabecalho>
          <HR />
          <DivPaiDados>
            <DivFilhoDados>
              <PP>{user.name}</PP>
              <PP>{user.email}</PP>
              <PP>{user.cpf}</PP>
            </DivFilhoDados>
            <DivFilhoDadosEdita>
              <EditIcon onClick={chamaEditaDadosLogin} />
            </DivFilhoDadosEdita>
          </DivPaiDados>
          <PPP>Endereço Cadastrado</PPP>
          <DivPaiDados>
            <DivFilhoDados>
              <PP>{user.address}</PP>
            </DivFilhoDados>
            <DivFilhoDadosEdita>
              <EditIcon onClick={chamaEditaDadosEndereco} />
            </DivFilhoDadosEdita>
          </DivPaiDados>
          <PPPP>Histórico de Pedidos</PPPP>
          <HR />
          <DivPaiDados>
            <DivFilhoDados>
              {pedidos.map((pedido, index) => {
                return (
                  <ContainerPedido key={index}>
                    <TituloPedido>{pedido.restaurantName}</TituloPedido>
                    <DataPedido>{converteData(pedido.expiresAt)}</DataPedido>
                    <TotalPedido>{`SUBTOTAL R$ ${pedido.totalPrice},00`}</TotalPedido>
                  </ContainerPedido>
                );
              })}
            </DivFilhoDados>
          </DivPaiDados>
          <FooterUsuario />
        </>
      )}
    </Container>
  );
}
