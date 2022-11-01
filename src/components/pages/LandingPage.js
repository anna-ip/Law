import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';
import { ReactComponent as Cards } from '../../assets/images/landing-page.svg';
import background from '../../assets/images/background.jpg';
import { green, primaryBlue, primaryText } from '../ui/styles';
import { LinkButton } from '../ui/button';

export const LandingPage = () => {
  useEffect(() => {
    window.localStorage.setItem('FIRST_VISIT', JSON.stringify(true));
  }, []);

  return (
    <BackgroundImage
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container>
        <HeaderContainer>
          <LogoWrapper>
            <Logo width={40} height={41} />
          </LogoWrapper>
          <NavContainer>
            <Tab>Home</Tab>
            <Tab>About</Tab>
            <Tab>Pricing</Tab>
            <Tab>Demo</Tab>
            <Tab>Our clients</Tab>
            <Tab>Our team</Tab>
          </NavContainer>
        </HeaderContainer>
        <InnerContainer>
          <Column>
            <TextWrapper>
              <TitleRow>
                <Title>
                  A <Green>digital solution</Green>
                </Title>
              </TitleRow>
              <Title> to manage your legal function like business.</Title>
              <SubTitle>
                With the power of data measuring efficiency holistically now!
              </SubTitle>
              <LinkButton to={'/logIn'} width='180px'>
                Get started
              </LinkButton>
            </TextWrapper>
          </Column>
          <Column>
            <CardWrapper>
              <Cards width='37rem' height='30rem' />
            </CardWrapper>
          </Column>
        </InnerContainer>
      </Container>
    </BackgroundImage>
  );
};

const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
`;

const Container = styled.div`
  padding: 0 146px 0 148px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  padding-top: 40px;
`;

const LogoWrapper = styled.div`
  margin: 0 107px 0 8px;
  width: 40px;
  height: auto;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
`;

const Tab = styled.p`
  font-family: 'Poppins';
  font-size: 1.25rem;
  font-weight: 500;
  color: ${primaryText};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 12% 0;
`;

const TextWrapper = styled.div`
  width: 600px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-size: 3.5rem;
  font-weight: 500;
  color: ${primaryBlue};
  line-height: 110%;
  margin: 0;
`;

const Green = styled.span`
  color: ${green};
`;

const SubTitle = styled.h2`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.6rem;
  color: ${primaryText};
  line-height: 140%;
  margin: 30px 0 70px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  align-self: center;
  height: 500px;
`;
