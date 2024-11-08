import React from "react";
import iconeUsuario from "../img/person1.svg";

import {
  Intro,
  Titulo,
  Paragrafo,
  CorReact,
  ExemploNome,
} from "../Estilizações/eIntroducao";

import {
  CampoNome,
  LabelNome,
  SvgNome,
  BotaoProximo,
  InputWrapper,
  Icon,
  PreencherNome,
} from "../Estilizações/eCampoNome";

const Introducao = ({ StorageName, setStorageName, onClick }) => {
  const handleChange = (event) => {
    setStorageName(event.target.value);
  };

  const handleSubmit = () => {
    if (StorageName.trim() === "") {
      validacaoNome()
      return;
    }
    onClick();
  };

  const validacaoNome = () => {
    Swal.fire({
      title: "Atenção!",
      text: "Para começar a interação será necessário me dizer seu nome!",
      icon: "warning",
      background: "#414141",
      color: "#FFFFFF",
      confirmButtonColor: "#8000ff",
    });
  }

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
