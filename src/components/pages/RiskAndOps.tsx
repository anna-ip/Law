import styled from 'styled-components/macro';
import {
  Materialized,
  RiskManagement,
  RiskAndOpportunities,
} from '../cards/risk/index';
import { PageWrapper } from './pageComponents/PageWrapper';

export const RiskAndOps = () => {
  return (
    <PageWrapper>
      <CardColumn>
        <RiskAndOpportunities />
      </CardColumn>
      <CardColumn>
        <Materialized />
        <RiskManagement />
      </CardColumn>
    </PageWrapper>
  );
};

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
