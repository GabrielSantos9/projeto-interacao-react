import React from "react";
import {
  Questao,
  FormQuestao,
  BotaoProximo,
  NumeroQuestão,
} from "../Estilizações/ECampoQuestoes";

const perguntas = [
  {
    numero: "1",
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
    numero: "2",
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
    numero: "3",
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    numero: "4",
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

  function resultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultadoFinal(
      `Você acertou: ${corretas.length} de ${perguntas.length}`
    );
    console.log(corretas);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultado();
    }
  }

  return (
    <>
      <FormQuestao onSubmit={(event) => event.preventDefault()}>
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
          <p>{resultadoFinal}</p>
        ) : (
          <BotaoProximo onClick={handleClick}>próximo</BotaoProximo>
        )}
      </FormQuestao>
    </>
  );
};

export default CampoQuestoes;
