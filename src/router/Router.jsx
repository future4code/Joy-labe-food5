import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Carrinho from "../pages/carrinho/Carrinho";
import Home from "../pages/home/Home";
import Usuario from "../pages/usuario/Usuario";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/error/ErrorPage";
import Cadastrar from "../pages/cadastrar/Cadastrar";
import SplashPage from "../pages/SplashPage/SplashPage";
import RestauranteDetalhes from "../pages/detalhe/DetalheRest";
import Endereco from "../pages/endereco/Endereco";
import ActiveOrder from "../pages/activeOrder/ActiveOrder";
import HistoryOrder from "../pages/historyOrder/historyOrder";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={SplashPage} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={Cadastrar} />
        <Route exact path={"/endereco"} component={Endereco} />
        <Route exact path={"/pedidos-ativos"} component={ActiveOrder} />
        <Route exact path={"/profile"} component={Usuario} />
        <Route exact path={"/historico"} component={HistoryOrder} />
        <Route exact path={"/restaurante/:id"} component={RestauranteDetalhes}/>
        <Route exact path={"/restaurante/:id/pedido"} component={Carrinho} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
