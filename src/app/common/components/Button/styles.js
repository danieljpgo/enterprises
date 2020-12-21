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
  transition: background-color 0.250s ease-in-out;

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.secundary.disabled};
  }

  :focus{
    background-color: ${(props) => props.theme.colors.secundary.main}30;
  }
  
`;

// @TODO apontar sobre a diferença do tamanho do botão e das especificações
