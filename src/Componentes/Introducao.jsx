import React from 'react'
import { Intro, Titulo, Paragrafo, CorReact, CorNome } from '../Estilizações/EIntroducao'

const Introducao = () => {
  return (
    <Intro>
      <Titulo> Olá, seja bem vindo no meu primeiro projeto utilizando
      <CorReact>React!</CorReact></Titulo>
      <Paragrafo>Antes de começar alguns questionamentos básicos sobre o React,
      será necessário dizer o seu <CorNome>Nome</CorNome>!</Paragrafo>
    </Intro>
  )
}

export default Introducao
