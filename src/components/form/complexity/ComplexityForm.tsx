import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components/macro';
import { DottedLine, lightBlue, primaryText } from '../../ui/styles';
import { Button } from '../../ui/button';
import { LoadingSpinner } from '../LoadingSpinner';

interface ComplexityFormProps {
  setIsEditing: (isEditing: boolean) => void;
  setHasBeenEdited: (hasBeenEdited: boolean) => void;
  setHasEditedLevels: (hasEditedLevels: boolean) => void;
}

export const ComplexityForm = ({
  setIsEditing,
  setHasBeenEdited,
  setHasEditedLevels,
}: ComplexityFormProps) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleInput1 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };
  const handleInput2 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };
  const handleInput3 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput3(e.target.value);
  };
  const handleInput4 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput4(e.target.value);
  };
  const handleInput5 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput5(e.target.value);
  };
  const handleInput6 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput6(e.target.value);
  };
  const handleInput7 = (e: ChangeEvent<HTMLInputElement>) => {
    setInput7(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          <StyledInput>
            <Input
              type='text'
              value={input1}
              name='input1'
              onChange={handleInput1}
              placeholder='31'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Countries</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input2}
              name='input2'
              onChange={handleInput2}
              placeholder='14'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Employees</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input3}
              name='input2'
              onChange={handleInput3}
              placeholder='10 500'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Legal areas of responsibilities</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input4}
              name='input2'
              onChange={handleInput4}
              placeholder='16'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Strategic projects</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input5}
              name='input2'
              onChange={handleInput5}
              placeholder='28'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>
            Level of stractured legal support demand (in percentage)
          </StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input6}
              name='input2'
              onChange={handleInput6}
              placeholder='50'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Regulated, non regulated industry</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input7}
              name='input2'
              onChange={handleInput7}
              placeholder='3'
            />
          </StyledInput>
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
                onClick={handleSubmit}
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
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: ${primaryText};
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 43px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: ${primaryText};
  border-style: none;
  ::placeholder {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    color: ${primaryText};
    text-align: center;
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
`;
