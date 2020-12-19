import styled from 'styled-components';

export const Container = styled.main`
  max-width: calc(351px + ${(props) => props.theme.unit * 2}px);
  margin: 0 auto;
  display: grid;
  height: 100vh;
  align-items: center;
  justify-items: center;
`;

export const Content = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${(props) => props.theme.unit * 8.375}px;
  padding: ${(props) => props.theme.unit * 4}px ${(props) => props.theme.unit * 2}px;

  img{
    width: 100%;
    max-width: 285px;
    height: 69px;
    object-fit: contain;
  }

  > div{
    display: grid;
    gap: ${(props) => props.theme.unit * 2.5}px;
    justify-items: center;

    > div:first-child{
      max-width: 176px;
    }
    > div:nth-child(2){
      padding: 0 ${(props) => props.theme.unit * 4}px;
    }
    fieldset{
      width: 100%;
      > form {
        display: grid;
        gap: ${(props) => props.theme.unit * 3.75}px;
        padding: ${(props) => props.theme.unit * 3}px 0 ${(props) => props.theme.unit * 2.5}px;;
      }
      > div {
        height: 14px;
      }
    }
    > div:last-child{
      width: 100%;
      padding: 0 ${(props) => props.theme.unit * 2}px;
    }
  }
`;
