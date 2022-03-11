import React from "react";
import { goToRestaurant } from "../../router/coordinator";
import { useHistory } from "react-router-dom";
import {ConteinerRestPrincipal} from "./styled";

const CardRestaurant =(props)=>{
const history = useHistory()


return(
<ConteinerRestPrincipal onClick={()=> goToRestaurant(history, props.id)}>
<div>
    <img src={props.logoUrl} alt="Foto do Restaurante" style={{ height: "100%", width: "100%" }}/>
</div>
<div>
   <span>{props.name}</span>
</div>
<br></br>
<div>
   <span>Valor Entrega R$:{props.shipping.toFixed(2).replace(".", ",")}</span>
</div>
</ConteinerRestPrincipal>

)
}
export default CardRestaurant;



