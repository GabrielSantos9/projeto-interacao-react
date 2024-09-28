import React from "react";
import {
  Comprimento,
  TituloBoasVindas,
  ComprimentoNome,
  CorNome,
  ParagrafoComprimento,
  BotaoIniciarQuestionamentos,
} from "../Estilizações/EBoasVindas";

const BoasVindas = () => {
  return (
    <Comprimento>
      <TituloBoasVindas>Boas vindas!</TituloBoasVindas>
      <ComprimentoNome>
        Olá,
        <CorNome> Nome</CorNome>!
      </ComprimentoNome>
      <ParagrafoComprimento>
        Agora que eu já descobri seu nome, bora responder o questionamento.
      </ParagrafoComprimento>
      <BotaoIniciarQuestionamentos>iniciar</BotaoIniciarQuestionamentos>
    </Comprimento>
  );
};

export default BoasVindas;
