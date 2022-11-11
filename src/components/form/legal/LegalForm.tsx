import React, { useState, Fragment, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components/macro';
import { darkRed, lightBlue, primaryText } from '../../ui/styles';
import { Button } from '../../ui/button';
import { Total, TotalHours, Hours } from '../../cards/legal/data';

interface LegalFormProps {
  setIsEditing: (isEditing: boolean) => void;
  formData: Array<TotalHours | Total | Hours>;
  setHasBeenEdited: (hasBeenEdited: boolean) => void;
}

export const LegalForm = ({
  setIsEditing,
  formData,
  setHasBeenEdited,
}: LegalFormProps) => {
  const [input] = useState();

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsEditing(false);

    setTimeout(() => {
      setIsEditing(false);
      setHasBeenEdited(true);
    }, 2000);
  };

  return (
    <Container>
      <HeaderWrapper>
        <Title>Standard activities time </Title>
      </HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <Table>
          {formData?.map((data: any, index: number) => (
            <Fragment key={`row-${index}`}>
              {data?.title && (
                <>
                  <Row>
                    <TitleWrapper>
                      <TableTitle>{data.title}</TableTitle>
                    </TitleWrapper>
                    {data.hours &&
                      data.hours.map(
                        (
                          time: {
                            total: number;
                            complex?: number;
                            routine?: number;
                          },
                          index: number
                        ) => (
                          <Fragment key={index}>
                            {time.complex && time.complex >= 0 ? (
                              <Cell>
                                <StyledLabel>Complex</StyledLabel>
                                <StyledInput>
                                  <Input
                                    placeholder={`${time.complex}`}
                                    value={input}
                                    name='complex'
                                    onChange={handleChange}
                                  />
                                  <Hour>hour</Hour>
                                </StyledInput>
                              </Cell>
                            ) : (
                              <Cell>
                                <StyledLabel>Total</StyledLabel>
                                <StyledInput>
                                  {time.total >= 0 && (
                                    <Input
                                      placeholder={`${time.total}`}
                                      value={input}
                                      name='total'
                                      onChange={handleChange}
                                    />
                                  )}
                                  <Hour>hour</Hour>
                                </StyledInput>
                              </Cell>
                            )}
                            {time.routine && time.routine >= 0 && (
                              <Cell>
                                <StyledLabel>Routine</StyledLabel>
                                <StyledInput>
                                  <Input
                                    placeholder={`${time.routine}`}
                                    value={input}
                                    name='routine'
                                    onChange={handleChange}
                                  />
                                  <Hour>hour</Hour>
                                </StyledInput>
                              </Cell>
                            )}
                          </Fragment>
                        )
                      )}
                  </Row>
                  <Line />
                </>
              )}
            </Fragment>
          ))}
        </Table>
        <ButtonContainer>
          <DeleteButton>Delete department</DeleteButton>
          <ButtonWrapper>
            <Button
              onClick={handleCancel}
              type='button'
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
              Save changes
            </Button>
          </ButtonWrapper>
        </ButtonContainer>
      </form>
    </Container>
  );
};

const Title = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 20px;
  color: ${primaryText};
  margin: 24px 0 40px 0;
`;

const Container = styled.div`
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
  width: 72%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Line = styled.div`
  border: 1px dashed ${lightBlue};
  margin: 16px 0;
  width: 100%;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  margin-right: 54px;
`;

const TableTitle = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  color: ${primaryText};
`;

const TitleWrapper = styled.div`
  min-width: 160px;
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
  height: 53px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  padding-right: 24px;
  margin: 8px 0 0 0;
  justify-content: space-between;
`;

const Input = styled.input`
  font-family: 'Inter';
  font-weight: 500;
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
  justify-content: space-between;
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
