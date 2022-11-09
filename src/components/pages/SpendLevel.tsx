import styled from 'styled-components/macro';
import { SpendLevelCard } from '../cards/spend/SpendLevelCard';
import { ComplexityCard } from '../cards/spend/index';
import { PageWrapper } from './pageComponents/PageWrapper';

export const SpendLevel = () => {
  return (
    <PageWrapper>
      <CardColumn>
        <SpendLevelCard />
      </CardColumn>
      <CardColumn>
        <ComplexityCard />
      </CardColumn>
    </PageWrapper>
  );
};

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
