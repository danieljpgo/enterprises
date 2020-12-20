import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #ececec;
  border-radius: ${(props) => props.theme.shapes.borderRadius.md}px;

  ${(props) => css`
    height: ${props.$height};
    width: ${props.$width};
  `}

  :after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg, #ececec 0px, #dcdcdc 40px, #ececec 80px);
    animation: shimmer 2s infinite ease-out;
    content: '';
  }


  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
