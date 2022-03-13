import { Button } from '@mui/material'
import React, {useEffect,useState} from 'react'
import {
  Ordem,
  Cabecalho,
  ContainerGlobal,
  Vazio
} from "./styled"
import axios from 'axios'
import { BASE_URL } from "../../constants/BASE_URL";


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

  // const listarPedidos = pedidos.length && pedidos.order.map((item) =>{
  //   return(
  //     <Ordem>
  //       <p><strong>{item.restaurantName}</strong></p>
  //       <p>R${item.totalPrice}</p>
  //     </Ordem>
  //   )
  // })

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
          <p><strong>{pedidos.restaurantName}</strong></p>
          <p>R${pedidos.totalPrice}</p>
        </Ordem>
        ):(
          <Vazio>
            <p>Vazio</p>
          </Vazio>
        )
      }
        
      
    </ContainerGlobal>
  )
}
