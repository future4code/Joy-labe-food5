import styled from "styled-components";

export const RestaurantDetalhes = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
@media (min-width: 375px) and (max-width: 768px) {
    padding: 2%;
  }
`
export const MenuRestaurant = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  align-items: flex-start;
  width: 90%;
  color: #E8222E;
  border-bottom: 1px solid black;

  span {
    margin-top: 12px;
  }
  .categoria {
    /* color: #000000; */
    color:#B8B8B8
  }
  .ajuste-tempo-valor{
  display:flex;
  justify-content:flex-start;
  width: 90vw;

  }
  .tempo {
  font-size: large;
  color: #000000; 
  }
  .valor {
  color: #000000; 
  margin-left:6vw;
  font-size: large;
  }
  .endereco {
    margin-bottom: 12px;
    color: #E8222E;
  }
  div {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }
  .fatasia {
    color: #E8222E;
    font-size: large;
  }
`;

export const RestaurantCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid;
  width: 100%;
 
`;
export const ImageLoja = styled.img`
  display: flex;
  border-radius: 8px ;
  width: 100%;

`;
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

