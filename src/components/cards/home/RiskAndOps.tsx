import React from 'react';
import styled from 'styled-components';
import { HomeCard } from '../cardComponents/HomeCard';
import check from '../../../assets/images/check.svg';
import { greenNeon, lightGrey, primaryText } from '../../ui/styles';
import { Link } from 'react-router-dom';

export const RiskAndOps = () => {
  return (
    <CardLink to='/risk' style={{ textDecoration: 'none' }}>
      <HomeCard
        title='Risks & OPS'
        icon={check}
        iconSize={16}
        circleSize={26}
        circleBackground={greenNeon}
        padding='27px 28px 20px 35px'
        cardMinHeight='184px'
      >
        <Container>
          <InfoText>Total risk & OPS</InfoText>
          <Text>1 104 250 000 €</Text>
          <SubText>
            <Green>0.13%</Green> of total revenue
          </SubText>
        </Container>
      </HomeCard>
    </CardLink>
  );
};

const CardLink = styled(Link)`
  width: 42%;
  margin: 0 0 0 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 51px;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.5rem;
  color: ${primaryText};
  margin: 0 0 4px 0;
`;

const InfoText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 0.875rem;
  margin: 0 0 16px 0;
  color: ${lightGrey};
`;

const SubText = styled(InfoText)`
  color: ${primaryText};
  margin: 0;
`;

const Green = styled.span`
  color: ${greenNeon};
`;
