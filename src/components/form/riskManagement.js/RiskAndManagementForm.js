import { useState } from 'react';
import styled from 'styled-components/macro';
import { DottedLine, lightBlue, primaryText } from '../../ui/styles';
import { NotificationBtn } from '../../ui/button';
import { LoadingSpinner } from '../LoadingSpinner';

export const RiskAndManagementForm = ({ setIsEditing, setHasBeenEdited }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };
  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };
  const handleInput3 = (e) => {
    setInput3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setIsEditing(false);
      setHasBeenEdited(true);
    }, 2000);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Row>
          <StyledLabel>Trainings</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input1}
              name='input1'
              onChange={handleInput1}
              placeholder='10'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Investigations & litigations</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input2}
              name='input2'
              onChange={handleInput2}
              placeholder='25'
            />
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Audits</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input3}
              name='input2'
              onChange={handleInput3}
              placeholder='8'
            />
          </StyledInput>
        </Row>
        <ButtonWrapper>
          {!processing && (
            <>
              <NotificationBtn
                onClick={handleCancel}
                type='submit'
                label='Cancel'
                inverted
                fontWeight={500}
                width='209px'
                marginLeft={undefined}
              />
              <NotificationBtn
                type='submit'
                label='Process data'
                fontWeight={500}
                marginLeft={20}
                width='209px'
                onClick={undefined}
              />
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
