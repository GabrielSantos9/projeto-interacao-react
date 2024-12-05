import styled from "styled-components";
import { animacaoLetra, animacaoTela } from "../Estilizações/animacoes";

export const Comprimento = styled.div`
  width: 524px;
  height: 394px;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: hsl(0deg 0% 0% / 29%);
  align-items: center;
  border-radius: 10px;
  animation: ${animacaoTela} 0.9s;

  @media (max-width: 635px) {
    width: 375px;
  }

  @media (max-width: 430px) {
    width: 282px;
    height: 332px;
  }
`;

export const TituloBoasVindas = styled.h1`
  font-size: 32px;
  color: white;
  font-weight: 700;
  display: flex;
  position: absolute;
  top: -20px;

  @media (max-width: 430px) {
    font-size: 28px;
  }
`;

export const ComprimentoNome = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 700;
  margin-top: 60px;

  @media (max-width: 430px) {
    font-size: 24px;
    margin-left: 14.5px;
    margin-right: 14.5px;
  }
`;

export const CorNome = styled.span`
  color: #8000ff;
  animation: ${animacaoLetra} 2s;

  @media (max-width: 635px) {
    font-size: 26px;
    width: 312px;
    height: 74px;
  }
`;

export const ParagrafoComprimento = styled.h3`
  font-size: 23px;
  color: white;
  font-weight: 500;
  display: flex;
  margin-top: 33px;
  text-align: center;
  width: 340px;
  height: 84px;

  @media (max-width: 430px) {
    width: 224px;
    height: 63px;
    font-size: 17px;
  }
`;

export const BotaoIniciarQuestionamentos = styled.button`
  width: 98px;
  height: 40px;
  background: linear-gradient(80deg, #8000ff, #4d0099);

  &:hover {
    box-shadow: 0px 4px 54.4px 0px #8000ff;
    transition: 0.4s;
    transform: scale(1.03);
  }

  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  text-transform: uppercase;
  margin-top: 80px;
  cursor: pointer;

  @media (max-width: 430px) {
    margin-top: 40px;
  }
`;
