import React from 'react';
import styled from 'styled-components/macro';
import {
  DottedLine,
  green,
  greenNeon,
  lightGrey,
  orange,
  primaryText,
} from '../../ui/styles';
import { HomeCard } from '../cardComponents/HomeCard';
import check from '../../../assets/images/check.svg';
import { ReactComponent as User } from '../../../assets/images/user-grey.svg';
import { Link } from 'react-router-dom';

export const LegalOperationModel = () => {
  return (
    <Link to={'/legal'} style={{ textDecoration: 'none' }}>
      <HomeCard
        title='Legal Operating Model'
        circleBackground={greenNeon}
        icon={check}
        iconSize={16}
        circleSize={26}
        alignCircle='flex-start'
        hasTitleWrap
        padding='27px 0px 0px 35px'
        titlePadding='0 28px 0 0'
      >
        <StyledUl>
          <Container>
            <List>
              <Row>
                <Title>1. Legal department</Title>
                <Wrapper>
                  <User width='10.5px' height='13.5px' />
                  <Text>7</Text>
                </Wrapper>
              </Row>
              <Row>
                <Text>Risk & OPS</Text>
                <GreenText>50,775,000 MM€</GreenText>
              </Row>
            </List>
            <DottedLine />
            <List>
              <Row>
                <Title>2. Organizational department</Title>
                <Wrapper>
                  <User width='10.5px' height='13.5px' />
                  <Text>7</Text>
                </Wrapper>
              </Row>
              <Row>
                <Text>Risk & OPS</Text>
                <OrangeText>40,000,000 MM€</OrangeText>
              </Row>
            </List>
            <DottedLine />
            <List>
              <Row>
                <Title>3. Compliance</Title>
                <Wrapper>
                  <User width='10.5px' height='13.5px' />
                  <Text>4</Text>
                </Wrapper>
              </Row>
              <Row>
                <Text>Risk & OPS</Text>
                <OrangeText>50,475,000 MM€</OrangeText>
              </Row>
            </List>
            <DottedLine />
            <List>
              <Row>
                <Title>4. In-Licensing</Title>
                <Wrapper>
                  <User width='10.5px' height='13.5px' />
                  <Text>4</Text>
                </Wrapper>
              </Row>
              <Row>
                <Text>Risk & OPS</Text>
                <GreenText>350,000,000 MM€</GreenText>
              </Row>
            </List>
            <DottedLine />
            <List style={{ paddingBottom: '30px' }}>
              <Row>
                <Title>5. Sales distribution international markets</Title>
                <Wrapper>
                  <User width='10.5px' height='13.5px' />
                  <Text>5</Text>
                </Wrapper>
              </Row>
              <Row>
                <Text>Risk & OPS</Text>
                <GreenText>43,804,010 MM€</GreenText>
              </Row>
            </List>
          </Container>
        </StyledUl>
      </HomeCard>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 180px;
  margin-top: 6px;
  padding-right: 30px;
  overflow-y: scroll;

  @media (min-width: 1440px) {
    height: 190px;
  }
  @media (min-width: 1540px) {
    height: 200px;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: ${primaryText};
  margin: 7px 0;
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${lightGrey};
  margin: 0 0 0 16px;
`;

const GreenText = styled(Text)`
  color: ${green};
  margin: 0 0 0 12px;
`;

const OrangeText = styled(GreenText)`
  color: ${orange};
  margin: 0 0 0 12px;
`;
