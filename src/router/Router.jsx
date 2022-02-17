import React from "react";
import { BrowserRouter, Route, Routes ,Switch } from "react-router-dom";
import DetalheRest from "../pages/detalhe/DetalheRest";
import Carrinho from "../pages/carrinho/Carrinho";
import Home from "../pages/home/Home";
import Usuario from "../pages/usuario/Usuario";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/error/ErrorPage";
import Cadastrar from "../pages/cadastrar/Cadastrar";
import SplashPage from "../pages/SplashPage/SplashPage";

import Endereco from "../pages/SplashPage/SplashPage";
import ActiveOrder from "../pages/SplashPage/SplashPage";
import HistoryOrder from "../pages/SplashPage/SplashPage";


const Router = () => {
  return (
    <BrowserRouter>
     
      <Switch>
 
      <Route exact path={"/"} component={SplashPage} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={Cadastrar} />
        <Route exact path={"/endereco"} component={Endereco} /> 
        <Route exact path={"/restaurante/:id"}component={DetalheRest}/>       
        <Route exact path={"/active-order"} component={ActiveOrder} />
        <Route exact path={"/profile"} component={Usuario} />
        <Route exact path={"/historico"} component={HistoryOrder} />
        <Route exact path={"/restaurante/:id/pedido"} component={Carrinho} />
        <Route component={ErrorPage} />

        </Switch>
   
    </BrowserRouter>
  );
}

export default Router