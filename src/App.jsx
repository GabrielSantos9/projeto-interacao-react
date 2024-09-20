import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introducao from "../src/Componentes/Introducao";
import FormNome from "../src/Componentes/CampoNome";
import CampoQuestoes from "./Componentes/CampoQuestoes";

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
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(1);
  };
  return (
    <>
      <GlobalStyle />
      <ConteudoGeral>
        <ConteudoPrincipal>
          <Introducao />
          <FormNome />
        </ConteudoPrincipal>
        <CampoQuestoes></CampoQuestoes>
      </ConteudoGeral>
    </>
  );
};

export default App;
