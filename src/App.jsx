import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introducao from "../src/Componentes/Introducao";
import BoasVindas from "./Componentes/BoasVindas";
import {animacaoTela} from "./Estilizações/animacoes";

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #292929;
  font-family: "Montserrat", sans-serif;
}
`;

const ConteudoGeral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animacaoTela} 0.9s;
`;

const App = () => {
  const [StorageName, setStorageName] = useState("");
  const [showCampoQuestoes, setShowCampoQuestoes] = useState(false);

  const handleNextClick = () => {
    if (StorageName.trim() !== "") {
      setShowCampoQuestoes(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ConteudoGeral>
          {!showCampoQuestoes && (
            <Introducao
              StorageName={StorageName}
              setStorageName={setStorageName}
              onClick={handleNextClick}
            />
          )}
          {showCampoQuestoes && (
            <BoasVindas StorageName={StorageName} onClick={handleNextClick} />
          )}
      </ConteudoGeral>
    </>
  );
};

export default App;
