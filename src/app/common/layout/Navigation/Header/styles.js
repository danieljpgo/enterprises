import styled from 'styled-components';

export const Container = styled.header`
  background-image: linear-gradient(180deg, 
    ${(props) => props.theme.colors.surface.gradiente[0]} -25%,
    ${(props) => props.theme.colors.surface.gradiente[1]} 700%
  );
  padding: ${(props) => props.theme.unit * 2.5}px ${(props) => props.theme.unit * 4}px;
  display: flex;
  align-items: flex-end;

  @media(max-width: ${(props) => props.theme.breakpoints.lg}px) {
    height: 154px;
    padding: ${(props) => props.theme.unit * 3}px ${(props) => props.theme.unit * 5}px;
  }
`;
