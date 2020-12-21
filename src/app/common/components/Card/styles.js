import styled from 'styled-components';

export const Container = styled.li`
  background-color: ${(props) => props.theme.colors.surface.base};
  border-radius: ${(props) => props.theme.shapes.borderRadius.md}px;
  display: block;
`;
