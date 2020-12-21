import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const status = {
  error: css`
    border-color: ${(props) => props.theme.colors.text.warning};
  `,
};

export const Container = styled.div`
  display: flex;
  gap: ${(props) => props.theme.unit * 1.25}px;
  align-items: center;
  padding: ${(props) => props.theme.unit / 2}px;
  width: 100%;
  transition: border-color 0.150s ease-in-out;
  border-bottom: solid 1px ${(props) => props.theme.colors.surface.input};

  :focus-within{
    border-color: ${(props) => props.theme.colors.input.line};
  }

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

    ::placeholder {
      color: ${(props) => props.theme.colors.input.placeholder};
      font-size: 18px;
      letter-spacing: -0.25px;
    }
  }

  ${(props) => props.$contrast && css`
    border-color: ${props.theme.colors.input.contrast};
    :focus-within{
      border-color: ${props.theme.colors.input.contrast};
    }

    input {
      color: ${props.theme.colors.input.contrast};
    }
  `}
`;

export const Status = styled(motion.div)`
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
  color: ${(props) => props.theme.colors.text.contrast};
`;

export const Slot = styled(motion.div)`
  display: inherit;
`;
