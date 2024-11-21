import styled from "styled-components";

export const FormQuestao = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PalavraQuestao = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;
  margin-right: 8px;

  @media (max-width: 635px) {
    margin-bottom: 90px;
  }

  @media (max-width: 430px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const NumeroQuestao = styled.span`
  color: #8000ff;
  font-size: 40px;
  font-weight: 700;
  display: flex;

  @media (max-width: 430px) {
    font-size: 32px;
  }
`;

export const CampoPergunta = styled.fieldset`
  border: 2px solid rgba(31, 31, 31, 62);
  border-radius: 8px;
  width: 800px;
  height: 314px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  @media (max-width: 820px) {
    width: 620px;
    height: 300px;
  }

  @media (max-width: 635px) {
    width: 415px;
    height: 160px;
    border: 0px;
  }

  @media (max-width: 430px) {
    width: 248px;
  }
`;

export const Pergunta = styled.legend`
  font-weight: bold;
  font-size: 23px;
  color: white;
  margin-left: 30px;
  padding-left: 15px;
  padding-right: 20px;
  margin-bottom: 66px;

  @media (max-width: 820px) {
    font-size: 18px;
    margin-left: 30px;
    padding-left: 20px;
    margin-bottom: 70px;
  }

  @media (max-width: 635px) {
    font-size: 16px;
    margin-left: 0px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 30px;
  }

  @media (max-width: 430px) {
    margin-bottom: 20px;
  }
`;

export const BotaoProximo = styled.button`
  width: 220px;
  height: 40px;
  background: linear-gradient(45deg, #8000ff, #4d0099);
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 4px 54.4px 0px #8000ff;
    transition: 0.4s;
  }

  font-size: 18px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  margin-top: 40px;
  cursor: pointer;

  &:disabled {
    background-color: hsl(270.11764705882354, 100%, 35%);
    color: #9d9d9d;
    cursor: not-allowed;
    box-shadow: 0px;
    opacity: 0.6;
  }

  @media (max-width: 635px) {
    margin-top: 45px;
  }

  @media (max-width: 430px) {
    margin-top: 40px;
  }
`;
export const Rotulo = styled.label`
  display: flex;
  margin-left: 60px;
  font-size: 18px;
  margin-bottom: 32px;

  @media (max-width: 820px) {
    margin-left: 70px;
    font-size: 16px;
  }

  @media (max-width: 635px) {
    margin-bottom: 25px;
    display: flex;
    margin-left: 0px;
  }

  @media (max-width: 430px) {
    margin-bottom: 28px;
  }
`;

import React from "react";

export const Questao = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <CampoPergunta>
      <Pergunta>{pergunta}</Pergunta>
      {options.map((option) => (
        <Rotulo key={option}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </Rotulo>
      ))}
    </CampoPergunta>
  );
};

export default Questao;
