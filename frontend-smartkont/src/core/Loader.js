import styled, { keyframes } from "styled-components";

// Define keyframes for animations
const l10 = keyframes`
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
`;

// Styled component for the whole screen background
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* Transparent white background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled component for the loader
const Loader = styled.div`
  width: 65px;
  aspect-ratio: 1;
  --g: radial-gradient(farthest-side, #0000 calc(95% - 3px), #cd0d32 calc(100% - 3px) 98%, #0000 101%) no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 30px 30px;
  animation: ${l10} 1.5s infinite;
`;

// Component to render the loader and background
const LoadingScreen = () => {
  return (
    <Background>
      <Loader />
    </Background>
  );
};

export default LoadingScreen;
