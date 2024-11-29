import styled from "styled-components";
import { animacaoTela, animacaoPerguntas } from "../Estilizações/animacoes";

export const BarraSuperior = styled.div`
  width: 740px;
  height: 36px;
  background-color: #6c63ff;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;

  @media (max-width: 820px) {
    width: 620px;
  }

  @media (max-width: 635px) {
    width: 380px;
  }

  @media (max-width: 430px) {
    width: 0px;
    height: 0px;
  }
`;

export const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: white;

  @media (max-width: 430px) {
    width: 0px;
    height: 0px;
  }
`;

export const ConteudoResultado = styled.div`
  width: 740px;
  height: 518px;
  display: flex;
  background-color: #1f1f1f;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  animation: ${animacaoTela} 2s;

  @media (max-width: 820px) {
    width: 620px;
  }

  @media (max-width: 635px) {
    width: 380px;
    height: 596px;
  }

  @media (max-width: 430px) {
    width: 253px;
    height: 509px;
    background-color: #292929;
  }
`;

export const TituloResultados = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: white;
  display: flex;
  margin-top: 30px;

  @media (max-width: 635px) {
    margin-top: 25px;
  }

  @media (max-width: 430px) {
    margin-top: 0px;
    font-size: 32px;
  }
`;

export const Estatisticas = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: 635px) {
    margin-top: 30px;
    margin-bottom: 32px;
    flex-direction: column;

    width: 86px;
    height: 182px;
    align-items: center;
  }

  @media (max-width: 430px) {
    margin-top: 20px;
    margin-bottom: 35px;
  }
`;

export const NumeroPerguntas = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 15px;
  background-color: #2a2a2a;

  @media (max-width: 820px) {
    width: 141px;
  }

  @media (max-width: 635px) {
    width: 86px;
    height: 54px;
    margin-bottom: 10px;
    background-color: #1f1f1f;
  }

  @media (max-width: 430px) {
    background-color: #292929;
  }
`;

export const NumeroAcertos = styled.div`
  width: 150px;
  height: 100px;
  margin: 0px 50px;
  border-radius: 15px;
  background-color: #2f2f2f;

  @media (max-width: 820px) {
    width: 141px;
  }

  @media (max-width: 635px) {
    width: 86px;
    height: 54px;
    margin-bottom: 10px;
    background-color: #1f1f1f;
  }

  @media (max-width: 430px) {
    background-color: #292929;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const NumeroErros = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 15px;
  background-color: #2a2a2a;

  @media (max-width: 820px) {
    width: 141px;
  }

  @media (max-width: 635px) {
    width: 86px;
    height: 54px;
    margin-bottom: 10px;
    background-color: #1f1f1f;
  }

  @media (max-width: 430px) {
    background-color: #292929;
    margin-bottom: 0px;
  }
`;

export const TipoEstatisticas = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  margin: 10px 32px 6px 32px;

  @media (max-width: 635px) {
    margin: 0px;
    margin-bottom: 5px;
  }
`;

export const QuantidadePerguntas = styled.div`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #ab6de9;

  @media (max-width: 635px) {
    font-size: 24px;
  }
`;

export const QuantidadeAcertos = styled.div`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #93f597;

  @media (max-width: 635px) {
    font-size: 24px;
  }
`;

export const QuantidadeErros = styled.div`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #f45050;

  @media (max-width: 635px) {
    font-size: 24px;
  }
`;

export const PerguntasRespostas = styled.div`
  width: 640px;
  height: 144px;
  display: flex;
  margin-top: 45px;
  margin-left: 50px;
  margin-right: 50px;
  flex-direction: column;
  animation: ${animacaoPerguntas} 2s;

  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #a3a3a3;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #484848;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media (max-width: 820px) {
    width: 570px;
    margin-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (max-width: 635px) {
    margin-top: 0px;
    width: 327px;
    height: 173px;
  }

  @media (max-width: 430px) {
    width: 253px;
  }
`;

export const TituloPeR = styled.div`
  display: flex;
  align-items: center;
`;

export const CirclePR = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
  background: linear-gradient(80deg, #8000ff, #4d0099);
  display: flex;
`;

export const TituloPR = styled.h2`
  font-size: 20px;
  color: white;
  font-weight: 700;
  display: flex;

  @media (max-width: 820px) {
    font-size: 16px;
  }
`;

export const QuestionamentosERespostas = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 430px) {
    margin-top: 14px;
  }
`;

export const Questionamento = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin-left: 14px;
  color: white;
  margin-bottom: 3px;

  @media (max-width: 635px) {
    font-size: 14px;
  }

  @media (max-width: 430px) {
    margin-left: 0px;
  }
`;

export const Resposta = styled.span`
  color: #cccccc;
  margin-left: 14px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  margin-bottom: 5px;

  @media (max-width: 430px) {
    margin-left: 0px;
  }
`;

export const Negrito = styled.p`
  color: #cccccc;
  font-weight: 700;
  font-size: 13px;
`;

export const Correto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RespostaCorreta = styled.p`
  color: #cccccc;
  font-weight: 500;
  font-size: 13px;
  display: flex;
`;

export const ValorCorreto = styled.div`
  display: flex;
  margin-left: 14px;
`;

export const BotaoReiniciar = styled.h3`
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: underline;
  margin-top: 68px;
  cursor: pointer;

  &:hover {
    transition: 0.9s;
    color: #8000ff;
    font-weight: 700;
  }

  @media (max-width: 635px) {
    margin-top: 34px;
  }
`;
