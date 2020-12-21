import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: transparent;
  display: grid;
  place-items: center;

  min-height: ${(props) => props.theme.unit * 3}px;
  min-width: ${(props) => props.theme.unit * 3}px;

  :disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
