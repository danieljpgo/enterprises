import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.unit * 4}px;

  @media(max-width: ${(props) => props.theme.breakpoints.lg}px) {
    grid-template-columns: auto;
  }
  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    gap: ${(props) => props.theme.unit * 3.5}px;
  }
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.unit * 4.5}px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${(props) => props.theme.unit * 4}px;

  > div:last-child {
    display: grid;
    align-items: center;
    > div {
      display: grid;
      gap: ${(props) => props.theme.unit / 2}px;
    }
  }

  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    grid-template-columns: auto;
  }
`;

export const Banner = styled.div`
  display: grid;
  place-items: center;
  height: 120px;

  background-color: ${(props) => props.theme.colors.surface.banner};

  font-family: Roboto;
  font-size: 42px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.title.contrast};
`;

/* @media(max-width: ${(props) => props.theme.breakpoints.xsm}px) { */
/* } */
