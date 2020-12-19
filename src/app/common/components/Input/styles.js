import styled, { css } from 'styled-components';

const status = {
  error: css`
    border-color: ${(props) => props.theme.colors.text.warning};
  `,
};

export const Container = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 4px;
  border-bottom: solid 1px ${(props) => props.theme.colors.surface.input};

  ${(props) => status[props?.$status]};

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

export const Status = styled.div`
  padding: 0 ${(props) => props.theme.unit / 2}px;
`;

export const Error = styled.div`
  height: ${(props) => props.theme.unit * 3}px;
  width: ${(props) => props.theme.unit * 3}px;
  background-color: ${(props) => props.theme.colors.text.warning};
  border-radius: 50%;

  display: flex;
  align-items: center;
  padding: 0 11px;

  color: white;
`;

export const Slot = styled.div`
  display: inherit;
`;
