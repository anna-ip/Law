import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import {
  white,
  softGrey,
  primaryGrey,
  secondaryBackground,
  lightBlue,
  primaryBlue,
  primaryText,
} from '../../ui/styles';

import user from '../../../assets/images/user-grey.svg';
import close from '../../../assets/images/close.svg';
import plus from '../../../assets/images/circle-plus.svg';

import { LegalTable } from '../../form/legal/LegalTable';
import { valueDrivers } from './data';
import { LegalForm } from '../../form/legal/LegalForm';
import { UpdatedBanner } from '../cardComponents/UpdatedBanner';

export const LegalCard = ({ data }) => {
  const [employee, setEmployee] = useState(data.employee);
  const [drivers, setDrivers] = useState([...data.valueDrivers]);
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);

  const handleNoOfEmployee = (e) => {
    setEmployee(e.target.value);
  };

  const addNewDrivers = (value) => {
    setDrivers((current) => [...current, value]);
    setHasBeenEdited(true);
  };

  const removeDriver = (value) => {
    setDrivers((prevState) => [...prevState.filter((e) => e !== value)]);
    setHasBeenEdited(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHasBeenEdited(false);
    }, 1500);
  }, [isEditing, hasBeenEdited]);

  return (
    <CardContainer>
      <TitleContainer>
        <TitleWrapper>
          <CardTitle>{data.department}</CardTitle>
        </TitleWrapper>
        {!isEditing && (
          <LeftContainer>
            <EmployeeWrapper>
              <img src={user} alt='User icon' />
              {employee ? (
                <EmployeeText>{employee} employee</EmployeeText>
              ) : (
                <EmployeeText>0 employee</EmployeeText>
              )}
            </EmployeeWrapper>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
          </LeftContainer>
        )}
      </TitleContainer>
      <Line />
      {!isEditing && hasBeenEdited && <UpdatedBanner />}

      {isEditing && (
        <>
          <EmployeeTitle>Employee</EmployeeTitle>
          <StyledInput>
            <Input
              type='text'
              value={employee}
              name='employee'
              onChange={handleNoOfEmployee}
              placeholder={employee}
            />
            <Team>team member</Team>
          </StyledInput>
        </>
      )}

      {!isEditing && (
        <>
          <ValueContainer>
            <Title>Value drivers</Title>
            <ValueWrapper>
              {drivers?.map((value, index) => (
                <ValueFrame key={index}>
                  <Value>{value}</Value>
                </ValueFrame>
              ))}
            </ValueWrapper>
          </ValueContainer>
          <Line />
          <LegalTable tableData={data.table} />
        </>
      )}
      {isEditing && (
        <>
          <Title>Value drivers</Title>
          <ValueDriverContainer>
            {drivers?.map((value, index) => (
              <RemoveDriverBtn key={index} onClick={() => removeDriver(value)}>
                <ValueDriverWrapper>
                  <ValueDriversLabel>{value}</ValueDriversLabel>
                  <StyledIcon src={close} alt='Close icon' />
                </ValueDriverWrapper>
              </RemoveDriverBtn>
            ))}
          </ValueDriverContainer>
          <OptionsContainer>
            {valueDrivers.map((value, index) => (
              <AddDriverBtn key={index} onClick={() => addNewDrivers(value)}>
                <ValueDriverWrapper>
                  <Value>{value}</Value>
                  <StyledIcon src={plus} alt='Add icon' width='12px' />
                </ValueDriverWrapper>
              </AddDriverBtn>
            ))}
          </OptionsContainer>
          <LegalForm
            setIsEditing={setIsEditing}
            formData={data.table}
            setHasBeenEdited={setHasBeenEdited}
          />
        </>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 20px;
  background-color: ${secondaryBackground};
  margin: 10px 0px 30px 0;
  padding: 20px 54px;
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

const CardTitle = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  color: ${primaryText};
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
`;

const EmployeeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EmployeeText = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: ${primaryText};
  margin: 0 0 0 12px;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 256px;
  height: 43px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  padding: 10px 24px;
`;

const Input = styled.input`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  width: 50%;
  color: ${primaryText};
  border-style: none;
  padding: 0;
  ::placeholder {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    color: ${primaryText};
    margin: 0;
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const Team = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
  margin: 0;
`;

const EmployeeTitle = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
`;

const EditButton = styled.button`
  background: ${secondaryBackground};
  border: none;
  text-decoration: underline;
  font-family: 'Poppins';
  font-size: 16px;
  color: ${primaryText};
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightBlue};
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 28px 0;
`;

const Title = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 20px;
  color: ${primaryText};
  margin-right: 80px;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 65%;
  gap: 10px;
  padding: 10px 30px;
`;

const ValueFrame = styled.div`
  background-color: ${lightBlue};
  border-radius: 20px;
  align-self: center;
  padding: 6px 16px;
`;

const Value = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  color: ${primaryText};
  margin: 0;
`;

const ValueDriverContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 34px 21px;
  border: 1px solid ${primaryGrey};
  border-radius: 10px;
`;

const RemoveDriverBtn = styled.button`
  border-radius: 20px;
  align-self: center;
  padding: 6px 16px;
  background-color: ${primaryBlue};
`;

const ValueDriverWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const ValueDriversLabel = styled(Value)`
  color: ${white};
`;

const OptionsContainer = styled(ValueDriverContainer)`
  border: none;
`;

const AddDriverBtn = styled(RemoveDriverBtn)`
  background-color: ${softGrey};
  border: none;
`;

const StyledIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 10px;
`;
