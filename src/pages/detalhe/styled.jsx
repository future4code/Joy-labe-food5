import styled from "styled-components";

export const RestaurantDetalhes = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 355px;
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

  .address {
    margin-bottom: 12px;
  }
  div {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }
  .name {
    color: #E8222E;
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
  width: 328px;
  height: 112px;
  border: 1px solid;
  border-radius: 8px;
`;

export const FoodImage = styled.img`
  width: 97px;
  height: 112px;
  border-radius: 8px 0 0 8px;
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

  .food_description {
    color: #B8B8B8;
  }
  .food_name {
    color: #E8222E;
  }

  .detalhe {
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
  }
`;

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  
  p {
    margin: 0 6px;
    font-size: 18px;
  }
`;