import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.surface.base};
  border-radius: ${(props) => props.theme.shapes.borderRadius.md}px;
  display: block;
`;

export const boxShadowBase = '0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0 rgba(0,0,0,0.12), 0 0px 0px 0px rgba(0,0,0,0.20)';
export const boxShadowHover = '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)';
