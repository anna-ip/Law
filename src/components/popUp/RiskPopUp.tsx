import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Circle } from '../ui/circle';
import { primaryText, yellow } from '../ui/styles';
import exclamation from '../../assets/images/exclamation.svg';
import { ReactComponent as Chart } from '../../assets/images/chart-risk.svg';

import { Overlay } from './popUpComponents/Overlay';
import { PopUp } from './popUpComponents/PopUp';

interface RiskPopUpProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const RiskPopUp = ({ setIsOpen }: RiskPopUpProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Overlay onClick={() => setIsOpen(false)}>
      <PopUp
        positionTop='310px'
        positionLeft='325px'
        positionRight='25%'
        width='500px'
      >
        <Container>
          <TitleContainer>
            <Circle bg={yellow} icon={exclamation} iconSize={3} size={24} />
            <Title>You have a medium risk & opportunities level.</Title>
          </TitleContainer>
          <InfoWrapper>
            <Info>
              Your spend level is outside the range required by the benchmark.
            </Info>
          </InfoWrapper>
          <ImageWrapper>
            <Chart />
          </ImageWrapper>
          <ImageInfo>
            *Based on a use case/client project, total revenue EMEA *5Bill,
            Triple digit MI lines for antitrust violation, 80MI annual claims
            under management.
          </ImageInfo>
        </Container>
      </PopUp>
    </Overlay>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${primaryText};
  margin: 0 0 8px 12px;
`;

const InfoWrapper = styled.div`
  width: 100%;
`;

const Info = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${primaryText};
  margin: 0 0 33px 38px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImageInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${primaryText};
`;
