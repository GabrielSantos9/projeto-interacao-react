import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Introducao from "../src/Componentes/Introducao";
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
