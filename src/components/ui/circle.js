import styled from 'styled-components/macro';
import { softBlack } from './styles';

interface CircleProps {
  text?: string;
  textSize?: number;
  icon?: string;
  iconSize?: number;
  altText?: string;
  size?: number;
  bg?: string;
}

export const Circle = ({
  text,
  textSize,
  icon,
  iconSize,
  bg,
  size,
  altText,
}: CircleProps) => {
  return (
    <CircleContainer bg={bg} size={size}>
      {text && <CircleText textSize={textSize}>{text}</CircleText>}
      {icon && <img src={icon} alt={altText} width={iconSize} height='auto' />}
    </CircleContainer>
  );
};

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size ? `${props.size}px` : '40px')};
  height: ${(props) => (props.size ? `${props.size}px` : '40px')};
  border-radius: 50%;
  background-color: ${(props) => (props.bg ? `${props.bg}` : `${softBlack}`)};
`;

const CircleText = styled.p`
  color: #ffffff;
  font-size: ${(props) => (props.textSize ? `${props.textSize}px` : `${16}px`)};
  font-family: 'Poppins';
  font-weight: 500;
`;
