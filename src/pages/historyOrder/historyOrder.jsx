import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../constants/Base_URL";
import { useHistory } from "react-router-dom"
import { goToHome } from "./../../router/coordinator";
import { ContainerHistorico, ConteinerInformacao } from "./styled";
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function HistoryOrder() {
  const [historico, setHistorico] = useState()
  const history = useHistory()

  useEffect(() => {
    axios.get(`${BASE_URL}/orders/history`, {
      headers: {
        auth: localStorage.getItem("token")
      },
    }).then((res) => {
      setHistorico(res.data.orders)
    }).catch((err) => {
      alert(err.response.data.message)
    })
  }, [])
  return (
    <ContainerHistorico>
      <h1>Histoirico Pedidos</h1>
      <span  className="span" onClick={() => goToHome(history)}>
      <BackspaceIcon/>
      Voltar</span>

      {historico && historico.map((compra) => {
        const Criacao = new Date(compra.createdAt);
       const Expirado = new Date(compra.expiresAt);
        return (
          <ConteinerInformacao>
              <p>Restaurante: {compra.restaurantName}</p>
              <p> Preço Total: R$ {compra.totalPrice.toFixed(2).replace(".", ",")}</p>
               <p>Data do Pedido:{" "} {`${Criacao.getDate()}/${   1 + Criacao.getMonth()}/${Criacao.getFullYear()} às ${Criacao.getHours()} Horas e ${Criacao.getMinutes()} minutos.`}</p>
               <p>Data da Entrega:{" "}{`${Expirado.getDate()}/${1 + Expirado.getMonth()}/${Expirado.getFullYear()} às ${Expirado.getHours()} Horas e ${Expirado.getMinutes()} minutos.`}</p>
          </ConteinerInformacao>
        )
      })}
    </ContainerHistorico>
  )
}