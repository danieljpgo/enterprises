import styled, { css } from 'styled-components';

// @TODO Adicionar depois as diferenças de tags h1,h2 e etc

const variants = {
  main: css`
    color: ${(props) => props.theme.colors.text.main};
    font-size: 24px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
  base: css`
    color: ${(props) => props.theme.colors.title.main};
    font-size: 34px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.secundary};
    letter-spacing: 0.2px;
  `,
  sub: css`
    color: ${(props) => props.theme.colors.title.sub};
    font-size: 17px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: 0.2px;
  `,
  aux: css`
    color: ${(props) => props.theme.colors.text.aux};
    font-size: 34px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
  warning: css`
    color: ${(props) => props.theme.colors.text.warning};
  `,
  contrast: css`
    color: ${(props) => props.theme.colors.text.contrast};
    font-size: 18px;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
};

export const Container = styled.p`  
  ${(props) => variants[props.$variants]};
`;
