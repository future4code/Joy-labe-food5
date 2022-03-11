import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { 
  ContainerFood,
  ContainerGlobal,
  CardProduto,
  ContainerProduto,
  Endereco,
  ContainerValor,
  Hr,
  Cabecalho,
  ContainerCarrinho,
  Pagamento
} from './styled'
import FooterContainer from "../../components/Footer/Footer";
import ContextGlobal from "../../context/ContextGlobal"
import { BASE_URL } from "../../constants/Base_URL";



const autorizacao = {
  headers: {
    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlAwRmVTTFBqZXU3UTNteDl6Unp6IiwibmFtZSI6InZpY3RvciIsImVtYWlsIjoidmljdG9yQGZ1dHVyZTQuY29tIiwiY3BmIjoiMzMzLjExMS4xMTEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjQ1MTQzMzUzfQ.PloQ9sQWhnOda7iDodCP1hTLaG7JxOMw69lu2q-VsaE"
  }
}

const produto = [
  {  
  category: "Pastel",
  description: "Pastel autêntico, feito na hora!",
  id: "3vcYYSOEf8dKeTPd7vHe",
  name: "Pastel",
  photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
  price: 3
  }
]


export default function Carrinho() {
  const { carrinho, pedido, removeCarrinho } = useContext(ContextGlobal)
  const [detalhe, setDetalhe] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [endereco, setEndereco] = useState([])
  const [dinheiro, setDinheiro] = useState([])
  const [credito, setCredito] = useState([])


  useEffect(() => {

    pegarEndereco();

    axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/1",
      autorizacao
    ) 
    .then(res =>{ 
        setRestaurants(res.data.restaurant)
    }).catch((err) =>{console.log(err)})
  
  },[]);


  const pegarEndereco = () => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile/address",
      autorizacao
    )
    .then(res =>{ 
      setEndereco(res.data.address)
  }).catch((err) =>{console.log(err)})

  }  
  
  // console.log(endereco)

  const addCarrinho = (idProduto) => {

    const filtrarProduto = restaurants.products.find((item)=> item.id === idProduto )
    const novaLista = [...detalhe, filtrarProduto]
    
    setDetalhe(novaLista)
  }

  const finalizarPedido = () => {
    axios
    .post(`${BASE_URL}/restaurants/${restaurants.id}/order`,
    {
      "products": [ pedido ],
      "paymentMethod": "creditcard"
    }
    ).then(res => {}).catch(err => alert(err))
  }

  const listarCarrinho = produto.map((item)=>{
    return(
      <CardProduto key={item.id}>
        <img src={item.photoUrl}/>
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <nav>
            <p>R$ {item.price},00</p>
            <>
              <button>1</button>
              <button onClick={() => removeCarrinho()}>Remover</button>
            </>
          </nav>
        </div>
      </CardProduto>
    )
    
  })

  const onChangeDinehiro = (event) => {
		setDinheiro(event.target.value)
	}
  const onChangeCredito = (event) => {
		setCredito(event.target.value)
	}

  console.log(dinheiro)
  console.log(credito)


  const tempoMinimo = restaurants.deliveryTime - 15

  return (
    <ContainerGlobal>
      <ContainerFood>
        <Cabecalho>
         <p>Meu carrinho</p>
        </Cabecalho>

        <ContainerCarrinho>
          <Endereco>
            <p>Endereço de entrega</p>
            <p><strong>{endereco.street},{endereco.number}</strong></p>
          </Endereco>

          {produto.length > 0 ? (
            <ContainerProduto>
              <h3>{restaurants.name}</h3>
              <p>{restaurants.address}</p>
              <p>{tempoMinimo} - {restaurants.deliveryTime} min</p>

              {listarCarrinho}
            </ContainerProduto>) : ( 
            <Cabecalho>
              <p>Vazio</p>
           </Cabecalho>
          )}
          <ContainerValor>
            <p>Frete R${restaurants.shipping},00</p>
            <div>
              <p>SUBTOTAL</p>
              <h3>R$ ,00</h3>
            </div>
          </ContainerValor>

          <p>Forma de pagamento</p>
          <Hr/>
          <Pagamento>
            <div>
              <input type="radio" name="OPCAO" onChange={onChangeDinehiro} value={dinheiro} checked/> Dinheiro 
              <br/>
              <input type="radio" name="OPCAO" onChange={onChangeCredito} value={credito}/> Cartão de crédito
            </div>

            <button onClick={() => finalizarPedido()}>Confirma</button>
          </Pagamento>
          
          
        </ContainerCarrinho>
        <FooterContainer/>
      </ContainerFood>

      
    </ContainerGlobal>
  )
}
