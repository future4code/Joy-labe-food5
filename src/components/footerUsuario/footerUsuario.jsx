import React from "react";
import { ContainerMenuButtons } from "./styled";
import { useHistory } from "react-router-dom";
import { goToCart, goToProfile, goToHome } from "../../router/coordinator";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {IconButton} from "@mui/material";
import "../../style.css";

const FooterUsuario = () => {
  const history = useHistory();
  return (
    <ContainerMenuButtons>
      <IconButton className="BotaoFooter" onClick={() => goToHome(history)} >
        <HomeIcon fontSize="large" />
      </IconButton>
      <IconButton className="BotaoFooter" onClick={() => goToCart(history)} > 
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      <IconButton className="BotaoFooter ativo" onClick={() => goToProfile(history)}>
        <AccountCircleIcon
          fontSize="large"
        />
      </IconButton>
    </ContainerMenuButtons>
  );
};
export default FooterUsuario;
