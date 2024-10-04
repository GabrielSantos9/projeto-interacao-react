import React from 'react';

import {
  Intro,
  Titulo,
  Paragrafo,
  CorReact,
  ExemploNome,
} from '../Estilizações/EIntroducao';

import {
  CampoNome,
  LabelNome,
  SvgNome,
  BotaoProximo,
  PreencherInput,
} from '../Estilizações/ECampoNome';

const Introducao = ({ AmarzenaNome }) => {
  const [StorageName, setStorageName] = React.useState('');
  
  const handleChange = (event) => {
    setStorageName(event.target.value); // Armazena o valor do input no estado
  };

  const handleSubmit = () => {
    ArmazenaNome(storageName); // Chama a função para armazenar o nome
    console.log(storageName); // Exibe o nome no console
  };

  return (
    <>
      <Intro>
        <Titulo>
          {' '}
          Olá, seja bem vindo no meu primeiro projeto utilizando{' '}
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
        <PreencherInput id="nome" type="text" name="nome" />
        <BotaoProximo type="button" onClick={AmarzenaNome}>
          próximo
        </BotaoProximo>
      </CampoNome>
    </>
  );
};

export default Introducao;
