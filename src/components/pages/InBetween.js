import React from 'react';
import { green, secondaryBackground, primaryText } from '../ui/styles';
import styled from 'styled-components';
import { LinkButton } from '../ui/button';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';

export const InBetween = () => {
  return (
    <Container>
      <LoginContainer>
        <InnerContainer>
          <Logo width={53} height={56} />
          <Title>Welcome Alan!</Title>
          <InfoTextWrapper>
            <InfoText>
              In order to get access to legal data choose your dashboard.
            </InfoText>
          </InfoTextWrapper>

          <ButtonWrapper>
            <LinkButton to={'/home'} width={294}>
              Efficiency Audit
            </LinkButton>
            <LinkButton to={'/triage'} backgroundcolor={green} width={294}>
              Triage System
            </LinkButton>
          </ButtonWrapper>
        </InnerContainer>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${secondaryBackground};
  border-radius: 20px;
  max-height: 700px;
  padding: 62px 164px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 2rem;
  color: ${primaryText};
  margin: 55px 0 14px 0;
`;

const InfoTextWrapper = styled.div`
  padding: 0 15px;
`;

const InfoText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 0.75rem;
  color: ${primaryText};
  text-align: center;
  line-height: 22.4px;
  margin: 0 0 40px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
