import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.secundary.main};
  border-radius: ${(props) => props.theme.shapes.borderRadius.sm}px;
  padding: ${(props) => props.theme.unit * 1.75}px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase; 
  border: none;
  white-space: nowrap;
  line-height: 1;

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.secundary.disabled};
  }
`;

// @TODO Adicionar animação de transição entre disabled e normal
// @TODO apontar sobre a diferença do tamanho do botão e das especificações
