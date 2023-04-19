import styled from 'styled-components/macro';
import { DottedLine, primaryText } from '../../ui/styles';

interface ComplexityTableProps {
  data: {
    businessDivisions: string;
    countries: string;
    employees: string;
    responsibilities: string;
    strategic: string;
    legalSupport: string;
    regulated: string;
  };
}

export const ComplexityTable = ({data}: ComplexityTableProps) => {
 

  return (
    <>
      <TitleRow>
        <Title>Business divisions</Title>
        <Summary>
          <Total>{data.businessDivisions}</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Countries</Title>
        <Summary>
          <Total>{data.countries}</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Employees</Title>
        <Summary>
          <Total>{data.employees}</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Legal areas of responsibilities</Title>
        <Summary>
          <Total>{data.responsibilities}</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Strategic projects</Title>
        <Summary>
          <Total>{data.strategic}</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Level of structured legal support demand</Title>
        <Summary>
          <Total>{data.legalSupport}%</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Regulated, non regulated industry</Title>
        <Summary>
          <Total>{data.regulated}</Total>
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
  font-size: 1rem;
  font-weight: 600;
  color: ${primaryText};
  margin: 0;
`;

const Total = styled.p`
  font-size: 1rem;
  color: ${primaryText};
  margin: 0;
`;
