import styled from 'styled-components/macro';
import {
  Materialized,
  RiskManagement,
  RiskAndOpportunities,
} from '../cards/risk/index';
import { PageBase } from './pageComponents/PageBase';

export const RiskAndOps = () => {
  return (
    <PageBase>
      <CardColumn>
        <RiskAndOpportunities />
      </CardColumn>
      <CardColumn>
        <Materialized />
        <RiskManagement />
      </CardColumn>
    </PageBase>
  );
};

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
