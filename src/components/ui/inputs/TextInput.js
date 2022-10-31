import styled from 'styled-components';
import { lightBlue, primaryText, secondaryBackground } from '../styles';
import magnifier from '../../../assets/images/magnifier.svg';

export const TextInput = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  icon = magnifier,
  inputText,
}) => {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      {icon && <Icon src={icon} alt='Magnifier icon' />}
      <StyledInput>
        <Input
          type='text'
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {inputText && <InputText>{inputText}</InputText>}
      </StyledInput>

      <StyledInput type='text' />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${secondaryBackground};
  border-radius: 12px;
  border: 1px solid #dbdeeb;
  width: 100%; /* Todo adjust so its responsive! */
  height: 59px;
  padding: 0 5px;
  cursor: text;
`;

const StyledLabel = styled.label`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
`;

const Icon = styled.img`
  width: 19px;
  height: auto;
  margin-left: 10px;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 256px;
  height: 43px;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  padding: 10px 24px;
`;

const Input = styled.input`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  width: 50%;
  color: ${primaryText};
  border-style: none;
  padding: 0;
  ::placeholder {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 16px;
    color: ${primaryText};
    margin: 0;
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const InputText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${primaryText};
  margin: 0;
`;
