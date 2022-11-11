import styled from 'styled-components/macro';
import { lightBlue, primaryText } from '../styles';
import magnifier from '../../../assets/images/magnifier.svg';

type IconStyle = magnifier;
type InputType = 'text' | 'password' | 'email';

interface TextInputProps {
  type: InputType;
  label?: string;
  id?: string | number;
  name?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconStyle;
  inputText?: ReactNode;
  padding?: string;
  margin?: String;
  labelMargin?: string;
}

export const TextInput = ({
  type,
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  icon,
  inputText,
  padding,
  margin,
  labelMargin,
}: TextInputProps) => {
  return (
    <InputContainer margin={margin}>
      {label && (
        <StyledLabel htmlFor={id} labelMargin={labelMargin}>
          {label}
        </StyledLabel>
      )}
      <StyledInput padding={padding}>
        {icon && <Icon src={icon} alt='Magnifier icon' />}
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {inputText && <InputText>{inputText}</InputText>}
      </StyledInput>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin: ${(props) => `${props.margin}`};
`;

const StyledLabel = styled.label`
  font-size: 16px;
  color: ${primaryText};
  margin: ${(props) => (props.labelMargin ? `${props.labelMargin}` : 0)};
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
  padding: ${(props) => (props.padding ? `${props.padding}` : '10px 24px')};
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  color: ${primaryText};
  border-style: none;
  padding: 0;
  ::placeholder {
    font-size: 1rem;
    color: ${primaryText};
    margin: 0;
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const InputText = styled.p`
  font-size: 16px;
  color: ${primaryText};
  margin: 0;
`;
