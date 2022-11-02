import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomeCard } from '../cardComponents/HomeCard';
import check from '../../../assets/images/check.svg';
import { ReactComponent as Spinner } from '../../../assets/images/spinner-green-80.svg';
import { ReactComponent as Level } from '../../../assets/images/level.svg';
import { greenNeon, lightGrey, primaryText } from '../../ui/styles';

export const SpendAndComplexity = () => {
  return (
    <CardLink to='/spend' style={{ textDecoration: 'none' }}>
      <HomeCard
        title='Spend & Complexity Level'
        hasTitleWrap
        wrapWidth='90%'
        icon={check}
        iconSize={16}
        circleSize={26}
        alignCircle='flex-start'
        circleBackground={greenNeon}
        padding='27px 28px 20px 35px'
        cardMinHeight='184px'
        justifyContent='space-between'
      >
        <Container>
          <Column>
            <InfoText>Total spending</InfoText>
            <Text>2,6 M €</Text>
            <SubText>
              <Green>0.13%</Green> of total revenue
            </SubText>
          </Column>
          <Column>
            <InfoText>Level of complexity</InfoText>
            <Row>
              <IconWrapper>
                <Spinner />
              </IconWrapper>
              <Text>80%</Text>
            </Row>
            <Row>
              <Level />
              <SubText style={{ marginLeft: '6px' }}> 4/5</SubText>
            </Row>
          </Column>
        </Container>
      </HomeCard>
    </CardLink>
  );
};

const CardLink = styled(Link)`
  width: 54%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  padding-top: 24px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.5rem;
  color: ${primaryText};
  margin: 0 0 4px 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
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

const IconWrapper = styled.div`
  margin-right: 6px;
`;
