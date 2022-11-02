import React from 'react';
import styled from 'styled-components/macro';
import {
  RegionalOverview,
  ProjectTracker,
  SpendAndComplexity,
  RiskAndOps,
  LegalOperationModel,
  SpendOverview,
  OptimizationTracker,
} from './index';

export const CardView = () => {
  return (
    <InnerContainer>
      <LeftColumn>
        <RegionalOverview />
        <ProjectTracker />
        <Row>
          <SpendAndComplexity />
          <RiskAndOps />
        </Row>
      </LeftColumn>
      <RightColumn>
        <RightWrapper>
          <LegalOperationModel />
          <SpendOverview />
          <OptimizationTracker />
        </RightWrapper>
      </RightColumn>
    </InnerContainer>
  );
};

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 35px 0 0;
  width: 70%;
  justify-content: space-between;
  gap: 32px;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 32px;
`;
