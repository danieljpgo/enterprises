import styled, { css } from 'styled-components';

// @TODO Adicionar depois as diferenças de tags h1,h2 e etc

const variants = {
  base: css`
    color: ${(props) => props.theme.colors.title.base};
    font-size: 26px;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: -1.2px;
  `,
  aux: css`
    color: ${(props) => props.theme.colors.title.aux};
    font-size: 30px;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
  contrast: css`
    color: ${(props) => props.theme.colors.title.contrast};
    font-size: 34px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
};

export const Container = styled.p`  
  ${(props) => variants[props.$variants]};
`;
