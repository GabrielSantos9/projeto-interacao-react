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

const Introducao = ({ ArmazenaNome }) => {
  const [StorageName, setStorageName] = React.useState("");

  const handleChange = (event) => {
    setStorageName(event.target.value); // Armazena o valor do input no estado
  };

  const handleSubmit = () => {
    console.log("Valor antes da validação:", StorageName);
    if (StorageName.trim() === "") {
      alert("Por favor, insira seu nome.");
      return;
    }
    ArmazenaNome(StorageName);
    console.log(StorageName);
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
          value={StorageName}
          onChange={handleChange}
        />
        <BotaoProximo type="button" onClick={handleSubmit}>
          próximo
        </BotaoProximo>
      </CampoNome>
    </>
  );
};
export default Introducao;
