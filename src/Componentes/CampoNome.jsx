import {
  CampoNome,
  LabelNome,
  SvgNome,
  BotaoProximo,
  SearchInput,
} from "../Estilizações/ECampoNome";

const FormNome = () => {
  return (
    <CampoNome>
      <SvgNome/>
      <LabelNome>Seu nome</LabelNome>
      <SearchInput></SearchInput>
      <BotaoProximo>próximo</BotaoProximo>
    </CampoNome>
  );
};

export default FormNome;
