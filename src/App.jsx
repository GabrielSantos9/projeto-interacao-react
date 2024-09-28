import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introducao from "../src/Componentes/Introducao";
import FormNome from "../src/Componentes/CampoNome";
import CampoQuestoes from "./Componentes/CampoQuestoes";
import BoasVindas from "./Componentes/BoasVindas";

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  const [showCampoQuestoes, setShowCampoQuestoes] = useState(false);

  const handleNextClick = () => {
    setShowCampoQuestoes(true);
  };
  return (
    <>
      <GlobalStyle />
      <ConteudoGeral>
        <ConteudoPrincipal>
        {!showCampoQuestoes && <Introducao onNext={handleNextClick} />}
        {showCampoQuestoes && <BoasVindas/>}
        {showCampoQuestoes && <CampoQuestoes/>}
        </ConteudoPrincipal>
      </ConteudoGeral>
    </>
  );
};

export default App;
