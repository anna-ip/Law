import React, { PropsWithChildren } from 'react';
import { secondaryBackground } from '../../ui/styles';
import styled from 'styled-components/macro';

export const WelcomeCard = ({ children }: PropsWithChildren) => {
  return (
    <BackgroundContainer>
      <LoginContainer>
        <InnerContainer>{children}</InnerContainer>
      </LoginContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${secondaryBackground};
  border-radius: 20px;
  height: 600px;
  padding: 60px 150px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
