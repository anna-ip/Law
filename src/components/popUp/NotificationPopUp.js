import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Overlay } from './popUpComponents/Overlay';
import { PopUp } from './popUpComponents/PopUp';
import pen from '../../assets/images/pen-field.svg';
import { Button } from '../ui/button';
import { primaryText } from '../ui/styles';

export const NotificationPopUp = ({ setIsModalOpen }) => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/onboarding/1');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <Overlay onClick={() => setIsModalOpen(false)}>
      <PopUp
        positionTop='150px'
        positionRight='119px'
        width='297px'
        arrowPosition='70%'
      >
        <Container>
          <TitleContainer>
            <img src={pen} alt='Pen icon' />
            <Title>New survey available!</Title>
          </TitleContainer>
          <InfoWrapper>
            <Info>
              Update your current data calculation by completing the survey.
            </Info>
          </InfoWrapper>
          <ButtonWrapper>
            <Button onClick={handleNavigate}>Take survey</Button>
          </ButtonWrapper>
        </Container>
      </PopUp>
    </Overlay>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Title = styled.p`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 1.125rem;
  color: ${primaryText};
  margin: 0 0 0 8px;
`;

const InfoWrapper = styled.div`
  text-align: center;
  padding: 0 20px;
`;

const Info = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1rem;
  color: ${primaryText};
  margin: 10px 0 10px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
