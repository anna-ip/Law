import React from 'react';
import styled from 'styled-components/macro';
import { DottedLine, primaryText } from '../../ui/styles';

export const RiskAndManagementTable = () => {
  return (
    <>
      <TitleRow>
        <Title>Trainings</Title>
        <Summary>
          <Total>10</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Investigations & litigations </Title>
        <Summary>
          <Total>25</Total>
        </Summary>
      </TitleRow>
      <DottedLine />
      <TitleRow>
        <Title>Audits</Title>
        <Summary>
          <Total>8</Total>
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
  margin: 20px 20px 20px 0px;
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
