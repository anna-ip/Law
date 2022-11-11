import React from 'react';
import styled from 'styled-components/macro';
import { lightGrey, orange, primaryText } from '../../ui/styles';
import { HomeCard } from '../cardComponents/HomeCard';
import exclamation from '../../../assets/images/exclamation.svg';
import { ReactComponent as Spinner } from '../../../assets/images/spinner-red-48.svg';
import { ReactComponent as Spinner35 } from '../../../assets/images/spinner-red-35.svg';

export const SpendOverview = () => {
  return (
    <HomeCard
      title='Spend Overview'
      circleBackground={orange}
      icon={exclamation}
      iconSize={4}
      circleSize={26}
      cardHeight='100%'
      justifyContent='space-between'
    >
      <Container>
        <Wrapper>
          <InfoText>Total internal legal spend</InfoText>
          <Title>60 250 000 €</Title>
        </Wrapper>
        <Row>
          <Column>
            <InfoText>Internal legal spend percentage</InfoText>
            <Percentage>
              <Spinner width='34px' height='34px' />
              <Text>48%</Text>
            </Percentage>
          </Column>
          <Column>
            <InfoText>External legal spend percentage</InfoText>
            <Percentage>
              <Spinner35 width='34px' height='34px' />
              <Text>35%</Text>
            </Percentage>
          </Column>
        </Row>
      </Container>
    </HomeCard>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 12px;
  gap: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.5rem;
  color: ${primaryText};
  margin: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 45%;
`;

const Text = styled(Title)`
  font-size: 1.5rem;
  margin: 0 0 0 16px;
`;

const Percentage = styled(Row)`
  margin-top: 12px;
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  margin: 0px 0;
  color: ${lightGrey};
`;
