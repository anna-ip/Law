import React from 'react';
import styled from 'styled-components/macro';
import { lightGrey } from '../../ui/styles';
import { HomeCard } from '../cardComponents/HomeCard';
import red from '../../../assets/images/optimization-red.jpg';
import green from '../../../assets/images/optimization-green.jpg';

export const OptimizationTracker = () => {
  return (
    <HomeCard
      title='Efficiency Data'
      hasCircle={false}
      cardMinHeight='184px'
      justifyContent='space-between'
      padding='27px 28px 20px 35px'
    >
      <Container>
        <Column>
          <img src={green} alt='78% chart' width='81px' height='83px' />
          <InfoText>Technology usage</InfoText>
        </Column>
        <Column>
          <img src={red} alt='25% chart' width='81px' height='83px' />
          <InfoText>Process optimization</InfoText>
        </Column>
      </Container>
    </HomeCard>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 24px;
`;

const InfoText = styled.p`
  font-size: 0.75rem;
  margin: 16px 0 0 0;
  color: ${lightGrey};
`;
