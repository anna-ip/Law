import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import {
  yellow,
  secondaryBackground,
  lightBlue,
  lightGrey,
  primaryText,
} from '../../ui/styles';
import exclamation from '../../../assets/images/exclamation.svg';
import { RiskAndManagementTable } from '../../form/riskManagement.js/RiskAndManagementTable';
import { Circle } from '../../ui/circle';
import { UpdatedBanner } from '../cardComponents/UpdatedBanner';
import { RiskAndManagementForm } from '../../form/riskManagement.js/RiskAndManagementForm';
import { RiskManagementPopUp } from '../../popUp/RiskManagementPopUp';

export const RiskManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
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
            <WrapContainer>
              <CardTitle>Risk management performance</CardTitle>
            </WrapContainer>
            {!isEditing && !hasBeenEdited && (
              <CircleWrapper onClick={handleOpenModal}>
                <Circle bg={yellow} icon={exclamation} size={24} iconSize={4} />
              </CircleWrapper>
            )}
          </TitleWrapper>
          {!isEditing && <EditButton onClick={handleEdit}>Edit</EditButton>}
        </TitleContainer>
        {!isEditing && (
          <BenchmarkWrapper>
            <Benchmark onClick={handleOpenModal}>Benchmark</Benchmark>
          </BenchmarkWrapper>
        )}
        <Line />
        {!isEditing && hasBeenEdited && <UpdatedBanner />}

        {!isEditing && <RiskAndManagementTable />}
        {isEditing && (
          <RiskAndManagementForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
          />
        )}
      </CardContainer>
      {isOpen && <RiskManagementPopUp setIsOpen={setIsOpen} />}
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  height: fit-content;
  border-radius: 20px;
  background-color: ${secondaryBackground};
  margin: 10px 10px 100px 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 8px;
  width: 55%;
`;

const CardTitle = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 2rem;
  color: ${primaryText};
  margin: 0;
  line-height: 38.4px;
`;

const CircleWrapper = styled.div`
  margin-top: 8px;
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
  font-size: 1rem;
  color: ${primaryText};
  margin-right: 10px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightBlue};
`;
