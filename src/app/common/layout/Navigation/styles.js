import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  
`;

export const Main = styled.main`
  padding: ${(props) => props.theme.unit * 5.5}px ${(props) => props.theme.unit * 6.25}px;
  max-width: 1280px;
  margin: 0 auto;

  @media(max-width: ${(props) => props.theme.breakpoints.lg}px) {
    padding: ${(props) => props.theme.unit * 5.5}px ${(props) => props.theme.unit * 6.25}px;
  }
`;
