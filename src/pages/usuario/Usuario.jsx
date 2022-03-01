import React from 'react';
import { useHistory } from "react-router-dom";

export default function Usuario() {
  const history = useHistory();

  const irParaCarrinho = () => {
    history.push("/restaurante/1/pedido")
  }

  return (
    <div>
      Usuario
      <button onClick={() => irParaCarrinho() }>Carrinho</button>
    </div>
  )
}
