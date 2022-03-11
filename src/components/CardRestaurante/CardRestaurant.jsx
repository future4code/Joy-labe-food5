import React from "react";
import { goToRestaurant } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import {ConteinerRestPrincipal} from "./styled";

const CardRestaurant =(props)=>{
const history = useHistory()


return(
<ConteinerRestPrincipal onClick={()=> goToRestaurant(history, props.id)}>
<div>
    <img src={props.logoUrl} alt="Foto do Restaurante" />
</div>
<div>
   <span>{props.name}</span>
   <span>Valor Entrega R$:{props.shipping.toFixed(2).replace(".", ",")}</span>
</div>
<div>

</div>
</ConteinerRestPrincipal>

)
}
export default CardRestaurant;



