import React, { useState } from "react";
import {
  Comprimento,
  TituloBoasVindas,
  ComprimentoNome,
  CorNome,
  ParagrafoComprimento,
  BotaoIniciarQuestionamentos,
} from "../Estilizações/EBoasVindas";
import CampoQuestoes from "../Componentes/CampoQuestoes"

const BoasVindas = () => {
  const [testeRender, setTesteRender] = useState(false);

  const handleTeste = () => {
    setTesteRender(true);
  }

  return (
    <>
    {!testeRender && <Comprimento onNext={handleTeste}>
      <TituloBoasVindas>Boas vindas!</TituloBoasVindas>
      <ComprimentoNome>
        Olá,
        <CorNome> Nome</CorNome>!
      </ComprimentoNome>
      <ParagrafoComprimento>
        Agora que eu já descobri seu nome, bora responder o questionamento.
      </ParagrafoComprimento>
      <BotaoIniciarQuestionamentos type="button" onClick={handleTeste}>iniciar</BotaoIniciarQuestionamentos>
    </Comprimento>}
    {testeRender && <CampoQuestoes/>}
    </>
  );
};

export default BoasVindas;
