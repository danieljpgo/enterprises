import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: grid;
  place-items: center;
  top: 0;
`;
