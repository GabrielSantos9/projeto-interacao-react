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

export const SvgNome = styled.img`
  width: 126px;
  height: 52px;

  background-image: url(${nomeSVG});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: -33px;
`;

export const LabelNome = styled.label`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  margin-left: -275px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
`;

export const PreencherNome = styled.input`
  width: 320px;
  height: 30px;
  padding: 10px 10px 10px 40px;
  border-radius: 4px;
  outline: none;
  background-color: hsl(0deg 0% 16% / 70%);
  color: white;
  margin-top: 6px;
`;

export const SearchInput = () => (
  <InputWrapper>
    <Icon src={iconeUsuario} alt="search icon" />
    <PreencherNome></PreencherNome>
  </InputWrapper>
);

export const BotaoProximo = styled.p`
  width: 370px;
  height: 50px;
  display: flex;
  color: white;
  font-size: 21px;
  font-weight: 700;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(45deg, #8000ff, #4d0099);
  text-transform: uppercase;
`;
