import React from "react";
import { goToRestaurant } from "../../router/coodinator";
import { useHistory } from "react-router-dom";
import {ConteinerRestPrincipal} from "./styled";

const CardRestaurant =(props)=>{
const history = useHistory()


return(
<ConteinerRestPrincipal onClick={()=> goToRestaurant(history, props.restaurante.id)}>
<div>
    <img src={props.restaurante.logoUrl} alt="Foto do Restaurante" />
</div>
<div>
   <span>{props.restaurante.name}</span>
   <span>Valor Entrega R$:{props.restaurante.shipping.toFixed(2).replace(".", ",")}</span>
</div>
<div>

</div>
</ConteinerRestPrincipal>

)
}
export default CardRestaurant;



