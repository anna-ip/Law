import { useState } from 'react';
import styled from 'styled-components/macro';
import { DottedLine, lightBlue, primaryText } from '../../ui/styles';
import { NotificationBtn } from '../../ui/button';
import { LoadingSpinner } from '../LoadingSpinner';

export const SpendLevelForm = ({ setIsEditing, setHasBeenEdited }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  const [input7, setInput7] = useState('');
  const [input8, setInput8] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleInput1 = (e) => {
    const value = e.target.value;
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setInput1(value);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInput3 = (e) => {
    setInput3(e.target.value);
  };

  const handleInput4 = (e) => {
    setInput4(e.target.value);
  };

  const handleInput5 = (e) => {
    const value = e.target.value;
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setInput5(value);
  };

  const handleInput6 = (e) => {
    setInput6(e.target.value);
  };

  const handleInput7 = (e) => {
    setInput7(e.target.value);
  };

  const handleInput8 = (e) => {
    setInput8(e.target.value);
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
          <StyledLabel>Legal spending per region</StyledLabel>
        </Row>
        <RegionRow>
          <StyledLabel>North America</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input1}
              name='input1'
              onChange={handleInput1}
              placeholder='564 222'
            />
            <Currency>€</Currency>
          </StyledInput>
        </RegionRow>
        <DottedLine />
        <RegionRow>
          <StyledLabel>Latin America</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input2}
              name='input2'
              onChange={handleInput2}
              placeholder='679 345'
            />
            <Currency>€</Currency>
          </StyledInput>
        </RegionRow>
        <DottedLine />
        <RegionRow>
          <StyledLabel>EMEA</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input3}
              name='input3'
              onChange={handleInput3}
              placeholder='679 345'
            />
            <Currency>€</Currency>
          </StyledInput>
        </RegionRow>
        <DottedLine />
        <RegionRow>
          <StyledLabel>Asia Pacific</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input4}
              name='input4'
              onChange={handleInput4}
              placeholder='765 300'
            />
            <Currency>€</Currency>
          </StyledInput>
        </RegionRow>
        <DottedLine />
        <Row>
          <StyledLabel>Total legal spending</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input5}
              name='input5'
              onChange={handleInput5}
              placeholder='2 646 844'
            />
            <Currency>€</Currency>
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Total outside counsel spending</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input6}
              name='input6'
              onChange={handleInput6}
              placeholder='120 800'
            />
            <Currency>€</Currency>
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Total inside counsel spending</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input7}
              name='input7'
              onChange={handleInput7}
              placeholder='2 119 294'
            />
            <Currency>€</Currency>
          </StyledInput>
        </Row>
        <DottedLine />
        <Row>
          <StyledLabel>Cost efficiency program</StyledLabel>
          <StyledInput>
            <Input
              type='text'
              value={input8}
              name='input8'
              onChange={handleInput8}
              placeholder='2 200 00'
            />
            <Currency>€</Currency>
          </StyledInput>
        </Row>
        <ButtonWrapper>
          {!processing && (
            <>
              <NotificationBtn
                onClick={handleCancel}
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
  padding: 0 0 32px 0;
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

const RegionRow = styled(Row)`
  padding: 20px 0px 20px 60px;
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
  width: 182px;
  height: 43px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  margin-left: 10px;
  padding-right: 19px;
`;

const Input = styled.input`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  text-align: end;
  color: ${primaryText};
  border-style: none;
  ::placeholder {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    color: ${primaryText};
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const Currency = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
`;
