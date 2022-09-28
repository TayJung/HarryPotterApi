import React from "react";
import Header from "./Components/Header";
import { GlobalStyle, Container } from "./Style/GlobalStyle.js";

//Estilização não finalizada = projeto sem responsivo ainda.

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
};
export default App;
