import { Header } from '../Header';
import { NavLink } from '../navLink/NavLink';
import styled from 'styled-components';
import { LegalCardGroup } from '../cards/legal/LegalCardGroup';

export const LegalOperating = () => {
  return (
    <Container>
      <NavLink />
      <RightContainer>
        <Header />
        <CardContainer>
          <LegalCardGroup />
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
  margin-top: 60px;
`;
