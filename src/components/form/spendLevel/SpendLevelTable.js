import styled from 'styled-components/macro';
import {
  green,
  DottedLine,
  orange,
  DottedFrame,
  lightGrey,
  primaryText,
} from '../../ui/styles';
import { ReactComponent as Globe } from '../../../assets/images/globe-grey.svg';

export const SpendLevelTable = () => {
  return (
    <Container>
      <DottedFrame>
        <TitleRow>
          <Title>Total legal spending</Title>
          <Summary>
            <Total>2 646 844 €</Total>
            <Text>
              <Percentage>0.13%</Percentage> of total revenue
            </Text>
          </Summary>
        </TitleRow>
        <Row>
          <Globe />
          <Region>REGION</Region>
        </Row>
        <RegionRow>
          <RegionText>North America</RegionText>
          <RegionTotal>564 222 €</RegionTotal>
        </RegionRow>
        <RegionRow>
          <RegionText>Latin America</RegionText>
          <RegionTotal> 679 345 €</RegionTotal>
        </RegionRow>
        <RegionRow>
          <RegionText>EMEA</RegionText>
          <RegionTotal> 679 345 €</RegionTotal>
        </RegionRow>
        <RegionRow>
          <RegionText>Asia Pacific</RegionText>
          <RegionTotal> 765 300 €</RegionTotal>
        </RegionRow>
      </DottedFrame>
      <TotalRow>
        <Title>Total outside counsel spending</Title>
        <Summary>
          <Total>84 800 €</Total>
          <Text>
            <Percentage>0.004%</Percentage> of total revenue
          </Text>
        </Summary>
      </TotalRow>
      <DottedLine />
      <TotalRow>
        <Title>Total inside counsel spending</Title>
        <Summary>
          <Total>2 119 294 €</Total>
          <Text>
            <Percentage>0.106%</Percentage> of total revenue
          </Text>
        </Summary>
      </TotalRow>
      <DottedLine />
      <TotalRow>
        <Title>Cost efficiency program</Title>
        <Summary>
          <Total>2 200 00 €</Total>
          <Text>
            <Percentage style={{ color: `${orange}` }}>83%</Percentage> of total
            revenue
          </Text>
        </Summary>
      </TotalRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0px 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 30px 0;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.p`
  font-family: 'Inter';
  font-size: 1rem;
  font-weight: 600;
  color: ${primaryText};
  margin: 0;
`;

const Total = styled.p`
  font-family: 'Inter';
  font-size: 1rem;
  font-weight: 500;
  color: ${primaryText};
  margin: 0;
`;

const Text = styled.p`
  font-family: 'Inter';
  font-size: 0.75rem;
  font-weight: 600;
  color: ${primaryText};
  margin: 2px 0 0 0;
`;

const Percentage = styled.span`
  color: ${green};
`;

const TotalRow = styled(TitleRow)`
  padding: 28px 16px;
`;

const RegionRow = styled(TitleRow)`
  padding: 18px 0 0 0;
`;

const RegionText = styled.p`
  font-family: 'Inter';
  font-size: 0.75rem;
  font-weight: 500;
  color: ${primaryText};
  margin: 0;
`;

const Region = styled(RegionText)`
  color: ${lightGrey};
  margin: 0 0 0 4px;
`;

const RegionTotal = styled(RegionText)`
  font-weight: 400;
`;
