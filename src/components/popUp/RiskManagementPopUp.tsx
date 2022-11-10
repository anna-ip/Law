import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Circle } from '../ui/circle';
import exclamation from '../../assets/images/exclamation.svg';
import { Overlay } from './popUpComponents/Overlay';
import { PopUp } from './popUpComponents/PopUp';
import { lines, primaryText, secondaryBackground, yellow } from '../ui/styles';
import { ReactComponent as Icon } from '../../assets/images/bulls-eye.svg';

interface PopUpProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const RiskManagementPopUp = ({ setIsOpen }: PopUpProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Overlay onClick={() => setIsOpen(false)}>
      <PopUp
        positionTop='300px'
        positionRight='44%'
        width='600px'
        maxWidth='1000px'
        topArrow={false}
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
          <CardContainer>
            <CardWrapper>
              <RoundBorder>
                <Icon />
              </RoundBorder>
              <InfoBox>
                <Percentage>5</Percentage>
                <Sessions>sessions</Sessions>
                <PercentageInfo>minimum number of trainings.</PercentageInfo>
              </InfoBox>
            </CardWrapper>
            <CardWrapper>
              <RoundBorder>
                <Icon />
              </RoundBorder>
              <InfoBox>
                <Percentage>100</Percentage>
                <Sessions>sessions</Sessions>
                <PercentageInfo>
                  minimum number of investigations & litigations.
                </PercentageInfo>
              </InfoBox>
            </CardWrapper>
            <CardWrapper>
              <RoundBorder>
                <Icon />
              </RoundBorder>
              <InfoBox>
                <Percentage>5</Percentage>
                <Sessions>sessions</Sessions>
                <PercentageInfo>
                  minimum number of audits performed.
                </PercentageInfo>
              </InfoBox>
            </CardWrapper>
          </CardContainer>
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

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

const ImageInfo = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  color: ${primaryText};
`;

const CardWrapper = styled.div`
  position: relative;
  width: 144px;
  margin: 25px 0 20px 0;
`;

const RoundBorder = styled.div`
  display: flex;
  position: absolute;
  top: -33px;
  left: 15px;
  border: 1px solid ${lines};
  width: 63px;
  height: 63px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${secondaryBackground};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 155px;
  max-width: 144px;
  padding: 30px 20px 0 20px;
  border: 1px solid ${lines};
  border-radius: 10px;
`;

const Percentage = styled.h1`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 2.25rem;
  margin: 0;
  line-height: 46.81px;
  color: ${primaryText};
`;

const Sessions = styled.p`
  font-family: 'Inter';
  font-style: Italic;
  font-weight: 400;
  font-size: 0.75rem;
  color: ${primaryText};
  margin: 0;
`;

const PercentageInfo = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 0.875rem;
  margin: 9px 0 0 0;
  color: ${primaryText};
`;
