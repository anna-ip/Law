import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  white,
  green,
  secondaryBackground,
  primaryBlue,
  primaryText,
} from '../ui/styles';

export const NavLinkItem = ({ to, label, icon }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <StyledLink to={to} match={match}>
      <Wrapper match={match}>
        <Indicator match={match} />
        <Icon src={icon} width='24px' height='24px' />
        <Label>{label}</Label>
      </Wrapper>
    </StyledLink>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => (props.match ? `${white}` : `${primaryText}`)};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 57px;
  background-color: ${(props) =>
    props.match ? `${primaryBlue}` : `${secondaryBackground}`};
`;

const Indicator = styled.div`
  width: 4px;
  height: 57px;
  background-color: ${(props) =>
    props.match ? `${green}` : `${secondaryBackground}`};
`;

const Icon = styled.img`
  margin-left: 32px;
`;

const Label = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  margin-left: 23px;
`;
