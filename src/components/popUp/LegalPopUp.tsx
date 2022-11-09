// import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Circle } from '../ui/circle';
import { primaryText, yellow } from '../ui/styles';
import exclamation from '../../assets/images/exclamation.svg';
import { ReactComponent as ChartOne } from '../../assets/images/chart-1.svg';
import { ReactComponent as ChartTwo } from '../../assets/images/chart-2.svg';
import { ReactComponent as ChartThree } from '../../assets/images/chart-3.svg';
import { Overlay } from './popUpComponents/Overlay';
import { PopUp } from './popUpComponents/PopUp';

interface LegalPopUpProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const LegalPopUp = ({ setIsOpen, isOpen }: LegalPopUpProps) => {
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'unset');
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => (document.body.style.overflow = 'unset');
  // }, []);

  return (
    <Overlay onClick={() => setIsOpen(false)}>
      <PopUp
        positionTop='310px'
        positionLeft='290px'
        positionRight='25%'
        width='800px'
        maxWidth='1000px'
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
            <ChartOne />
            <ChartTwo />
            <ChartThree />
          </ImageWrapper>
          <ImageInfo>
            *ACC Global Legal Department Benchmarking Report 2019 (pp. 8-9)
            management.
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
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  color: ${primaryText};
  margin: 0 0 8px 12px;
`;

const InfoWrapper = styled.div`
  width: 100%;
`;

const Info = styled.p`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  color: ${primaryText};
  margin: 0 0 33px 38px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ImageInfo = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  color: ${primaryText};
`;
