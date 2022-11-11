import styled from 'styled-components/macro';
import { DottedLine, orange, primaryText } from '../../ui/styles';

export const CostTable = () => {
  return (
    <>
      <TitleRow>
        <Title>Total materialized cost </Title>
        <Summary>
          <Total>84 800 €</Total>
          <Text>
            <Percentage>0.004%</Percentage> of total revenue
          </Text>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Total theoretical costs</Title>
        <Summary>
          <Total>50 400 000 €</Total>
          <Text>
            <Percentage>0.06%</Percentage> of total revenue
          </Text>
        </Summary>
      </TitleRow>
    </>
  );
};

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  margin: 20px 0px;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${primaryText};
`;

const Total = styled.p`
  font-size: 16px;
  color: ${primaryText};
  margin: 0;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${primaryText};
  margin: 2px 0 0 0;
`;

const Percentage = styled.span`
  color: ${orange};
`;
