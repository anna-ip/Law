import React, { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import logo from '../../assets/images/google.png';
import { Link, LinkProps } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/images/Arrow 1.svg';

interface LinkButtonProps extends LinkProps {
  backgroundcolor?: string;
  width?: number | string;
  color?: string;
}

export const LinkButton = ({
  to,
  children,
  backgroundcolor,
  width,
  color,
}: PropsWithChildren<LinkButtonProps>) => {
  return (
    <StyledLink
      to={to}
      backgroundcolor={backgroundcolor}
      width={width}
      color={color}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<LinkButtonProps>`
  display: flex;
  background-color: ${(props) =>
    props.backgroundcolor
      ? `${props.backgroundcolor}`
      : `${props.theme.colors.primaryBlue}`};
  width: ${(props) => (props.width ? `${props.width}px` : '150px')};
  padding: 12px;
  min-width: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  align-self: end;
  margin-top: 15px;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1.25rem;
  color: ${(props) =>
    props.color ? `${props.color}` : `${props.theme.colors.white}`};
  text-decoration: none;
  cursor: pointer;
`;

export const OnboardingLink = (props: Pick<LinkProps, 'to' | 'onClick'>) => {
  return (
    <LinkButton {...props}>
      <Arrow width='89px' />
    </LinkButton>
  );
};

interface GoogleButtonProps {
  to: string;
}

export const GoogleButton = ({ to }: GoogleButtonProps) => {
  return (
    <StyledGoogleButton to={to}>
      <LabelContainer>
        <StyledLogo src={logo} alt='Google logo' />
        <Label>Sign in with Google</Label>
      </LabelContainer>
    </StyledGoogleButton>
  );
};

const StyledGoogleButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  width: 294px;
  height: 56px;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.primaryText};
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 18px;
  width: auto;
  margin-right: 8px;
`;

const Label = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  white-space: nowrap;
`;

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonLabelProps {
  fontWeight?: number;
  fontSize?: string;
  inverted?: boolean;
}

interface ButtonProps extends ButtonLabelProps {
  type?: ButtonType;
  onClick?: (e: SyntheticEvent) => void;
  width?: string;
  marginLeft?: number;
}

export const Button = ({
  type = 'button',
  onClick,
  children,
  inverted = false,
  width,
  marginLeft,
  fontWeight,
  fontSize,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      inverted={inverted}
      width={width}
      marginLeft={marginLeft}
    >
      <StyledLabel
        inverted={inverted}
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {children}
      </StyledLabel>
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  background-color: ${(props) =>
    props.inverted
      ? `${props.theme.colors.white}`
      : `${props.theme.colors.primaryBlue}`};
  width: ${(props) => (props.width ? `${props.width}` : '150px')};
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLabel = styled.p<ButtonLabelProps>`
  font-family: ${(props) => props.theme.fonts[1]};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 700)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '1rem')};
  color: ${(props) =>
    props.inverted
      ? `${props.theme.colors.primaryBlue}`
      : `${props.theme.colors.white}`};
  text-decoration: none;
`;
