import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { goToHome } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import { 
  ContainerFood,
  ContainerGlobal,
  ContainerProduto,
  Endereco,
  ContainerValor,
  Hr,
  Cabecalho,
  ContainerCarrinho,
  Pagamento,
  FoodList,
  FoodContainer,
  MenuButtons,
  InfoFood,
  FoodImage
} from './styled'
import FooterContainer from "../../components/Footer/Footer";
import ContextGlobal from "../../context/ContextGlobal"
import { BASE_URL } from "../../constants/BASE_URL";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";



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
  const { carrinho, setCarrinho, pedido, setPedido, removeCarrinho, data, valorTotal, addCarrinho, setIdRestaurante, setValorTotal } = useContext(ContextGlobal)
  const [endereco, setEndereco] = useState([])
  const [form, setForm] = useState("")
  const history = useHistory()

  console.log(form.OPCAO)
  console.log(data.id)

  useEffect(() => {

    pegarEndereco();
    
  },[]);

  const onChange = (event) => {
    setForm({[event.target.name]: event.target.value})
  }

  const pegarEndereco = () => {
    axios
    .get(`${BASE_URL}/profile/address`,{
      headers: {
        auth: localStorage.getItem("token")
      }    
    })
    .then(res =>{ 
      setEndereco(res.data.address)
  }).catch((err) =>{console.log(err)})

  }  
  
  // console.log(endereco)

  const Quatidade = (id) => {
    const QuantidadeTotal = carrinho.find((item) => item.id === id);
    return QuantidadeTotal ? QuantidadeTotal.quantidade : 0;
  };

  const finalizarPedido = () => {
    const products = pedido.map((product) => {
      return (
          {
              id: product.id,
              quantity: product.quantity
          }
      )
    })

    const body = {
      products: products ,
      paymentMethod: form.OPCAO
    }
    const headers = {
      headers:{
        auth: localStorage.getItem("token"),
        'Content-Type':'application/json'
      }    
    }

    axios.post(`${BASE_URL}/restaurants/${data.id}/order`, body, headers)
    .then(res => {
      console.log("Pedido realizado");
      setCarrinho([]);
      setPedido([])
      setIdRestaurante([])
      setValorTotal(0)
    }).catch(err => alert(err.response.data.message))

    goToHome(history)
  }

  const listarCarrinho = carrinho.map((i)=>{
    return (
      <FoodList key={i.id}>
        <FoodContainer>
          <FoodImage src={i.photoUrl} alt="imagem produto" />
          <InfoFood>
            <span className="food_nome">{i.name}</span>
            <span className="food_descricao">{i.description}</span>
            <div className="food_detalhe">
              <span className="food_preco">
                R$: {i.price.toFixed(2).replace(".", ",")}
              </span>
              <MenuButtons>
                <span>
                  <RemoveCircleIcon
                    onClick={() => removeCarrinho(i)}/>
                      </span>
                <p>{Quatidade(i.id)}</p>
                <span>
                  <AddCircleIcon
                    onClick={() => addCarrinho(i)} />
                </span>
              </MenuButtons>
            </div>
          </InfoFood>
        </FoodContainer>
      </FoodList>
    );
    
  })

  const tempoMinimo = data.deliveryTime - 15;


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

          {carrinho.length > 0 ? (
            <ContainerProduto>
              <h3>{data.name}</h3>
              <p>{data.address}</p>
              <p>{tempoMinimo} - {data.deliveryTime} min</p>

              {listarCarrinho}
            </ContainerProduto>) : ( 
            <Cabecalho>
              <p>Vazio</p>
           </Cabecalho>
          )}
          <ContainerValor>
          {carrinho.length > 0 ? (<p>Frete R${data.shipping},00</p>) : (<p>Frete R$0,00</p>)}
            <div>
              <p>SUBTOTAL</p>
              {Number.isInteger(valorTotal) ? (
                <h3>R$ {valorTotal},00</h3>
                ) : (
                <h3>R$ {valorTotal}0</h3> )}
            </div>
          </ContainerValor>

          <p>Forma de pagamento</p>
          <Hr/>
          <Pagamento>
            <div>
              <input type="radio" name="OPCAO" onChange={onChange} value="money" checked={form.OPCAO === "money"}/> Dinheiro 
              <br/>
              <input type="radio" name="OPCAO" onChange={onChange} value="creditcard" checked={form.OPCAO === "creditcard"}/> Cartão de crédito
            </div>
                
            <button onClick={() => finalizarPedido()}><strong> F i n a l i z a r </strong></button>
          </Pagamento>
          
          
        </ContainerCarrinho>
        <FooterContainer/>
      </ContainerFood>

      
    </ContainerGlobal>
  )
}
