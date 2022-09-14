import styled, { keyframes } from "styled-components";

const oneRotate = keyframes`
 0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;

const twoRotate = keyframes`
0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;

const threeRotate = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;

export const StyleLoader = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
`;

export const StyleInner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  &.one {
    left: 0%;
    top: 0%;
    animation: ${oneRotate} 1s linear infinite;
    border-bottom: 3px solid var(--purple);
  }

  &.two {
    right: 0%;
    top: 0%;
    animation: ${twoRotate} 1s linear infinite;
    border-right: 3px solid var(--purple);
  }

  &.three {
    right: 0%;
    bottom: 0%;
    animation: ${threeRotate} 1s linear infinite;
    border-top: 3px solid var(--purple);
  }
`;
