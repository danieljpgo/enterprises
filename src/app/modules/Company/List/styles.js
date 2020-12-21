import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.ul)`
  display: flex;
  gap: ${(props) => props.theme.unit * 4}px;
  flex-wrap: wrap;
  position:relative;

  ${(props) => props.$isLoading && css`
    opacity: 0.6;
  `}

  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    gap: ${(props) => props.theme.unit * 3.5}px;
  }

`;

export const CardWrapper = styled(motion.li)`
  flex: 0 0 calc(40% - ${(props) => props.theme.unit * 2}px);
  max-width: calc(40% - ${(props) => props.theme.unit * 2}px);
  
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 calc(60% - ${(props) => props.theme.unit * 2}px);
    max-width: calc(60% - ${(props) => props.theme.unit * 2}px);
  } 
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xl}px) {
    flex: 0 0 calc(50% - ${(props) => props.theme.unit * 2}px);
    max-width: calc(50% - ${(props) => props.theme.unit * 2}px);
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 calc(50% - ${(props) => props.theme.unit * 2}px);
      max-width: calc(50% - ${(props) => props.theme.unit * 2}px);
    }
  }
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}px) {
    flex: 1 0 calc(100% - ${(props) => props.theme.unit * 2}px);
    max-width: calc(100% - ${(props) => props.theme.unit * 2}px);
    
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 calc(100% - ${(props) => props.theme.unit * 2}px);
      max-width: calc(100% - ${(props) => props.theme.unit * 2}px);
    }
  }

`;

export const Content = styled.div`
  cursor: pointer;
  padding: ${(props) => props.theme.unit * 4.5}px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${(props) => props.theme.unit * 4}px;

  > div:last-child {
    display: grid;
    align-items: center;
    > div {
      display: grid;
      gap: ${(props) => props.theme.unit / 2}px;
    }
  }

  @media(max-width: ${(props) => props.theme.breakpoints.sm}px) {
    grid-template-columns: auto;
  }
`;

export const Banner = styled.div`
  display: grid;
  place-items: center;
  height: 120px;

  background-color: ${(props) => props.theme.colors.surface.banner};

  font-family: Roboto;
  font-size: 42px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.title.contrast};
`;

export const MessageContainer = styled.div`
  height: 400px;
  display: flex;
  text-align:center;
  align-items: center;
  justify-content: center;
`;
