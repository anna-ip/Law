import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Header } from '../Header';
import { NavLink } from '../navLink/NavLink';
import { MapCard } from '../cards/map/MapCard';
import { LastUpdated } from '../LastUpdated';
import {
  RegionalOverview,
  ProjectTracker,
  SpendAndComplexity,
  RiskAndOps,
  LegalOperationModel,
  SpendOverview,
  OptimizationTracker,
} from '../cards/home';

export const Home = () => {
  const [updated, setUpdated] = useState('');
  const [firstVisit, setFirstVisit] = useState(() => {
    const data = window.localStorage.getItem('FIRST_VISIT');
    return data !== null ? JSON.parse(data) : true;
  });

  const navigate = useNavigate();

  const handleTakeSurvey = useCallback(() => {
    window.localStorage.setItem('FIRST_VISIT', JSON.stringify(false));
    window.localStorage.setItem('DATE', JSON.stringify(updated));
    setFirstVisit(false);
    navigate('/onboarding/1', { replace: true });
  }, [navigate, updated]);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = `${day}/${month}/${year}`;

    setUpdated(today);
  }, []);

  return (
    <Container>
      <NavLink />
      <RightContainer>
        <Header />
        {firstVisit ? (
          <MapContainer>
            <MapCard onClick={handleTakeSurvey} />
          </MapContainer>
        ) : (
          <HomeContainer>
            {!firstVisit && <LastUpdated />}
            <InnerContainer>
              <LeftColumn>
                <RegionalOverview />
                <ProjectTracker />
                <Row>
                  <SpendAndComplexity />
                  <RiskAndOps />
                </Row>
              </LeftColumn>
              <RightColumn>
                <RightWrapper>
                  <LegalOperationModel />
                  <SpendOverview />
                  <OptimizationTracker />
                </RightWrapper>
              </RightColumn>
            </InnerContainer>
          </HomeContainer>
        )}
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 64px 100px 0 38px;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 35px 0 0;
  width: 70%;
  justify-content: space-between;
  gap: 32px;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 32px;
`;
