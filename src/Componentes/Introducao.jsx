import React from 'react'
import { Intro, Titulo, Paragrafo, CorReact, ExemploNome } from '../Estilizações/EIntroducao'

const Introducao = () => {
  return (
    <Intro>
      <Titulo> Olá, seja bem vindo no meu primeiro projeto utilizando <CorReact>React</CorReact>!</Titulo>
      <Paragrafo>Antes de começar alguns questionamentos básicos sobre o React,
      será necessário dizer o seu <ExemploNome>Nome</ExemploNome>!</Paragrafo>
    </Intro>
  )
}

export default Introducao
