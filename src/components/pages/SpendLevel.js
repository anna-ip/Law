import { Header } from '../Header';
import { NavLink } from '../navLink/NavLink';
import styled from 'styled-components/macro';
import { SpendLevelCard } from '../card/spend/SpendLevelCard';
import { ComplexityCard } from '../card/spend/index';
import { LastUpdated } from '../LastUpdated';

export const SpendLevel = () => {
  return (
    <Container>
      <NavLink />
      <RightContainer>
        <Header />
        <LastUpdated />
        <CardContainer>
          <CardColumn>
            <SpendLevelCard />
          </CardColumn>
          <CardColumn>
            <ComplexityCard />
          </CardColumn>
        </CardContainer>
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
