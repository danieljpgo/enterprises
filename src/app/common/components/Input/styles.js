import styled from 'styled-components';

export const Container = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 4px;
  border-bottom: solid 1px ${(props) => props.theme.colors.surface.input};

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;

    letter-spacing: -0.31px;
    font-size: 22px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    color: ${(props) => props.theme.colors.input.base};
  }
`;
