import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carrinho from "../pages/carrinho/Carrinho";
import Home from "../pages/home/Home";
import PerfilUsuario from "../pages/perfilUsuario/Usuario";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/error/ErrorPage";
import Cadastrar from "../pages/cadastrar/Cadastrar";
import SplashPage from "../pages/SplashPage/SplashPage";
import RestauranteDetalhes from "../pages/detalhe/DetalheRest";
import Endereco from "../pages/endereco/Endereco";
import ActiveOrder from "../pages/activeOrder/ActiveOrder";
import HistoryOrder from "../pages/historyOrder/historyOrder";
import EditaEndereco from "../pages/perfilUsuario/dadosUsuario/dadosEndereço/EditaDadosEndereco"
import EditaLogin from "../pages/perfilUsuario/dadosUsuario/dadosLogin/EditaDadosLogin"

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
        <Route exact path={"/profile"} component={PerfilUsuario} />
        <Route exact path={"/profile/profileEdit"} component={EditaLogin} />
        <Route exact path={"/profile/address/addressEdit"} component={EditaEndereco} />
        <Route exact path={"/historico"} component={HistoryOrder} />
        <Route exact path={"/restaurante/:id"} component={RestauranteDetalhes}/>
        <Route exact path={"/restaurante/:id/pedido"} component={Carrinho} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
