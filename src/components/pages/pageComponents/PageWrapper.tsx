import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';
import { Header } from '../../Header';
import { LastUpdated } from '../../LastUpdated';
import { NavLink } from '../../navLink/NavLink';

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <NavLink />
      <RightContainer>
        <Header />
        <LastUpdated />
        <CardContainer>{children}</CardContainer>
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
