import styled from 'styled-components';

export const IconButton = styled.button`
  border: none;
  width: 26px;
  height: 26px;
  background: transparent;
  display: grid;

  svg {
    fill: ${(props) => props.theme.colors.input.actionIcons};
  }
`;
