import React from "react";
import styled from "styled-components";

const Spinner = () => (
  <StyledSpinner viewBox="0 0 150 150">
    <circle
      className="path"
      cx="75"
      cy="75"
      r="60"
      fill="none"
      strokeWidth="10"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 300px;
  height: 300px;

  & .path {
    stroke: var(--header);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 3, 450;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 270, 450;
      stroke-dashoffset: -105;
    }
    100% {
      stroke-dasharray: 270, 450;
      stroke-dashoffset: -372;
    }
  }
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default SpinnerContainer;
