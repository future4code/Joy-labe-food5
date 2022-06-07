import { Button } from '@mui/material'
import React, {useEffect,useState} from 'react'
import {
  Ordem,
  Cabecalho,
  ContainerGlobal,
  Vazio,
  ContainerPedido,
  TituloPedido,
  DataPedido,
  TotalPedido
} from "./styled"
import axios from 'axios'
import { BASE_URL } from "../../constants/BASE_URL";
import FooterContainer from "../../components/Footer/Footer";


const autorizacao = {
  headers: {
    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlAwRmVTTFBqZXU3UTNteDl6Unp6IiwibmFtZSI6InZpY3RvciIsImVtYWlsIjoidmljdG9yQGZ1dHVyZTQuY29tIiwiY3BmIjoiMzMzLjExMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjQ1MTQzMzUzfQ.PloQ9sQWhnOda7iDodCP1hTLaG7JxOMw69lu2q-VsaE"
  }
}

export default function ActiveOrder() {

  const[pedidos, setPedidos] = useState([])

  useEffect(() => {
    pegaPedidos() 
  },[])  

  console.log(pedidos)

  const converteData = (data) => {
    const date = new Date(data);
    const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    // const meses = ("0" + (date.getMonth() + 1)).slice(-2)
    const mes = meses[date.getMonth()];
    const dia = ("0" + date.getDate()).slice(-2);
    return `${dia} de ${mes} de ${date.getFullYear()}`;
  };

  const pegaPedidos = () => {
    axios
    .get(`${BASE_URL}/active-order`,{
      headers: {
        auth: localStorage.getItem("token")
      }    
    })
    .then(res =>{ 
      setPedidos(res.data.order)
    })
    .catch((err) =>{console.log(err)})
  }
  

  return (
    <ContainerGlobal>
      <Cabecalho>
        <p>Pedidos em adamentos</p>
      </Cabecalho>

      {pedidos ? (
        <Ordem>
          <ContainerPedido>
            <TituloPedido>{pedidos.restaurantName}</TituloPedido>
            <DataPedido>{converteData(pedidos.expiresAt)}</DataPedido>
            <TotalPedido>{`SUBTOTAL R$ ${pedidos.totalPrice},00`}</TotalPedido>
          </ContainerPedido>
        </Ordem>
        ):(
          <Vazio>
            <p>Vazio</p>
          </Vazio>
        )
      }
        
      <FooterContainer/>
    </ContainerGlobal>
  )
}
