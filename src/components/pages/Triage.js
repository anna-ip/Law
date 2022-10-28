import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';
import { TriageMap } from '../triage/TriageMap';
import { ReactComponent as Globe } from '../../assets/images/globe.svg';
import { primaryText } from '../ui/styles';
import { Header } from '../Header';
import { Region } from '../triage/Region';

export const Triage = () => {
  const [region, setRegion] = useState('');

  return (
    <Container>
      <HeaderContainer>
        <StyledLink to='/'>
          <Logo alt='Logo' width='53px' height='56px' />
        </StyledLink>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </HeaderContainer>
      <MapContainer>
        <TriageMap
          onClickAfrica={() => setRegion('Africa')}
          onClickAsiaPacific={() => setRegion('Asia Pacific')}
          onClickEurope={() => setRegion('Europe')}
          onClickMiddleEast={() => setRegion('Middle East')}
          onClickNorthAmerica={() => setRegion('North America')}
          onClickLatinAmerica={() => setRegion('Latin America')}
          region={region}
          setRegion={setRegion}
        />
        {region.length === 0 && (
          <>
            <TitleWrapper>
              <Globe width='40px' height='40px' />
              <Title>Region</Title>
            </TitleWrapper>
            <SubTitle>
              Click on the map above to load the correspond departments.
            </SubTitle>
          </>
        )}
        {region.length > 0 && <Region region={region} setRegion={setRegion} />}
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 66px 0 0 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin-right: 48px;
`;

const StyledLink = styled(Link)`
  margin: 3px 15% 0 48px;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-size: 2.5rem;
  font-weight: 500;
  color: ${primaryText};
  margin: 0 0 0 8px;
`;

const SubTitle = styled.p`
  font-family: 'Inter';
  font-size: 1rem;
  font-weight: 500;
  color: ${primaryText};
  margin: 17px 0 0 0;
`;
