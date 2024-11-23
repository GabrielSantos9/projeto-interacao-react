import styled from "styled-components";
// import {animacaoLetra} from "./Estilizações/animacoes";
import {animacaoLetra} from "../Estilizações/animacoes";

export const ConteudoIntrodutorio = styled.div`
  display: flex;

  @media (max-width: 820px) {
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 338px;
  }

  @media (max-width: 430px) {
    align-items: center;
  }
`;

export const Intro = styled.div`
  width: 473px;
  height: 334px;
  display: flex;
  flex-direction: column;
  margin-right: 129px;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 338px;
    height: 256px;
    margin-right: 70px;
  }

  @media (max-width: 820px) {
    margin-right: 0px;
    margin-bottom: 45px;
  }

  @media (max-width: 430px) {
    width: 338px;
    height: 181px;
    margin-bottom: 65px;
  }
`;

export const Titulo = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 26px;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 12px;
  }

  @media (max-width: 820px) {
    margin-bottom: 12px;
  }

  @media (max-width: 430px) {
    font-size: 24px;
  }
`;

export const Paragrafo = styled.p`
  color: white;
  font-size: 23px;
  font-weight: 500;
  width: 379px;

  @media (max-width: 1024px) {
    width: 338px;
    font-size: 18px;
  }

  @media (max-width: 430px) {
    font-size: 17px;
  }
`;

export const CorReact = styled.span`
  color: #61DAFB;
  animation: ${animacaoLetra} 2.5s;
`;

export const ExemploNome = styled.span`
  font-weight: 700;
`;
