import React, { useState } from "react";
import ContextGlobal from "./ContextGlobal";

const GlobalState = (props) => {
  const [carrinho, setcarrinho] = useState([]);
  const [pedido, setpedido] = useState([]);

   const addCarrinho = (lanche) => {
    const posicao = carrinho.findIndex((item) => {
      return item.id === lanche.id;
    });
    const newCarrinho = [...carrinho];
    const newPedido = [...pedido];
    if (posicao === -1) {
      newCarrinho.push({ ...lanche, quantidade: 1 });
      newPedido.push({ id: lanche.id, quantidade: 1 });
    } else {
      newCarrinho[posicao].quantidade += 1;
      newPedido[posicao].quantidade += 1;
    }
    setcarrinho(newCarrinho);
    setpedido(newPedido);
  };

  const removeCarrinho = (lanche) => {
    const posicao = carrinho.findIndex((item) => {
      return item.id === lanche.id;
    });

    const newCarrinho = [...carrinho];
    if (newCarrinho[posicao].quantidade === 1) {
      newCarrinho.splice(posicao, 1);
    } else {
      newCarrinho[posicao].quantidade -= 1;
    }
    setcarrinho(newCarrinho);
  };
  

  return (
    <>
      <ContextGlobal.Provider
        value={(carrinho, addCarrinho, removeCarrinho, pedido)}>
        {props.children}
      </ContextGlobal.Provider>
    </>
  );
};

export default GlobalState;
