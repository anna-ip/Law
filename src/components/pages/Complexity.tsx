import styled from 'styled-components/macro';
import { SpendLevelCard } from '../cards/spend/SpendLevelCard';
import { ComplexityCard } from '../cards/spend/index';
import { PageBase } from './pageComponents/PageBase';

export const Complexity = () => {
  return (
    <PageBase>
      <CardColumn>
        <SpendLevelCard />
      </CardColumn>
      <CardColumn>
        <ComplexityCard />
      </CardColumn>
    </PageBase>
  );
};

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
