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

  function AmarzenaNome() {
    console.log(`${setStorageName}`);
  }
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
        <PreencherInput id="nome" type="text" name="nome" value={setStorageName} />
        <BotaoProximo type="button" onClick={AmarzenaNome}>
          próximo
        </BotaoProximo>
      </CampoNome>
    </>
  );
};

export default Introducao;
