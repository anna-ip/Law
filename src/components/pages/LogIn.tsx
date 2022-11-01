import React, { useState } from 'react';
import {
  green,
  primaryGrey,
  secondaryBackground,
  primaryText,
} from '../ui/styles';
import styled from 'styled-components';
import { GoogleButton, LinkButton } from '../ui/button';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';
import { TextInput } from '../ui/inputs/index';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <LoginContainer>
        <InnerContainer>
          <Logo width={53} height={56} />
          <Title>Sign in to GLIS</Title>
          <InfoText>Please enter your details! </InfoText>
          <InputContainer>
            <TextInput
              type='email'
              label='Email'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder='example@example.com'
              margin='10px 0 0 0'
              padding='0px 24px'
              labelMargin='0 0 8px 6px'
            />
            <TextInput
              type='password'
              label='Password'
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder='Must have at least 6 characters'
              margin='10px 0 0 0'
              padding='0px 24px'
              labelMargin='0 0 8px 6px'
            />
          </InputContainer>
          <CheckBoxContainer>
            <CheckBoxWrapper>
              <StyledInput type='checkbox' />
              <InfoText>Remember for 30 days</InfoText>
            </CheckBoxWrapper>
            <ForgotButton>Forgot Password</ForgotButton>
          </CheckBoxContainer>
          <LinkButton to={'/profileOption'} width={294}>
            Sign in
          </LinkButton>
          <GoogleButton to={'/profileOption'} />
          <SignUpWrapper>
            <SignUpText>Don’t have an account?</SignUpText>
            <SignUpLink>Sign up</SignUpLink>
          </SignUpWrapper>
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
  max-width: 650px;
  padding: 60px 150px;
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
  font-size: 2.25rem;
  color: ${primaryText};
  margin: 23px 0 0 0;
`;

const InfoText = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 0.75rem;
  color: ${primaryText};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  accent-color: ${green};
`;

const ForgotButton = styled.button`
  color: ${green};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SignUpText = styled(InfoText)`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1rem;
  color: ${primaryGrey};
`;

const SignUpLink = styled(SignUpText)`
  color: ${green};
  margin-left: 5px;
  text-decoration: underline;
  cursor: pointer;
`;
