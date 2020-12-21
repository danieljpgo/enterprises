import styled, { css } from 'styled-components';

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
    font-size: 24px;
    font-weight: bold;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
  contrast: css`
    color: ${(props) => props.theme.colors.title.contrast};
    font-size: 24px;
    font-weight: normal;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    letter-spacing: normal;
  `,
};

export const H1 = styled.h2`  
  ${(props) => variants[props.$variants]};
`;

export const H2 = styled.h2`  
  ${(props) => variants[props.$variants]};
`;
