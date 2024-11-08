import React, { useState } from "react";
import {
  Comprimento,
  TituloBoasVindas,
  ComprimentoNome,
  CorNome,
  ParagrafoComprimento,
  BotaoIniciarQuestionamentos,
} from "../Estilizações/eBoasVindas";
import CampoQuestoes from "./CampoQuestoes";

const BoasVindas = ({ StorageName }) => {
  const [TelaQuestoes, setTelaQuestoes] = useState(false);

  const handleScreen = () => {
    setTelaQuestoes(true);
  };

  return (
    <>
      {!TelaQuestoes && (
        <Comprimento>
          <TituloBoasVindas>Boas vindas!</TituloBoasVindas>
          <ComprimentoNome>
            Olá,
            <CorNome> {StorageName}</CorNome>!
          </ComprimentoNome>
          <ParagrafoComprimento>
            Agora que eu já sei o seu nome bora responder o questionamento.
          </ParagrafoComprimento>
          <BotaoIniciarQuestionamentos type="button" onClick={handleScreen}>
            começar
          </BotaoIniciarQuestionamentos>
        </Comprimento>
      )}
      {TelaQuestoes && <CampoQuestoes />}
    </>
  );
};

export default BoasVindas;
