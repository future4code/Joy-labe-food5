import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Base_URL";
import { useParams } from "react-router";
import FooterContainer from "../../components/Footer/Footer";
import ContextGlobal from "../../context/ContextGlobal";
import {
  RestaurantDetalhes,
  ImageLoja,
  FoodList,
  FoodContainer,
  RestaurantCard,
  MenuRestaurant,
  MenuButtons,
  InfoFood,
  FoodImage
} from "./styled";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const RestauranteDetalhes = () => {
  const [data, setData] = useState();
  const [dataFoods, setDataFoods] = useState();
  const { carrinho, addCarrinho, removeCarrinho } = useContext(ContextGlobal);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((res) => {
        setData(res.data.restaurant);
        setDataFoods(res.data.restaurant.products);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const Quatidade = (id) => {
    const QuantidadeTotal = carrinho.find((item) => item.id === id);
    return QuantidadeTotal ? QuantidadeTotal.quantidade : 0;
  };

  return (
    <>
      <RestaurantDetalhes>
        <RestaurantCard>
          <h1>Restaurante</h1>
        </RestaurantCard>

        <MenuRestaurant>
          <ImageLoja src={data && data.logoUrl} alt="logo loja" />
          <span className="fatasia">{data && data.name}</span>
          <span className="categoria">{data && data.category}</span>
          <div className="ajuste-tempo-valor">
            <span className="tempo">{data && data.deliveryTime}-Min</span>
            <span className="valor">
              Valor Entrega R$:{data && data.shipping.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <span className="endereço">{data && data.address}</span>
        </MenuRestaurant>
        {dataFoods &&
          dataFoods.map((i) => {
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
          })}
      </RestaurantDetalhes>
      <FooterContainer />
    </>
  );
};

export default RestauranteDetalhes;
