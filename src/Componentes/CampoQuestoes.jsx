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
  PerguntasRespostas,
  CirclePR,
  TituloPR,
  QuestionamentosERespostas,
  Questionamento,
  TituloPeR,
  Resposta,
  Negrito,
  scrollPR,
} from "../Estilizações/EPerguntasRespostas";

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

  const isOptionSelected =
    perguntas[slide] && respostas[perguntas[slide].id] !== "";

  return (
    <>
      <FormQuestao onSubmit={(event) => event.preventDefault()}>
        {resultadoFinal === null && (
          <NumeroQuestao>
            <PalavraQuestao>Questão</PalavraQuestao> {`0${slide + 1}`}
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
                <Circle style={{ marginRight: "9px", marginLeft: "20px" }} />
                <Circle style={{ marginRight: "9px" }} />
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
                  <QuantidadeAcertos>
                    {resultadoFinal.acertos}
                  </QuantidadeAcertos>
                </NumeroAcertos>
                <NumeroErros>
                  <TipoEstatisticas>Erros</TipoEstatisticas>
                  <QuantidadeErros>{resultadoFinal.erros}</QuantidadeErros>
                </NumeroErros>
              </Estatisticas>

              <PerguntasRespostas>
                <TituloPeR style={{ display: "flex", alignItems: "center" }}>
                  <CirclePR />
                  <TituloPR>Perguntas e Respostas</TituloPR>
                </TituloPeR>
                <QuestionamentosERespostas>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {perguntas.map((pergunta) => (
                      <li key={pergunta.id} style={{ marginBottom: "15px" }}>
                        <Questionamento>{pergunta.pergunta}</Questionamento>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Resposta>
                            <Negrito>R:&nbsp;</Negrito> {respostas[pergunta.id]}
                          </Resposta>
                          {respostas[pergunta.id] !== pergunta.resposta && (
                            <span style={{ color: "red", marginLeft: "10px" }}>
                              Resposta correta: {pergunta.resposta}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </QuestionamentosERespostas>
              </PerguntasRespostas>
            </ConteudoResultado>
          </>
        ) : (
          <BotaoProximo onClick={handleClick} disabled={!isOptionSelected}>
            próximo
          </BotaoProximo>
        )}
      </FormQuestao>
    </>
  );
};

export default CampoQuestoes;
