import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-self: flex-end;
  width: 100%;
  gap: ${(props) => props.theme.unit * 4.75}px;
  max-width: 1024px;
  min-height: ${(props) => props.theme.unit * 3.5}px;


  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    gap: ${(props) => props.theme.unit * 2}px;
    > div {
      display: flex;
      justify-content: center;
      width: calc(100% - 86px);
    }
  }
`;
