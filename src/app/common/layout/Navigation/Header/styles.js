import styled from 'styled-components';

export const Container = styled.header`
  background-image: linear-gradient(180deg, 
    ${(props) => props.theme.colors.surface.gradiente[0]} -25%,
    ${(props) => props.theme.colors.surface.gradiente[1]} 700%
  );
  display: flex;
  align-items: center;
  padding: 
    ${(props) => props.theme.unit * 2.5}px
    ${(props) => props.theme.unit * 4}px
    ${(props) => props.theme.unit * 2.5}px
    ${(props) => props.theme.unit * 4}px;
  
  min-height: 82px;
  
  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    padding: ${(props) => props.theme.unit * 3.5}px ${(props) => props.theme.unit * 2}px;
  }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;

  > div {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-right: -26px;

    img {
      height: 30px;
    }
  }
`;
