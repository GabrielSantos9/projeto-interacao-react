import styled from "styled-components";

export const Comprimento = styled.div`
  width: 524px;
  height: 394px;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: hsl(0deg 0% 0% / 29%);
  align-items: center;
  border-radius: 10px;
`;

export const TituloBoasVindas = styled.h1`
  font-size: 32px;
  color: white;
  font-weight: 700;
  display: flex;
  position: absolute;
  top: -20px;
`;

export const ComprimentoNome = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 700;
  margin-top: 60px;
`;

export const CorNome = styled.span`
  color: #8000FF;
`;

export const ParagrafoComprimento = styled.h3`
  font-size: 23px;
  color: white;
  font-weight: 500;
  display: flex;
  margin-top: 33px;
  text-align: center;
  width: 380px;
  height: 84px;
`;

export const BotaoIniciarQuestionamentos = styled.button`
  width: 98px;
  height: 40px;
  background: linear-gradient(80deg, #8000FF, #4D0099);
  &:hover {
    box-shadow: 0px 4px 54.4px 0px #8000FF;
    transition: 0.4s;
  }

  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  text-transform: uppercase;
  margin-top: 80px;
  cursor: pointer;
`;
