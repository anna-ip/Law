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
              <LinkButton to={'/logIn'} width={'50%'}>
                Get started
              </LinkButton>
            </TextWrapper>
          </Column>
          <Column>
            <CardWrapper>
              <Cards width='33rem' height='27rem' />
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
 @media (min-width: 768px) {
  padding: 0 146px 0 148px;
 }
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

// todo Add a burger menu!
const NavContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
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
  padding: 8px;
  @media (min-width: 640px) {
    padding: 0;
  };
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12% 0;

  @media (min-width: 640px) {
    width: 50%;
    align-items: left;
  }
`;

const TextWrapper = styled.div`
  width: 90%;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-size: 2rem;
  font-weight: 500;
  color: ${primaryBlue};
  line-height: 110%;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Green = styled.span`
  color: ${green};
`;

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${primaryText};
  line-height: 140%;
  margin: 30px 0 7% 0;
  @media (min-width: 640px) {
    font-size: 1.6rem;
  }
`;

const CardWrapper = styled.div`
display: none;
@media (min-width: 640px) {
  display: flex;
  align-self: center;
  width: 100%;
  height: 500px;
}
`;
