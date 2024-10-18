import React from "react";
import {
  Questao,
  FormQuestao,
  BotaoProximo,
  PalavraQuestao,
  NumeroQuestao,
} from "../Estilizações/ECampoQuestoes";

import {
  ConteudoResultado,
  BarraSuperior,
  Circle,
  TituloResultados,
  Estatisticas,
  NumeroPerguntas,
  NumeroAcertos,
  NumeroErros,
  TipoEstatisticas,
  QuantidadePerguntas,
  QuantidadeAcertos,
  QuantidadeErros,
} from "../Estilizações/ETesteee";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const CampoQuestoes = () => {
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [resultadoFinal, setResultadoFinal] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function Resultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    const erros = perguntas.length - corretas.length;
    
    setResultadoFinal({ acertos: corretas.length, erros });
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1 <= 4);
      Resultado();
    }
  }

  return (
    <>
      <FormQuestao onSubmit={(event) => event.preventDefault()}>
        {resultadoFinal === null && (
          <NumeroQuestao>
            <PalavraQuestao>Questão</PalavraQuestao> {` 0${slide + 1}`}
          </NumeroQuestao>
        )}
        {perguntas.map((pergunta, index) => (
          <Questao
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultadoFinal ? (
          <>
            <ConteudoResultado>
              <BarraSuperior>
                <Circle style={{marginRight:'9px', marginLeft:'20px'}} />
                <Circle style={{marginRight:'9px'}} />
                <Circle />
              </BarraSuperior>
              <TituloResultados>Resultados</TituloResultados>
              <Estatisticas>
                <NumeroPerguntas>
                  <TipoEstatisticas>Perguntas</TipoEstatisticas>
                  <QuantidadePerguntas>{perguntas.length}</QuantidadePerguntas>
                </NumeroPerguntas>
                <NumeroAcertos>
                  <TipoEstatisticas>Acertos</TipoEstatisticas>
                  <QuantidadeAcertos>{resultadoFinal.acertos}</QuantidadeAcertos>
                </NumeroAcertos>
                <NumeroErros>
                  <TipoEstatisticas>Erros</TipoEstatisticas>
                  <QuantidadeErros>{resultadoFinal.erros}</QuantidadeErros>
                </NumeroErros>
              </Estatisticas>
            </ConteudoResultado>
          </>
        ) : (
          <BotaoProximo onClick={handleClick}>próximo</BotaoProximo>
        )}
      </FormQuestao>
    </>
  );
};

export default CampoQuestoes;
