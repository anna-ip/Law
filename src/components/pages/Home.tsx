import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Header } from '../Header';
import { NavLink } from '../navLink/NavLink';
import { MapCard } from '../cards/map/MapCard';
import { LastUpdated } from '../LastUpdated';
import { CardView } from '../cards/home';

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
            <CardView />
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
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
