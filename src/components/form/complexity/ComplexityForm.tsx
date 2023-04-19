import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components/macro';
import { DottedLine, primaryText } from '../../ui/styles';
import { Button } from '../../ui/button';
import { LoadingSpinner } from '../LoadingSpinner';
import { TextInput } from '../../ui/inputs';
import {complexityData, complexityDataType} from '../../../data';

interface ComplexityFormProps {
  setIsEditing: (isEditing: boolean) => void;
  setHasBeenEdited: (hasBeenEdited: boolean) => void;
  setHasEditedLevels: (hasEditedLevels: boolean) => void;
  setData: (data: complexityDataType) => void;
}

export const ComplexityForm = ({
  setIsEditing,
  setHasBeenEdited,
  setHasEditedLevels,
  setData
}: ComplexityFormProps) => { 
  const [complexity, setComplexity] = useState<complexityDataType>({
    businessDivisions: '',
    countries: '',
    employees: '',
    responsibilities: '',
    strategic: '',
    legalSupport: '',
    regulated: ''
  });
  const [processing, setProcessing] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComplexity({ ...complexity, [event?.target.name]: event?.target.value });
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setData(complexity);
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setIsEditing(false);
      setHasBeenEdited(true);
      setHasEditedLevels(true);
    }, 2000);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Row>
          <StyledLabel>Business divisions</StyledLabel>
          <TextInput type='text' value={complexity.businessDivisions} name='businessDivisions' placeholder={complexityData.businessDivisions} onChange={handleChange} width='115px' padding='0' centerText pattern="[0-9]+" />
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Countries</StyledLabel>
          <TextInput type='text' value={complexity.countries} name='countries' placeholder={complexityData.countries} onChange={handleChange} width='115px' padding='0' centerText pattern="[0-9]+"/>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Employees</StyledLabel>
          <TextInput type='text' value={complexity.employees} name='employees' placeholder={complexityData.employees} onChange={handleChange} width='115px' padding='0' centerText pattern="[0-9]+"/>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Legal areas of responsibilities</StyledLabel>
          <TextInput type='text' value={complexity.responsibilities} name='responsibilities' placeholder={complexityData.responsibilities} onChange={handleChange}  width='115px' padding='0' centerText pattern="[0-9]+"/>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Strategic projects</StyledLabel>
          <TextInput type='text' value={complexity.strategic} name='strategic' placeholder={complexityData.strategic} onChange={handleChange} width='115px' padding='0' centerText pattern="[0-9]+"/>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>
            Level of structured legal support demand (in percentage)
          </StyledLabel>
          <TextInput type='text' value={complexity.legalSupport} name='legalSupport' placeholder={complexityData.legalSupport} onChange={handleChange} width='115px' padding='0' centerText pattern="[0-9]+"/>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Regulated, non regulated industry</StyledLabel>
          <TextInput type='text' value={complexity.regulated} name='regulated' placeholder={complexityData.regulated} onChange={handleChange}  width='115px' padding='0' centerText pattern="[0-9]+"/>
        </Row>
        <ButtonWrapper>
          {!processing && (
            <>
              <Button
                onClick={handleCancel}
                inverted
                fontWeight={500}
                width='209px'
              >
                Cancel
              </Button>
              <Button
                type='submit'
                fontWeight={500}
                marginLeft={20}
                width='209px'
              >
                Process data
              </Button>
            </>
          )}
          {processing && <LoadingSpinner />}
        </ButtonWrapper>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 20px 30px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: ${primaryText};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
`;
