import {
  green,
  primaryGrey,
  secondaryBackground,
  lightBlue,
  primaryText,
} from '../ui/styles';
import styled from 'styled-components';
import { GoogleButton, LinkButton } from '../ui/button';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';

export const LogIn = () => {
  return (
    <Container>
      <LoginContainer>
        <InnerContainer>
          <Logo width={53} height={56} />
          <Title>Sign in to GLIS</Title>
          <InfoText>Please enter your details! </InfoText>
          <InputContainer>
            <StyledLabel>Email</StyledLabel>
            <StyledInput type='text' placeholder='example@example.com' />
            <StyledLabel>Password</StyledLabel>
            <StyledInput type='password' placeholder='*********' />
          </InputContainer>
          <CheckBoxContainer>
            <CheckBoxWrapper>
              <input type='checkbox' />
              <InfoText>Remember for 30 days</InfoText>
            </CheckBoxWrapper>
            <ForgotButton>Forgot Password</ForgotButton>
          </CheckBoxContainer>
          <LinkButton to={'/profileOption'} label='Sign In' />
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
  padding: 60px 175px;
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

const StyledLabel = styled.label`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.25rem;
  color: ${primaryText};
  margin-top: 15px;
`;

const StyledInput = styled.input`
  border: 1px solid ${lightBlue};
  border-radius: 7px;
  height: 40px;
  margin-top: 5px;
  padding: 1px 12px;
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

const ForgotButton = styled.button`
  color: ${green};
  background-color: transparent;
  border: none;
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
`;
