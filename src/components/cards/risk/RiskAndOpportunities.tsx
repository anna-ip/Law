import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import {
  yellow,
  secondaryBackground,
  lightBlue,
  lightGrey,
  primaryText,
} from '../../ui/styles';
import exclamation from '../../../assets/images/exclamation.svg';
import { RiskForm } from '../../form/risk/RiskForm';
import { RiskTable } from '../../form/risk/RiskTable';
import { Circle } from '../../ui/circle';
import { RiskPopUp } from '../../popUp/RiskPopUp';
import { UpdatedBanner } from '../cardComponents/UpdatedBanner';

export const RiskAndOpportunities = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHasBeenEdited(false);
    }, 1500);
  }, [isEditing]);

  return (
    <>
      <CardContainer>
        <TitleContainer>
          <TitleWrapper>
            <Title>Risk & opportunities</Title>
            {!isEditing && (
              <CircleWrapper onClick={handleOpenModal}>
                <Circle bg={yellow} icon={exclamation} size={24} iconSize={4} />
              </CircleWrapper>
            )}
          </TitleWrapper>
          {!isEditing && <EditButton onClick={handleEdit}>Edit</EditButton>}
        </TitleContainer>
        {!isEditing && (
          <BenchmarkWrapper onClick={handleOpenModal}>
            <Benchmark>Benchmark</Benchmark>
          </BenchmarkWrapper>
        )}
        <Line />
        {!isEditing && hasBeenEdited && <UpdatedBanner />}
        {!isEditing && <RiskTable />}
        {isEditing && (
          <RiskForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
          />
        )}
      </CardContainer>
      {isOpen && <RiskPopUp setIsOpen={setIsOpen} />}
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: fit-content;
  border-radius: 20px;
  background-color: ${secondaryBackground};
  margin: 10px 30px 100px 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 2rem;
  color: ${primaryText};
  margin: 0 7px 0 0;
`;

const CircleWrapper = styled.div`
  cursor: pointer;
`;

const BenchmarkWrapper = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
`;

const Benchmark = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  color: ${lightGrey};
  text-decoration: underline;
  margin: 0 0 15px 0;
`;

const EditButton = styled.button`
  background: ${secondaryBackground};
  border: none;
  text-decoration: underline;
  font-family: 'Poppins';
  font-size: 16px;
  color: ${primaryText};
  margin-right: 10px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightBlue};
`;
