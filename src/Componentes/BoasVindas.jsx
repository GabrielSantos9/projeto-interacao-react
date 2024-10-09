import React, { useState } from "react";
import {
  Comprimento,
  TituloBoasVindas,
  ComprimentoNome,
  CorNome,
  ParagrafoComprimento,
  BotaoIniciarQuestionamentos,
} from "../Estilizações/EBoasVindas";
import CampoQuestoes from "../Componentes/CampoQuestoes";

const BoasVindas = () => {
  const [TelaQuestoes, setTelaQuestoes] = useState(false);

  const handleScreen = () => {
    setTelaQuestoes(true);
  };

  return (
    <>
      {!TelaQuestoes && (
        <Comprimento onClick={handleScreen}>
          <TituloBoasVindas>Boas vindas!</TituloBoasVindas>
          <ComprimentoNome>
            Olá,
            <CorNome> Nome</CorNome>!
          </ComprimentoNome>
          <ParagrafoComprimento>
            Agora que eu já descobri seu nome, bora responder o questionamento.
          </ParagrafoComprimento>
          <BotaoIniciarQuestionamentos type="button" onClick={handleScreen}>
            iniciar
          </BotaoIniciarQuestionamentos>
        </Comprimento>
      )}
      {TelaQuestoes && <CampoQuestoes />}
    </>
  );
};

export default BoasVindas;
