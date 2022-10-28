import styled from 'styled-components/macro';
import { DottedLine, primaryText } from '../../ui/styles';

export const ComplexityTable = () => {
  return (
    <>
      <TitleRow>
        <Title>Business divisions</Title>
        <Summary>
          <Total>31</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Countries</Title>
        <Summary>
          <Total>14</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Employees</Title>
        <Summary>
          <Total>7500</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Legal areas of responsibilities</Title>
        <Summary>
          <Total>16</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Strategic projects</Title>
        <Summary>
          <Total>28</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Level of structured legal support demand</Title>
        <Summary>
          <Total>50%</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Regulated, non regulated industry</Title>
        <Summary>
          <Total>3</Total>
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
  padding: 35px 15px 35px 20px;
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
