import React from 'react';
import { green, primaryText } from '../ui/styles';
import styled from 'styled-components';
import { LinkButton } from '../ui/button';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';
import { WelcomeCard } from '../cards/cardComponents/WelcomeCard';

export const InBetween = () => {
  return (
    <WelcomeCard>
      <Logo width={53} height={56} />
      <Title>Welcome!</Title>
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
    </WelcomeCard>
  );
};

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
