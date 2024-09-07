import styled from "styled-components";
import imagemTeste from "../img/person1.svg";

export const CampoNome = styled.div`
  width: 390px;
  height: 298px;
  display: flex;
  background-color: hsl(0deg 0% 0% / 29%);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`;

export const LabelNome = styled.label`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 15px;
  margin: 64px 36px 6px 36px;
  display: flex;
  margin-left: -200px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const PreencherNome = styled.input`
  width: 268px;
  height: 20px;
  padding: 10px 10px 10px 40px;
  border-radius: 4px;
  outline: none;
  background-color: hsl(0deg 0% 16% / 70%);
  color: white;
`;

export const SearchInput = () => (
  <InputWrapper>
    <Icon src={imagemTeste} alt="search icon" />
    <PreencherNome></PreencherNome>
  </InputWrapper>
);

export const BotaoProximo = styled.p`
  width: 318px;
  height: 40px;
  display: flex;
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(45deg, #8000ff, #4d0099);
  text-transform: uppercase;
`;
