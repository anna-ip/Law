import styled from 'styled-components';
import { Button } from '../../ui/button';
import { secondaryBackground, text } from '../../ui/styles';
import { Map } from './Map';

interface MapCardProps {
  onClick: () => void;
}

export const MapCard = ({ onClick }: MapCardProps) => {
  return (
    <Card>
      <Map />
      <TitleWrapper>
        <Title>Build your dashboard!</Title>
        <SubTitle>
          Complete the survey to start processing your data. The survey will
          take around 5 - 10 minutes to finish.
        </SubTitle>
      </TitleWrapper>
      <Button onClick={onClick} width='294px' fontWeight={500}>
        Take Survey
      </Button>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${secondaryBackground};
  border-radius: 20px;
  width: 100%;
  padding: 7% 0 4% 0;
  margin: 64px 0 0 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 10px 0;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 2rem;
  color: ${text};
  margin: 0;
`;

const SubTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  line-height: 20px;
  color: ${text};
`;
