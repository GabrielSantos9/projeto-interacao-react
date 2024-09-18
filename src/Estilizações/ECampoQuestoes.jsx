import styled from "styled-components";

export const FormQuestao = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fieldset = styled.fieldset`
  border: 2px solid rgba(31, 31, 31, 62);
  border-radius: 8px;
  width: 800px;
  height: 314px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Legend = styled.legend`
  font-weight: bold;
  font-size: 23px;
  color: white;
  margin-left: 30px;
  padding-left: 15px;
  padding-right: 20px;
`;

export const BotaoProximo = styled.button`
  width: 220px;
  height: 40px;
  background-color: #8000ff;
  border-radius: 8px;

  font-size: 18px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  margin-top: 10px;
`;

import React from "react";

export const Questao = ({pergunta, options, id}) => {
  return (
      <Fieldset>
        <Legend>{pergunta}</Legend>
        {options.map((option) => (
          <label key={option} style={{marginBottom: '1rem', margin:'flex'}}>
            <input type="radio" value={option} />
          </label>
        ))}
      </Fieldset>
  );
};

export default Questao;
