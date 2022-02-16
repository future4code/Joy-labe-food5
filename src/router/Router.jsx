import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalheRest from "../pages/detalhe/DetalheRest";
import Carrinho from "../pages/carrinho/Carrinho";
import Home from "../pages/home/Home";
import Usuario from "../pages/usuario/Usuario";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/error/ErrorPage";
import Cadastrar from "../pages/cadastrar/Cadastrar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Cadastrar />}/>
        <Route path="/restaurants/:restaurantId" element={<DetalheRest />}/>          
        <Route path="/active-order" element={<Carrinho />}/>
        <Route path="/profile" element={<Usuario />}/>
        <Route path="/" element={<Home/>} />
        <Route path ="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router