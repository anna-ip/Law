import { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Circle } from '../ui/circle';
import { lines, primaryText, secondaryBackground, yellow } from '../ui/styles';
import exclamation from '../../assets/images/exclamation.svg';
import { ReactComponent as Icon } from '../../assets/images/bulls-eye.svg';

import { Overlay } from './popUpComponents/Overlay';
import { PopUp } from './popUpComponents/PopUp';

export const MaterializedPopUp = ({ setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <Overlay onClick={() => setIsOpen(false)}>
      <PopUp positionTop='292px' positionRight='8%' width='500px'>
        <Container>
          <TitleContainer>
            <Circle bg={yellow} icon={exclamation} iconSize={3} size={24} />
            <Title>You have a medium materialized cost level.</Title>
          </TitleContainer>
          <InfoWrapper>
            <Info>
              Your spend level is outside the range required by the benchmark.
            </Info>
          </InfoWrapper>
          <CardWrapper>
            <RoundBorder>
              <Icon />
            </RoundBorder>
            <InfoBox>
              <Percentage>2.5%</Percentage>
              <PercentageInfo>
                minimum percentage of total revenue
              </PercentageInfo>
            </InfoBox>
          </CardWrapper>
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
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  color: ${primaryText};
  margin: 0 0 8px 12px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 26px;
`;

const Info = styled.p`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  color: ${primaryText};
  margin: 0 0 33px 38px;
`;

const CardWrapper = styled.div`
  width: 144px;
  margin: 56px 0 40px 0;
`;

const RoundBorder = styled.div`
  display: flex;
  position: absolute;
  top: 146px;
  left: 50px;
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
  padding: 36px 20px;
  border: 1px solid ${lines};
  border-radius: 10px;
  justify-content: center;
`;

const Percentage = styled.h1`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 2.25rem;
  margin: 0;
  line-height: 46.81px;
  color: ${primaryText};
`;

const PercentageInfo = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 0.875rem;
  margin: 4px 0 0 0;
  color: ${primaryText};
`;

const ImageInfo = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  color: ${primaryText};
`;
