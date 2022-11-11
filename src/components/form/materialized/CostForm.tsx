import { useState } from 'react';
import styled from 'styled-components/macro';
import { DottedLine, lightBlue, text } from '../../ui/styles';
import { Button } from '../../ui/button';
import { LoadingSpinner } from '../LoadingSpinner';

interface CostFormProps {
  setIsEditing: (isEditing: boolean) => void;
  setHasBeenEdited: (hasBeenEdited: boolean) => void;
}

export const CostForm = ({ setIsEditing, setHasBeenEdited }: CostFormProps) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setInput1(value);
  };
  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
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
          <StyledLabel>Total materialized cost</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input1}
              name='input1'
              onChange={handleInput1}
              placeholder='450 800'
            />
            <Currency>€</Currency>
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Total materialized hypothetical cost</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input2}
              name='input2'
              onChange={handleInput2}
              placeholder='50 400 000'
            />
            <Currency>€</Currency>
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
                marginLeft={undefined}
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
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 182px;
  height: 43px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  margin-left: 10px;
  padding-right: 19px;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  text-align: end;
  color: ${text};
  border-style: none;
  ::placeholder {
    font-size: 16px;
    color: ${text};
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const Currency = styled.p`
  font-size: 16px;
  color: ${text};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
`;
