import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  yellow,
  secondaryBackground,
  lightBlue,
  lightGrey,
  greenNeon,
  primaryText,
} from '../../ui/styles';
import check from '../../../assets/images/check.svg';
import exclamation from '../../../assets/images/exclamation.svg';
import { Circle } from '../../ui/circle';
import { CostTable } from '../../form/materialized/CostTable';
import { CostForm } from '../../form/materialized/CostForm';
import { UpdatedBanner } from '../cardComponents/UpdatedBanner';
import { MaterializedPopUp } from '../../popUp/MaterializedPopUp';

export const Materialized = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);
  const [showGreenLevel, setShowGreenLevel] = useState(false);

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
            <CardTitle>Materialized cost</CardTitle>
            {!isEditing && showGreenLevel && !hasBeenEdited ? (
              <Circle bg={greenNeon} icon={check} size={24} />
            ) : (
              !isEditing &&
              !hasBeenEdited && (
                <CircleWrapper onClick={handleOpenModal}>
                  <Circle
                    bg={yellow}
                    icon={exclamation}
                    size={24}
                    iconSize={4}
                  />
                </CircleWrapper>
              )
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

        {!isEditing && <CostTable />}
        {isEditing && (
          <CostForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
            setShowGreenLevel={setShowGreenLevel}
          />
        )}
      </CardContainer>
      {isOpen && <MaterializedPopUp setIsOpen={setIsOpen} />}
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
  margin: 10px 10px 30px 10px;
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
  margin: 0 0 8px 0;
`;

const CardTitle = styled.h1`
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
