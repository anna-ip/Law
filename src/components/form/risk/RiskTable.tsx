import styled from 'styled-components';
import { green, lightBlue, orange, primaryText } from '../../ui/styles';

export const RiskTable = () => {
  return (
    <Container>
      <InnerContainer>
        <TitleWrapper>
          <TitleRow>
            <Title>Total risk & opportunities</Title>
            <Summary>
              <Total>2 646 844 €</Total>
              <Text>
                <OrangePercentage>0.55%</OrangePercentage> of total revenue
              </Text>
            </Summary>
          </TitleRow>
        </TitleWrapper>
        <DottedFrame>
          <TitleRow>
            <Title>Total Risk</Title>
            <Summary>
              <Total>84 800 €</Total>
              <Text>
                <Percentage>0.004%</Percentage> of total revenue
              </Text>
            </Summary>
          </TitleRow>
          <Row>
            <StyledLabel>ABAC</StyledLabel>
            <StyledValue> 646 844 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>AML</StyledLabel>
            <StyledValue> 564 222 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>Antitrust</StyledLabel>
            <StyledValue> 679 345 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>Privacy</StyledLabel>
            <StyledValue> 49 89 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>ESG</StyledLabel>
            <StyledValue>35 995 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>Regulatory</StyledLabel>
            <StyledValue> 9 678 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>IP</StyledLabel>
            <StyledValue>844 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>Sanctions</StyledLabel>
            <StyledValue>6 739 169 €</StyledValue>
          </Row>
        </DottedFrame>
        <DottedFrame>
          <TitleRow>
            <Title>Opportunities</Title>
            <Summary>
              <Total>700 000 000 €</Total>
              <Text>
                <Percentage style={{ color: `${orange}` }}>0.106%</Percentage>{' '}
                of total revenue
              </Text>
            </Summary>
          </TitleRow>
          <Row>
            <StyledLabel>M&A</StyledLabel>
            <StyledValue>2 646 844 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>In-licensing agreement</StyledLabel>
            <StyledValue>3 564 222 €</StyledValue>
          </Row>
          <Row>
            <StyledLabel>Innovation project</StyledLabel>
            <StyledValue>2 679 345 €</StyledValue>
          </Row>
        </DottedFrame>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  padding: 22px 20px;
`;

const DottedFrame = styled.div`
  border: 1px dashed ${lightBlue};
  border-radius: 12px;
  padding: 31px 20px 20px 20px;
  margin-bottom: 22px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.p`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  color: ${primaryText};
`;

const Total = styled.p`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  color: ${primaryText};
  margin: 0;
`;

const Text = styled.p`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  color: ${primaryText};
  margin: 2px 0 0 0;
`;

const Percentage = styled.span`
  color: ${green};
`;

const OrangePercentage = styled.span`
  color: ${orange};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 9px 0;
`;

const StyledLabel = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  color: ${primaryText};
`;

const StyledValue = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  color: ${primaryText};
  margin: 0;
`;
