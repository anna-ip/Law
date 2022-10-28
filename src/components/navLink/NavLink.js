import styled from 'styled-components/macro';
import { secondaryBackground } from '../ui/styles';
import { NavLinkItem } from './NavLinkItem';
import { PlaceholderItem } from './PlaceHolderItem';
import { ReactComponent as Logo } from '../../assets/images/logo-black.svg';
import house from '../../assets/images/house-icon.svg';
import chart from '../../assets/images/chart.svg';
import efficiency from '../../assets/images/efficiency.svg';
import project from '../../assets/images/project.svg';
import risk from '../../assets/images/risk.svg';
import spend from '../../assets/images/spend.svg';
import memo from '../../assets/images/memo-check.svg';
import dollar from '../../assets/images/circle-dollar.svg';
import { Link } from 'react-router-dom';

export const NavLink = () => {
  return (
    <SideBarContainer>
      <StyledLink to='/'>
        <Logo alt='Logo' width='53px' height='56px' />
      </StyledLink>
      <NavLinkItem to={'/home'} label='Home' icon={house} />
      <NavLinkItem to={'/spend'} label='Legal spending' icon={spend} />
      <NavLinkItem to={'/complexity'} label='Complexity Level' icon={memo} />
      <PlaceholderItem label='Spend overview' icon={dollar} />
      <NavLinkItem to={'/legal'} label='Legal operating...' icon={chart} />
      <NavLinkItem to={'/risk'} label='Risks and OPS' icon={risk} />
      <PlaceholderItem label='Project tracker' icon={project} />
      <PlaceholderItem label='Efficiency data' icon={efficiency} />
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 265px;
  min-height: 100vh;
  background-color: ${secondaryBackground};
  padding: 60px 0 0 0;
`;

const StyledLink = styled(Link)`
  margin: 0 0 75px 48px;
`;
