import styled from 'styled-components';
import { secondaryBackground } from './styles';
import magnifier from '../../assets/images/magnifier.svg';

const InputField = () => {
  return (
    <InputContainer>
      <Icon src={magnifier} alt='Magnifier icon' />
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

const Icon = styled.img`
  width: 19px;
  height: auto;
  margin-left: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  border-color: none;
  border-style: none;
  font-size: 24px;
  margin-left: 5px;
  &:focus {
    outline: none;
    border-color: transparent;
  }
`;

export default InputField;
