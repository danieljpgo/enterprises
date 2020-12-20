import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: ${(props) => props.theme.unit * 4.5}px;
  display: grid;
  gap: ${(props) => props.theme.unit * 4}px;

  @media(max-width: ${(props) => props.theme.breakpoints.xsm}px) {
    padding: ${(props) => props.theme.unit * 3.5}px;
  }
`;

export const Banner = styled.div`
  display: grid;
  place-items: center;
  height: 240px;

  background-color: ${(props) => props.theme.colors.surface.banner};

  font-family: Roboto;
  font-size: 77px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.title.contrast};
`;
