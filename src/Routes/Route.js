import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../Components/Home";
import Api from "../Components/Api";

function Router(){
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="Cards" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
