import styled from "styled-components";
import nomeSVG from "../img/NomeSVG.svg";

export const CampoNome = styled.form`
  display: flex;
  background-color: hsl(0deg 0% 0% / 29%);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 36px 70px 36px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 70px 36px 70px 36px;
  }

  @media (max-width: 430px) {
    padding: 0px 0px 0px 0px;
    width: 282px;
    height: 298px;
    display: flex;
  }
`;

export const LabelNome = styled.label`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  margin-left: -240px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 820px) {
    margin-left: -180px;
  }

  @media (max-width: 430px) {
    margin-left: -160px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 55%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const SVG = styled.img`
  position: absolute;
  width: 126px;
  height: 52px;
  top: -33px;

  @media (max-width: 430px) {
    width: 89px;
    height: 35px;
    top: -22px; 
  }
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
  font-size: 15px;

  &:focus {
    border: 0.5px solid #8000ff4e;
    transition: 0.9s;
  }

  @media (max-width: 1024px) {
    width: 318px;
    height: 40px;
  }

  @media (max-width: 820px) {
    width: 258px;
    height: 35px;
    margin-top: 7px;
  }

  @media (max-width: 430px) {
    width: 242px;
  }
`;

export const BotaoProximo = styled.button`
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

  &:hover {
    box-shadow: 0px 4px 54.4px 0px #8000ff;
    transition: 0.4s;
    transform: scale(1.03);
  }

  @media (max-width: 820px) {
    width: 258px;
    height: 35px;
  }

  @media (max-width: 430px) {
    width: 242px;
    font-size: 14px;
  }
`;
