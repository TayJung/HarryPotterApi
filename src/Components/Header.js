import React, { useState } from "react";
import Home from "../Components/Home";
import Api from "../Components/Api";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "../Style/StyleHeader.js";
import Logo from "../assets/images/LogoHarryPotter.png";
import Harry from "../assets/images/harryPotter.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Menu = () => {
    return (
      <S.Nav>
        <S.List>
          <S.Li>
            <S.Menu to="/">Home</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu to="/cards">Cards</S.Menu>
          </S.Li>
        </S.List>
      </S.Nav>
    );
  };
  return (
    <BrowserRouter>
      <S.BoxHeader>
        <Link to="/">
          <S.Logo src={Logo} alt="" />
        </Link>
        <S.Harry src={Harry} alt="" />
        <S.BtnHeader
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open === true ? "x" : "Menu"}
          {open && Menu()}
        </S.BtnHeader>
      </S.BoxHeader>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
