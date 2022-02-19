import React, { useState } from "react";
import { ContainerMenuButtons } from "./styled";
import { useHistory } from "react-router-dom";
import { goToCart, ActiveOrder, goToProfile, goToHome, } from "./../../router/coodinator";
import { Button } from "@material-ui/core";

 const FooterContainer = () => {
    const history = useHistory();
    const [url, setUrl] = useState("home");
    return (
        <>
        <ContainerMenuButtons>
            <Button onClick={() => goToHome(history)} variant="contained" />
            {url !== window.location.href.substring(22, 100) ? (
            <Button onClick={() => goToCart(history, window.location.href.substring(34, 100))} variant="contained" />
            ) : (
            <Button onClick={() => ActiveOrder(history)} variant="contained" />
             )}
            <Button onClick={() => goToProfile(history)} variant="contained"/>
        </ContainerMenuButtons>
        </>
    );
};
export default FooterContainer