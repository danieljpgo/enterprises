import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.unit * 6}px ${(props) => props.theme.unit * 9.375}px;
  display: grid;
  gap: ${(props) => props.theme.unit * 6}px;
`;

export const Banner = styled.div`
  display: grid;
  place-items: center;
  height: 295px;

  background-color: green;

  font-family: Roboto;
  font-size: 77px;
  font-weight: bold;
  color: white;
`;
