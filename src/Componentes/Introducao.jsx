import React, { useState } from "react";

import {
  Intro,
  Titulo,
  Paragrafo,
  CorReact,
  ExemploNome,
} from "../Estilizações/EIntroducao";

import {
  CampoNome,
  LabelNome,
  SvgNome,
  BotaoProximo,
  PreencherInput,
} from "../Estilizações/ECampoNome";

const Introducao = ({ onNext }) => {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState(null);

  // Função para atualizar o valor do input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Função para salvar o valor do input
  const salvarResultado = () => {
    setResultado(inputValue); // Salva o valor atual do input
  };

  return (
    <>
      <Intro>
        <Titulo>
          {" "}
          Olá, seja bem vindo no meu primeiro projeto utilizando{" "}
          <CorReact>React</CorReact>!
        </Titulo>
        <Paragrafo>
          Antes de começar alguns questionamentos básicos sobre o React, será
          necessário dizer o seu <ExemploNome>Nome</ExemploNome>!
        </Paragrafo>
      </Intro>
      <CampoNome>
        <SvgNome />
        <LabelNome htmlFor="nome">Seu nome</LabelNome>
        <PreencherInput
          id="nome"
          type="text"
          name="nome"
          value={inputValue}
          onChange={handleInputChange}
        />  
        <BotaoProximo type="button" onClick={salvarResultado}>
          próximo
        </BotaoProximo>
      </CampoNome>
    </>
  );
};

export default Introducao;
