import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introducao from "../src/Componentes/Introducao";
import FormNome from "../src/Componentes/CampoNome";

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: content-box;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: hsl(0, 0%, 16%);
  font-family: "Montserrat", sans-serif;
}
`;

const ConteudoGeral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ConteudoPrincipal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ConteudoGeral>
        <ConteudoPrincipal>
          <Introducao />
          <FormNome />
        </ConteudoPrincipal>
      </ConteudoGeral>
    </>
  );
};

export default App;
