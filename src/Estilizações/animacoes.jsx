import styled, { keyframes } from 'styled-components';

export const animacaoTela = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -90px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const animacaoLetra = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -90px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const animacaoPerguntas = keyframes`
    from {
    opacity: 0;
    transform: translate3d(-90px, 0, 90px);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const animacaoBotao = keyframes`
    from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
