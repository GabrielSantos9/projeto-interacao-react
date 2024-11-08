import styled from "styled-components";

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
`;

export const CorReact = styled.span`
  color: #61DAFB;

`;

export const ExemploNome = styled.span`
  font-weight: 700;
`;
