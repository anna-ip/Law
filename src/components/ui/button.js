import styled from 'styled-components/macro';
import { white, text, black, softBlack, secondaryBackground } from './styles';
import logo from '../../assets/images/google.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/images/Arrow 1.svg';

export const OnboardingButton = ({ to }) => {
  return (
    <NextButton to={to}>
      <Arrow alt='Arrow Icon' width='89px' />
    </NextButton>
  );
};

const NextButton = styled(Link)`
  display: flex;
  background-color: ${black};
  width: 150px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  align-self: end;
  margin-top: 15px;
`;

export const NotificationBtn = ({
  label,
  onClick,
  inverted = false,
  fontWeight,
  marginLeft,
  width,
  type = 'button',
}) => {
  return (
    <NotificationButton
      onClick={onClick}
      inverted={inverted}
      marginLeft={marginLeft}
      width={width}
      type={type}
    >
      <NotificationLabel fontWeight={fontWeight} inverted={inverted}>
        {label}
      </NotificationLabel>
    </NotificationButton>
  );
};

const NotificationButton = styled.button`
  display: flex;
  background-color: ${(props) => (props.inverted ? `${white}` : `${black}`)};
  width: ${(props) => (props.width ? `${props.width}` : `${150}px`)};
  height: 60px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  ${(props) =>
    props.marginLeft && {
      marginLeft: `${props.marginLeft}px`,
    }}
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const NotificationLabel = styled.p`
  font-family: 'Poppins';
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 700)};
  font-size: 16px;
  color: ${(props) => (props.inverted ? `${black}` : `${white}`)};
`;

export const GetStartedLink = ({ label, to }) => {
  return <GetStartedButton to={to}>{label}</GetStartedButton>;
};

const GetStartedButton = styled(NextButton)`
  border-radius: 50px;
  color: ${white};
  text-decoration: none;
  height: 60px;
  width: 180px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

export const StyledButton = ({
  onClick,
  label,
  backgroundcolor,
  color,
  width,
  type = 'button',
}) => {
  return (
    <StyledBtn
      type={type}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      color={color}
      width={width}
    >
      {label}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  display: flex;
  background-color: ${(props) =>
    props.backgroundcolor ? `${props.backgroundcolor}` : `${black}`};
  color: ${(props) => (props.color ? `${props.color}` : `${white}`)};
  height: 60px;
  width: ${(props) => (props.width ? `${props.width}px` : `${294}px`)};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 15px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const LinkButton = ({ to, label, backgroundcolor, color, width }) => {
  return (
    <StyledLinkBtn
      to={to}
      backgroundcolor={backgroundcolor}
      color={color}
      width={width}
    >
      {label}
    </StyledLinkBtn>
  );
};

const StyledLinkBtn = styled(Link)`
  display: flex;
  background-color: ${(props) =>
    props.backgroundcolor ? `${props.backgroundcolor}` : `${black}`};
  color: ${(props) => (props.color ? `${props.color}` : `${white}`)};
  height: 60px;
  width: ${(props) => (props.width ? `${props.width}px` : `${294}px`)};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 15px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const GoogleButton = ({ to }) => {
  return (
    <StyledGoogleButton to={to}>
      <LabelContainer>
        <img
          src={logo}
          alt='Google logo'
          style={{ height: '18px', width: 'auto', marginRight: '8px' }}
        />
        <Label>Sign In with Google</Label>
      </LabelContainer>
    </StyledGoogleButton>
  );
};

const StyledGoogleButton = styled(StyledLinkBtn)`
  background-color: ${secondaryBackground};
  width: 294px;
  height: 56px;
  border: 2px solid ${softBlack};
  color: ${text};
  margin-top: 10px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  white-space: nowrap;
`;
