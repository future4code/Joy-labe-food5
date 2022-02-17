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

const Router = () => {
  return (
    <BrowserRouter>
     
      <Switch>
 
      <Route exact path={"/"} component={SplashPage} />
      <Route exact path={"/home"} component={Home} />

        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Cadastrar />}/>
        <Route path="/restaurants/:restaurantId" element={<DetalheRest />}/>          
        <Route path="/active-order" element={<Carrinho />}/>
        <Route path="/profile" element={<Usuario />}/>
        <Route path ="*" element={<ErrorPage />}/>
        </Switch>
   
    </BrowserRouter>
  );
}

export default Router