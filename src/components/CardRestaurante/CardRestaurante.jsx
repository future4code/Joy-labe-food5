import React from "react";
import { goToRestaurantId } from "../../router/coodinator";
import { useHistory } from "react-router-dom";
import {ConteinerRestPrincipal} from "./styled";

export const CardRestaurante =(props)=>{
const history = useHistory()


return(
<ConteinerRestPrincipal onClick={()=> goToRestaurantId(history, props.restaurante.id)}>
<div>
    <img src={props.restaurante.logoUrl} alt="Foto do Restaurante" />
</div>
<div>
   <span>{props.restaurante.name}</span>
   <span>Valor Entrega R${props.restaurante.shipping.toFixed(2).replace(".", ",")}</span>
</div>
<div>

</div>
</ConteinerRestPrincipal>

)
}