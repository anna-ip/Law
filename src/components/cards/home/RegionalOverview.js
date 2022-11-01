import React, { useState } from 'react';
import styled from 'styled-components';
import { HomeCard } from '../cardComponents/HomeCard';
import { HomeMap } from './homeComponents/HomeMap';
import { ReactComponent as Minus } from '../../../assets/images/minus.svg';
import { ReactComponent as Plus } from '../../../assets/images/plus.svg';
import { secondaryBackground } from '../../ui/styles';

export const RegionalOverview = () => {
  const [mapWidth, setMapWidth] = useState('635');
  const [mapHeight, setMapHeight] = useState('380');

  const handleExpand = () => {
    setMapWidth(mapWidth * 1.1);
    setMapHeight(mapHeight * 1.1);
  };

  const handleDecrease = () => {
    setMapWidth(mapWidth * 0.9);
    setMapHeight(mapHeight * 0.9);
  };

  return (
    <HomeCard
      title='Regional overview'
      hasCircle={false}
      padding='27px 12px 0 35px'
      cardHeight='330px'
      max-width='886px'
    >
      <Container>
        <MapContainer>
          <MapWrapper>
            <HomeMap width={mapWidth} height={mapHeight} />
          </MapWrapper>
        </MapContainer>
        <ButtonWrapper>
          <ExpandButton onClick={handleExpand}>
            <Plus />
          </ExpandButton>
          <DecreaseButton onClick={handleDecrease}>
            <Minus />
          </DecreaseButton>
        </ButtonWrapper>
      </Container>
    </HomeCard>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 886px;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 588px;

  @media (min-width: 1440px) {
    max-width: 673px;
  }
  @media (min-width: 1550px) {
    max-width: 705px;
  }
  @media (min-width: 1640px) {
    max-width: 770px;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 588px;
  height: 289px;

  @media (min-width: 1440px) {
    max-width: 630px;
  }
  @media (min-width: 1500px) {
    max-width: 670px;
  }
  @media (min-width: 1550px) {
    max-width: 700px;
  }

  @media (min-width: 1640px) {
    max-width: 770px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding-bottom: 12px;
`;

const ExpandButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5px;
  background-color: ${secondaryBackground};
  border: 1px solid #e7e7e7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
`;

const DecreaseButton = styled(ExpandButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 4.5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;
