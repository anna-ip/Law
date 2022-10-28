import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as SpinnerSVG } from '../../assets/images/Spinner.svg';

export const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <LoadingText>Processing</LoadingText>
      <SpinnerWrapper>
        <SpinnerSVG />
      </SpinnerWrapper>
    </SpinnerContainer>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LoadingText = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  margin: 0 15px 0 0;
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  animation: ${rotate} 2s linear 200ms;
`;
