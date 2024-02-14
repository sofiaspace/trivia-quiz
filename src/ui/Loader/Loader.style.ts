import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const loaderAnimation = keyframes`
  20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  `;

export const LoaderItem = styled.div`
  width: 50px;
  height: 24px;
  background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0%
      50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
  background-size: calc(100% / 3) 12px;
  background-repeat: no-repeat;
  animation: ${loaderAnimation} 1s infinite linear;
`;
