import React from "react";
import {
  CampoNome,
  LabelNome,
  SvgNome,
  BotaoProximo,
  PreencherInput,
} from "../Estilizações/ECampoNome";

const FormNome = () => {
  const [campoNome, setCampoNome] = React.useState({
    nome:'',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  
  function handleChange({ target }) {
    const { id, value } = target;
    setCampoNome({ ...campoNome, [id]: value });
  }

  return (
    <CampoNome onSubmit={handleSubmit}>
      <SvgNome />
      <LabelNome htmlFor="nome">Seu nome</LabelNome>
      <PreencherInput
        id="nome"
        type="text"
        name="nome"
        value={campoNome.nome}
        onChange={handleChange}
      />
      {campoNome.nome}
      <BotaoProximo>próximo</BotaoProximo>
    </CampoNome>
  );
};

export default FormNome;
