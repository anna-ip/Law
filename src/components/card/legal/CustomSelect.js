import React, { useState } from 'react';
import styled from 'styled-components/macro';
import {
  white,
  textBlack,
  primaryGrey,
  secondaryBackground,
  lightBlue,
  primaryText,
  primaryBlue,
} from '../../ui/styles';
import chevron from '../../../assets/images/chevron.svg';

export const CustomSelect = ({ data, handleChange, onChange }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  return (
    <Wrapper>
      <Container>
        <StyledButton
          type='button'
          onClick={toggleOption}
          isOptionOpen={isOptionOpen}
          selectedOption={selectedOption}
        >
          {data[selectedOption]}
          <StyledChevron
            src={chevron}
            alt='Chevron icon'
            isOptionOpen={isOptionOpen}
          />
        </StyledButton>
        <Options isOptionOpen={isOptionOpen} tabIndex={-1}>
          {data.map((option, index) => (
            <StyledList
              key={index}
              tabIndex={0}
              onClick={() => {
                setSelectedOption(index);
                onChange(option);
                setIsOptionOpen(false);
              }}
            >
              {option}
            </StyledList>
          ))}
        </Options>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 2px;
  border-radius: 10px;
  border: 1px solid ${lightBlue};
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: ${secondaryBackground};
  width: 100%;
  margin: 2px;
  padding: 14px 22px;
  position: relative;
  text-align: left;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  color: ${(props) =>
    props.selectedOption > 0 ? `${textBlack}` : ` ${primaryGrey}`};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;

  &:hover {
    cursor: pointer;
  }
  ::after {
    content: '';
    position: absolute;
    right: 6px;
    top: 4px;
  }
`;

const StyledChevron = styled.img`
  transform: ${(props) => (props.isOptionOpen ? '' : `rotate(180deg)`)};
`;

const Options = styled.ul`
  display: ${(props) => (props.isOptionOpen ? 'block' : 'none')};
  list-style: none;
  padding: 0;
  margin: 0 0 6px 0;
  border-top: ${(props) =>
    props.isOptionOpen ? `1px solid ${lightBlue}` : 'none'};
  border-radius: ${(props) => (props.isOptionOpen ? 0 : '10px')};
`;

const StyledList = styled.li`
  padding: 10px 10px 10px 24px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  color: ${primaryText};
  margin: 0;
  :active,
  :focus,
  &:hover {
    background: ${primaryBlue};
    color: ${white};
    cursor: pointer;
  }
`;
