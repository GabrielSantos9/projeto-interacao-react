import React from "react";
import iconeUsuario from "../img/person1.svg";

import {
  Intro,
  Titulo,
  Paragrafo,
  CorReact,
  ExemploNome,
  ConteudoIntrodutorio,
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
  const MAX_LENGTH = 16;
  const handleChange = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
    setStorageName(event.target.value);
    }
  };

  const validacaoName = () => {
    if (StorageName.trim() === "") {
      validacaoNome("Para começar a interação será necessário me dizer seu nome!");
      return;
    }

    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(StorageName)) {
      validacaoNome("Por favor, insira apenas Letras no campo de nome!");
      return;
    }

    onClick();
  };

  const validacaoNome = (mensagem) => {
    Swal.fire({
      title: "Atenção!",
      text: mensagem,
      icon: "warning",
      background: "#414141",
      color: "#FFFFFF",
      confirmButtonColor: "#8000ff",
    });
  };

  return (
    <>
      <ConteudoIntrodutorio>
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
              maxLength={MAX_LENGTH}
            ></PreencherNome>
          </InputWrapper>
          <BotaoProximo type="button" onClick={validacaoName}>
            próximo
          </BotaoProximo>
        </CampoNome>
      </ConteudoIntrodutorio>
    </>
  );
};

export default Introducao;
