import React from "react";
import styled from "styled-components"

export const ContainerFood = styled.div`
  /* height: 100vh;
  width: 912px;
  border: 1px solid black;
  display: flex;
  flex-direction: column; */
`

export const ContainerGlobal = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  
`

export const CardProduto = styled.div`
  margin: 10px 0;
  height: 20vh;
  width: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  img{
    height: 100%;
    width: 120px;
  }
  nav{
    display: flex;
    justify-content: space-around;
  }
`
export const ContainerProduto = styled.div`

  p{
    margin: 4px 16px;
  }
  h3{
    margin-left: 16px;
    color: #e86e5a;
  }

  
`

export const Endereco = styled.div`
  background: #eeeeee;
  box-shadow: 0px 0px 0px 1px rgba(50, 50, 50, 0.77);
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2vh;
  margin-bottom: 16px;

  p{
    margin-top: 10px;
  }
`
export const ContainerValor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  p{
    align-self: end;
  }
  div{
    display: flex;
    justify-content: space-between;
  }
  
`

export const Hr = styled.hr`
  border: 0;
	border-top: 1px solid black;
  margin: 8px 0;
`
export const Cabecalho = styled.div`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 3vh;
  }
  
`

export const ContainerCarrinho = styled.div`
  padding: 6px;

  nav{
    input{
      margin-bottom: 20px;
    }
  } 
`

export const Pagamento = styled.div`
  display: grid;
  grid-template-rows: 10vh 4vh;
  
  input{
    
  }
`

export const FoodContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 20vh;
  border: 1px solid;
  border-radius: 8px;
`;

export const FoodImage = styled.img`
  width: 35vw;
  height: 19vh;
  border-radius: 8px ;
`;
export const FoodList = styled.div`
  display: flex;
  justify-content: center;
  width: 96%;
  padding: 4px;
  margin-top: 8px;
`;

export const InfoFood = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  .food_descricao {
    color: #B8B8B8;
  }
  .food_nome {
    color: #E8222E;
  }
  .food_preco{
    font-size: large;
  
  }

  .food_detalhe {
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    margin-top: 14px;
  }
`

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  color: #E8222E;
  padding-left:50px;
  
  p {
    margin: 0 6px;
    font-size: 18px;
  }
`