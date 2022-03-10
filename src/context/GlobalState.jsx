import React, { useState } from "react";
import ContextGlobal from "./ContextGlobal";

const GlobalState = (props) => {
    const [carrinho, setcarrinho] = useState([]);
    const [pedido, setpedido] = useState([]);
    const [restaurante, setRestaurante] = useState([]);
    const [data, setData] = useState();
    const [valorTotal, setValorTotal] = useState(0)

    console.log(valorTotal)

    const addCarrinho = (lanche) => {
        let somar = valorTotal
        const posicao = carrinho.findIndex((item) => {
            return item.id === lanche.id;
        });
        const newCarrinho = [...carrinho];
        const newPedido = [...pedido];
        if (posicao === -1) {
            somar = somar + lanche.price
            newCarrinho.push({ ...lanche, quantidade: 1 });
            newPedido.push({ id: lanche.id, quantidade: 1 });
        } else {
            somar = somar + lanche.price
            newCarrinho[posicao].quantidade += 1;
            newPedido[posicao].quantidade += 1;
        }
        setcarrinho(newCarrinho);
        setpedido(newPedido);
        setValorTotal(somar)
    };

    const removeCarrinho = (lanche) => {
        let subitrair = valorTotal
        const posicao = carrinho.findIndex((item) => {
            return item.id === lanche.id;
        });

        const newCarrinho = [...carrinho];
        if (newCarrinho[posicao].quantidade === 1) {
            subitrair = subitrair - lanche.price
            newCarrinho.splice(posicao, 1);
        } else {
            subitrair = subitrair - lanche.price
            newCarrinho[posicao].quantidade -= 1;
        }
        setcarrinho(newCarrinho);
        setValorTotal(subitrair)
    };

    return (
        <>
            <ContextGlobal.Provider
                value={{
                        carrinho,
                        addCarrinho, 
                        removeCarrinho, 
                        pedido, 
                        restaurante, 
                        setRestaurante, 
                        data, 
                        setData,
                        valorTotal, 
                        setValorTotal
                        }}>
                {props.children}
            </ContextGlobal.Provider>
        </>
    );
};

export default GlobalState;
