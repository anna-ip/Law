import React from 'react';
import styled from 'styled-components';
import { HomeCard } from '../cardComponents/HomeCard';
import { ProjectChart } from './homeComponents/ProjectChart';
import { ReactComponent as Chart } from '../../../assets/images/project-tracker.svg';
import { lightGrey, primaryText } from '../../ui/styles';

export const ProjectTracker = () => {
  return (
    <HomeCard
      title='Project Tracker'
      hasCircle={false}
      hasTabs
      cardHeight='100%'
      justifyContent='space-between'
    >
      <Container>
        <LeftColumn>
          <ProjectChart width='100%' height='100%' />
          <ChartWrapper>
            <Chart />
            <ChartText>Risk & Opportunity</ChartText>
          </ChartWrapper>
        </LeftColumn>
        <RightColumn>
          <RightContainer>
            <Wrapper>
              <InfoText>Total hours spent</InfoText>
              <Digit>126 hours</Digit>
            </Wrapper>
            <InfoText>Total external spending</InfoText>
            <Digit>250 000 €</Digit>
          </RightContainer>
        </RightColumn>
      </Container>
    </HomeCard>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  width: 60%;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 15px;
`;

const ChartText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  color: ${primaryText};
  margin: 0 0 0 5px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const InfoText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  color: ${lightGrey};
  margin: 0;
`;

const Digit = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.5rem;
  color: ${primaryText};
  margin: 0;
`;
