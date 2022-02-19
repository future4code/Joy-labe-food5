import React, { useState } from "react";
import { ContainerMenuButtons } from "./styled";
import { useHistory } from "react-router-dom";
import {
  goToCart,
  ActiveOrder,
  goToProfile,
  goToHome
} from "./../../router/coordinator";
import ReceiptIcon from "@mui/icons-material/Receipt";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const FooterContainer = () => {
  const history = useHistory();
  const [url, setUrl] = useState("home");
  return (
    <>
      <ContainerMenuButtons>
        <IconButton onClick={() => goToHome(history)} variant="contained">
          <HomeIcon fontSize="large" />
        </IconButton>

        {url !== window.location.href.substring(22, 100) ? (
          <IconButton
            onClick={() =>
              goToCart(history, window.location.href.substring(34, 100))
            }
            variant="contained"
          >
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton onClick={() => ActiveOrder(history)} variant="contained">
            <ReceiptIcon fontSize="large" />
          </IconButton>
        )}
        <IconButton onClick={() => goToProfile(history)} variant="contained">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </ContainerMenuButtons>
    </>
  );
};
export default FooterContainer;
