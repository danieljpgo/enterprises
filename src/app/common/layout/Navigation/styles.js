import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  margin: 0 auto;
  max-width: calc(1024px + ${(props) => props.theme.unit * 8}px);
  padding: ${(props) => props.theme.unit * 4}px ${(props) => props.theme.unit * 3.5}px;

  @media(max-width: ${(props) => props.theme.breakpoints.xsm}px) {
    padding: ${(props) => props.theme.unit * 3.5}px ${(props) => props.theme.unit * 2.5}px;
  }
`;
