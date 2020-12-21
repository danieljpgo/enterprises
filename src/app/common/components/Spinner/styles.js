import styled from 'styled-components';

export const Container = styled.svg`
  animation: rotate 2s linear infinite;
  z-index: 10001;
  width: 130px;
  height: 130px;
  stroke: ${(props) => props.theme.colors.secundary.main};
  
  circle {
    stroke: hsl(210, 70, 75);
    stroke-linecap: round;
    stroke-width: 4;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
     }
     100% {
       stroke-dasharray: 90, 150;
       stroke-dashoffset: -124;
    }
  }
`;
