import styled from "styled-components";

export const ConteudoResultado = styled.div`
  width: 740px;
  height: 518px;
  display: flex;
  background-color: #1f1f1f;
  flex-direction: column;
  align-items: center;
`;

export const BarraSuperior = styled.div`
  width: 740px;
  height: 36px;
  background-color: #6c63ff;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: white;
`;

export const TituloResultados = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: white;
  display: flex;
  margin-top: 30px;
`;

export const Estatisticas = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const NumeroPerguntas = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 15px;
  background-color: #2a2a2a;
`;

export const NumeroAcertos = styled.div`
  width: 150px;
  height: 100px;
  margin: 0px 50px;
  border-radius: 15px;
  background-color: #2f2f2f;
`;

export const NumeroErros = styled.div`
  width: 150px;
  height: 100px;
  border-radius: 15px;
  background-color: #2a2a2a;
`;

export const TipoEstatisticas = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  margin: 10px 32px 6px 32px;
`;

export const QuantidadePerguntas = styled.div`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #ab6de9;
`;

export const QuantidadeAcertos = styled.div`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #93f597;
`;

export const QuantidadeErros = styled.div`
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  color: #f45050;
`;

export const PerguntasRespostas = styled.div`
  width: 640px;
  height: 175px;
  display: flex;
  margin-top: 45px;
  margin-left: 50px;
  margin-right: 50px;
  flex-direction: column;

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
`;

export const QuestionamentosERespostas = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Questionamento = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin-left: 14px;
  color: white;
`;

export const Resposta = styled.span`
  color: #cccccc;
  margin-left: 14px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  margin-bottom: 5px;
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
