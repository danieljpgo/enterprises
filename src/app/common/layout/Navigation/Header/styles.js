import styled from 'styled-components';

export const Container = styled.header`
  background-image: linear-gradient(180deg, 
    ${(props) => props.theme.colors.surface.gradiente[0]} -25%,
    ${(props) => props.theme.colors.surface.gradiente[1]} 700%
  );
  display: flex;
  align-items: center;
  padding: 
    ${(props) => props.theme.unit * 4}px
    ${(props) => props.theme.unit * 4}px
    ${(props) => props.theme.unit * 2.5}px
    ${(props) => props.theme.unit * 4}px;
  
  > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${(props) => props.theme.unit * 4.75}px;
    max-width: 1024px;
  }

  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    padding: ${(props) => props.theme.unit * 3.5}px ${(props) => props.theme.unit * 2}px;

    > div{
      gap: ${(props) => props.theme.unit * 2}px;
      > div {
        display: flex;
        justify-content: center;
        width: calc(100% - 86px);
      }
    }
  }
`;

export const IconButton = styled.button`
  border: none;
  background: transparent;
  display: grid;

  svg {
    fill: ${(props) => props.theme.colors.text.contrast};
  }
`;
