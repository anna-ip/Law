import styled from 'styled-components/macro';
import { primaryText, secondaryBackground } from '../ui/styles';

interface PlaceholderProps {
  label: string;
  icon: string;
}

export const PlaceholderItem = ({ label, icon }: PlaceholderProps) => {
  return (
    <StyledLink>
      <Wrapper>
        <Indicator />
        <Icon src={icon} width='24px' height='24px' />
        <Label>{label}</Label>
      </Wrapper>
    </StyledLink>
  );
};

const StyledLink = styled.div`
  text-decoration: none;
  color: ${primaryText};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 57px;
  background-color: ${secondaryBackground};
`;

const Indicator = styled.div`
  width: 4px;
  height: 57px;
  background-color: ${secondaryBackground};
`;

const Icon = styled.img`
  margin-left: 32px;
`;

const Label = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  margin-left: 23px;
`;
