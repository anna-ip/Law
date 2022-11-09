import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { LegalBanner } from '../cardComponents/LegalBanner';
import plus from '../../../assets/images/circle-plus.svg';
import { LegalCard } from './LegalCard';
import { AddCard } from './AddCard';
import { departmentData } from './data';
import { primaryText } from '../../ui/styles';

export const LegalCardGroup = () => {
  const [addCard, setAddCard] = useState(false);
  const [departments, setUpdateDepartments] = useState([...departmentData]);
  const hours = 56285;

  const totalOfEmployees = departments.reduce((previousValue, currentValue) => {
    return previousValue + Number(currentValue.employee);
  }, 0);

  console.log(typeof totalOfEmployees);

  return (
    <>
      <AddDepartment>
        <img src={plus} alt='Add department icon' />
        <AddButton onClick={() => setAddCard(true)}>Add Department</AddButton>
      </AddDepartment>
      <BannerWrapper>
        <LegalBanner
          employee={totalOfEmployees}
          hours={hours.toLocaleString()}
        />
      </BannerWrapper>

      {addCard && (
        <AddCard
          setAddCard={setAddCard}
          addCard={addCard}
          setUpdateDepartments={setUpdateDepartments}
        />
      )}
      {departments.map((data, index) => (
        <LegalCard key={index} data={data} />
      ))}
    </>
  );
};

const AddDepartment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 0px 0 10px 0;
`;

const AddButton = styled.button`
  border-style: none;
  background-color: transparent;
  text-decoration: underline;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
  cursor: pointer;
`;

const BannerWrapper = styled.div`
  margin-bottom: 40px;
`;
