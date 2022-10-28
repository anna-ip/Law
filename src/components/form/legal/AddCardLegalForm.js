import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { darkRed, lightBlue, primaryText } from '../../ui/styles';
import { NotificationBtn } from '../../ui/button';

export const AddCardLegalForm = ({ setIsEditing, addCard }) => {
  const [input] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    console.log(name, value);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <StandardContainer>
      <HeaderWrapper>
        <Title>Standard activities time </Title>
      </HeaderWrapper>
      <Table>
        <Row>
          <TitleWrapper>
            <TableTitle>Contract</TableTitle>
          </TitleWrapper>
          <TableData>
            <StyledLabel>Complex</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
          <TableData>
            <StyledLabel>Routine</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
        </Row>
        <Line />
        <Row>
          <TitleWrapper>
            <TableTitle>Material Review</TableTitle>
          </TitleWrapper>
          <TableData>
            <StyledLabel>Total</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
        </Row>
        <Line />
        <Row>
          <TitleWrapper>
            <TableTitle>Advisory</TableTitle>
          </TitleWrapper>
          <TableData>
            <StyledLabel>Total</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
        </Row>
        <Line />
        <Row>
          <TitleWrapper>
            <TableTitle>Litigation</TableTitle>
          </TitleWrapper>
          <TableData>
            <StyledLabel>Complex</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
          <TableData>
            <StyledLabel>Routine</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
        </Row>
        <Line />
        <Row>
          <TitleWrapper>
            <TableTitle>Procedure</TableTitle>
          </TitleWrapper>
          <TableData>
            <StyledLabel>Complex</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
          <TableData>
            <StyledLabel>Routine</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
        </Row>
        <Line />
        <Row>
          <TitleWrapper>
            <TableTitle>Training</TableTitle>
          </TitleWrapper>
          <TableData>
            <StyledLabel>Total</StyledLabel>
            <StyledInput>
              <Input
                placeholder='0'
                value={input}
                name='input1'
                onChange={handleChange}
              />
              <Hour>hour</Hour>
            </StyledInput>
          </TableData>
        </Row>
      </Table>
      {!addCard && (
        <ButtonContainer>
          <DeleteButton>Delete department</DeleteButton>}
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
              label='Save changes'
              fontWeight={500}
              marginLeft={20}
              width='209px'
            />
          </ButtonWrapper>
        </ButtonContainer>
      )}
    </StandardContainer>
  );
};

const Title = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 20px;
  color: ${primaryText};
  margin: 24px 0 40px 0;
`;

const StandardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  width: 75%;
  border: 1px dashed ${lightBlue};
  margin: 16px 0;
`;

const TableTitle = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 1rem;
  color: ${primaryText};
`;

const TitleWrapper = styled.div`
  width: 150px;
  align-self: center;
`;

const TableData = styled.div`
  align-self: center;
`;

const StyledLabel = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  color: ${primaryText};
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 224px;
  height: 53px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  padding-right: 24px;
  margin: 8px 54px 0 0;
  justify-content: space-between;
`;

const Input = styled.input`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  color: ${primaryText};
  border-style: none;
  padding-left: 22px;
  text-align: start;
  ::placeholder {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    color: ${primaryText};
    text-align: start;
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const Hour = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: 'space-between';
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const DeleteButton = styled.p`
  color: ${darkRed};
  text-decoration: underline;
  cursor: pointer;
`;
