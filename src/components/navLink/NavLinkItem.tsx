import {
  NavLink,
  useMatch,
  useResolvedPath,
  PathMatch,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  white,
  green,
  secondaryBackground,
  primaryBlue,
  primaryText,
} from '../ui/styles';

interface StyleProps {
  match: PathMatch<string> | null;
}

interface NavItemProps {
  to: string;
  label: string;
  icon: string;
}

export const NavLinkItem = ({ to, label, icon }: NavItemProps) => {
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

const StyledLink = styled(NavLink)<StyleProps>`
  text-decoration: none;
  color: ${(props) => (props.match ? `${white}` : `${primaryText}`)};
`;

const Wrapper = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 57px;
  background-color: ${(props) =>
    props.match ? `${primaryBlue}` : `${secondaryBackground}`};
`;

const Indicator = styled.div<StyleProps>`
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
