import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid white;
  border-top-color: orange;
  animation: ${spin} 1s ease-in-out infinite;
`;

