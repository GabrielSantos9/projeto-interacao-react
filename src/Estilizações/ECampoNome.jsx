import styled from "styled-components";
import iconeUsuario from "../img/person1.svg";
import nomeSVG from "../img/NomeSVG.svg";

export const CampoNome = styled.div`
  display: flex;
  background-color: hsl(0deg 0% 0% / 29%);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 36px 70px 36px;
  position: relative;
`;

export const LabelNome = styled.label`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  margin-left: -240px;
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

export const SearchInput = () => (
  <InputWrapper>
    <Icon src={iconeUsuario} alt="search icon" />
    <PreencherNome></PreencherNome>
  </InputWrapper>
);

export const SVG = styled.img`
  position: absolute;
  width: 126px;
  height: 52px;
  top: -33px;
`;

export const SvgNome = () => <SVG src={nomeSVG} alt="teste1"></SVG>;

export const PreencherNome = styled.input`
  width: 318px;
  height: 40px;
  padding: 10px 10px 10px 40px;
  border-radius: 4px;
  outline: none;
  background-color: hsl(0deg 0% 16% / 70%);
  color: white;
  margin-top: 6px;
`;

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
