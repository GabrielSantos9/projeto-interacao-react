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
