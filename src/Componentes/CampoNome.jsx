import React from "react";
import {
  CampoNome,
  LabelNome,
  SvgNome,
  BotaoProximo,
  PreencherInput,
} from "../Estilizações/ECampoNome";

const FormNome = ({ onNext }) => {
  return (
    <>
      <CampoNome>
        <SvgNome />
        <LabelNome htmlFor="nome">Seu nome</LabelNome>
        <PreencherInput id="nome" type="text" name="nome" />
        <BotaoProximo type="button" onClick={onNext}>próximo</BotaoProximo>
      </CampoNome>
    </>
  );
};

export default FormNome;
