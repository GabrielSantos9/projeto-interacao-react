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
  PreencherNome,
} from "../Estilizações/ECampoNome";

const Introducao = ({ ArmazenaNome }) => {
  const [StorageName, setStorageName] = React.useState("");

  const handleChange = (event) => {
    setStorageName(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Valor antes da validação:", StorageName);
    if (StorageName.trim() === "") {
      alert("Por favor, insira seu nome.");
      return;
    }
    // ArmazenaNome(StorageName);
    alert(StorageName);
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

        <PreencherNome
          id="nome"
          type="text"
          name="nome"
          value={StorageName}
          onChange={handleChange}
          placeholder="Digite algo..."
        ></PreencherNome>
        <BotaoProximo type="button" onClick={handleSubmit}>
          próximo
        </BotaoProximo>
      </CampoNome>
    </>
  );
};
export default Introducao;
