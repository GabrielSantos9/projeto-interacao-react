import styled from "styled-components";

export const FormQuestao = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NumeroQuestão = styled.span`
  background: linear-gradient(80deg, #8000FF, #4D0099);
  font-size: 40px;
  font-weight: 500;
`;

export const Fieldset = styled.fieldset`
  border: 2px solid rgba(31, 31, 31, 62);
  border-radius: 8px;
  width: 800px;
  height: 314px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const Legend = styled.legend`
  font-weight: bold;
  font-size: 23px;
  color: white;
  margin-left: 30px;
  padding-left: 15px;
  padding-right: 20px;
  margin-bottom: 66px;
`;

export const BotaoProximo = styled.button`
  width: 220px;
  height: 40px;
  background-color: #8000ff;
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 4px 54.4px 0px #8000ff;
    transition: 0.4s;
  }

  font-size: 18px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  margin-top: 10px;
`;

import React from "react";

export const Questao = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <Fieldset>
      <Legend>{pergunta}</Legend>
      {options.map((option) => (
        <label
          key={option}
          style={{
            margin: "flex",
            display: "flex",
            marginLeft: "60px",
            fontSize: "18px",
            marginBottom: "32px",
          }}
        >
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </Fieldset>
  );
};

export default Questao;
