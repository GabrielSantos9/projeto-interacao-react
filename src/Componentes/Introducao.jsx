import React from "react";
import iconeUsuario from "../img/person1.svg";

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
  InputWrapper,
  Icon,
  PreencherNome,
} from "../Estilizações/ECampoNome";

const Introducao = ({ StorageName, setStorageName, onClick }) => {
  const handleChange = (event) => {
    setStorageName(event.target.value);
  };

  const handleSubmit = () => {
    if (StorageName.trim() === "") {
      alert("Por favor, insira seu nome.");
      return;
    }
    onClick();
  };

  return (
    <>
      <Intro>
        <Titulo>
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
        <InputWrapper>
          <Icon src={iconeUsuario} alt="search-icon"></Icon>
          <PreencherNome
            id="nome"
            type="text"
            name="nome"
            value={StorageName}
            onChange={handleChange}
          ></PreencherNome>
        </InputWrapper>
        <BotaoProximo type="button" onClick={handleSubmit}>
          próximo
        </BotaoProximo>
      </CampoNome>
    </>
  );
};

export default Introducao;
