import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components/macro';
import { RadioButton } from '../ui/radiobutton';
import { H1, lightBlue, primaryText } from '../ui/styles';

interface SurveyProps {
  survey: any;
  index: number;
}

export const Survey = ({ survey, index }: SurveyProps) => {
  const [isSelected, setIsSelected] = useState(survey.answer[0].label);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.value);
  };

  // const hasTextArea = survey.answer.some(
  //   (value: { id: number; label: string }) => value.label === 'Other'
  // );
  const selected = isSelected === 'Other';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <TextWrapper>
        <H1>{survey.question}</H1>
        {survey.explanation && <Explanation>{survey.explanation}</Explanation>}
      </TextWrapper>
      <Wrapper>
        {survey.answer.map(
          (a: { id: string; label: string }, index: number) => (
            <RadioButton
              key={`radio-button-${index}`}
              name={`radio-button-${index}`}
              label={a.label}
              id={a.id}
              value={a.label}
              onChange={handleChange}
              checked={isSelected === `${a.label}`}
            />
          )
        )}
      </Wrapper>
      {survey.answer.map(
        (option: { id: string; label: string }, index: number) =>
          option.label === 'Other' &&
          selected && (
            <StyledTextArea
              key={index}
              placeholder='Describe...'
            ></StyledTextArea>
          )
      )}
    </Container>
  );
};
const Container = styled.form`
  height: 100%;
`;

const TextWrapper = styled.div`
  min-height: 100px;
`;

const Explanation = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 18px;
  color: ${primaryText};
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 150px;
  max-height: 195px;
  margin-top: 15px;
`;

const StyledTextArea = styled.textarea`
  border-color: ${lightBlue};
  border-radius: 12px;
  border-style: solid;
  width: 90%;
  height: 50px;
  padding: 30px;
  font-family: 'Inter';
  font-size: 1rem;
  resize: none;
  margin-top: 10px;
`;
