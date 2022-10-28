import React, { useState } from 'react';
import styled from 'styled-components/macro';
import {
  white,
  softGrey,
  primaryGrey,
  secondaryBackground,
  lightBlue,
  primaryText,
  primaryBlue,
} from '../../ui/styles';
import close from '../../../assets/images/close.svg';
import plus from '../../../assets/images/circle-plus.svg';
import {
  valueDrivers,
  defaultDrivers,
  departmentList,
  activitieTable,
} from './data';
import { CustomSelect } from './CustomSelect';
import { NotificationBtn } from '../../ui/button';
import { AddCardLegalForm } from '../../form/legal/AddCardLegalForm';

export const AddCard = ({ setAddCard, addCard, setUpdateDepartments }) => {
  const [drivers, setDrivers] = useState([...defaultDrivers]);
  const [, setDepartment] = useState('');
  const [employee, setEmployee] = useState();
  const [newDepartment, setNewDepartment] = useState({
    department: '',
    employee: '',
    valueDrivers: drivers,
    table: activitieTable,
  });

  const addNewDrivers = (value) => {
    const newValue = [...drivers, value];
    setDrivers(newValue);
    setNewDepartment({ ...newDepartment, valueDrivers: newValue });
  };

  const removeDriver = (value) => {
    const newValue = drivers.filter((e) => e !== value);
    setDrivers(newValue);
    setNewDepartment({ ...newDepartment, valueDrivers: newValue });
  };

  const onChangeEmployee = (e) => {
    setEmployee(e.target.value);
    setNewDepartment({ ...newDepartment, employee: `${e.target.value}` });
  };

  const onChangeDepartment = (value) => {
    setDepartment(value);
    setNewDepartment({ ...newDepartment, department: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateDepartments((current) => [newDepartment, ...current]);

    setAddCard(false);
  };

  const handleCancel = () => {
    setAddCard(false);
  };

  return (
    <CardContainer>
      <TitleContainer>
        <TitleWrapper>
          <CardTitle>Add department</CardTitle>
        </TitleWrapper>
      </TitleContainer>
      <Line />
      <form onSubmit={handleSubmit}>
        <NewDepartmentContainer>
          <SelectTitle>Department type</SelectTitle>
          <CustomSelect
            data={departmentList}
            onChange={onChangeDepartment}
            label='Choose department name'
          />
        </NewDepartmentContainer>

        <EditEmployeeContainer>
          <SelectTitle>Employee</SelectTitle>
          <StyledInput>
            <Input
              type='text'
              name='employee'
              value={employee}
              onChange={onChangeEmployee}
              placeholder={0}
            />
            <Team>team member</Team>
          </StyledInput>
        </EditEmployeeContainer>

        <Title>Value drivers</Title>
        <ValueDriverContainer>
          {drivers?.map((value, index) => (
            <RemoveDriverBtn
              type='button'
              key={index}
              onClick={() => removeDriver(value)}
            >
              <ValueDriverWrapper>
                <ValueDriversLabel>{value}</ValueDriversLabel>
                <StyledIcon src={close} alt='Close icon' />
              </ValueDriverWrapper>
            </RemoveDriverBtn>
          ))}
        </ValueDriverContainer>

        <OptionsContainer>
          {valueDrivers.map((value, index) => (
            <AddDriverBtn
              type='button'
              key={index}
              onClick={() => addNewDrivers(value)}
            >
              <ValueDriverWrapper>
                <Value>{value}</Value>
                <StyledIcon src={plus} alt='Add icon' width='12px' />
              </ValueDriverWrapper>
            </AddDriverBtn>
          ))}
        </OptionsContainer>

        <AddCardLegalForm setIsEditing={setAddCard} addCard={addCard} />

        <ButtonContainer>
          <ButtonWrapper>
            <NotificationBtn
              onClick={handleCancel}
              label='Cancel'
              inverted
              fontWeight={500}
              width='209px'
            />
            <NotificationBtn
              type='submit'
              onClick={handleSubmit}
              label='Add department'
              fontWeight={500}
              width='209px'
              marginLeft={20}
            />
          </ButtonWrapper>
        </ButtonContainer>
      </form>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 20px;
  background-color: ${secondaryBackground};
  margin: 10px 10px 30px 0;
  padding: 40px 54px;
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
  font-size: 2rem;
  color: ${primaryText};
`;

const EditEmployeeContainer = styled.div`
  width: 211px;
  margin-top: 24px;
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

const NewDepartmentContainer = styled.div`
  margin-top: 24px;
`;

const SelectTitle = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: ${primaryText};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightBlue};
`;

const Title = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 20px;
  color: ${primaryText};
  margin-right: 100px;
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
  padding: 24px 21px;
  border: 1px solid ${primaryGrey};
  border-radius: 10px;
`;

const RemoveDriverBtn = styled.button`
  border-radius: 20px;
  align-self: center;
  padding: 6px 16px;
  background-color: ${primaryBlue};
  border: none;
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
`;

const StyledIcon = styled.img`
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-top: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
