import styled from 'styled-components/macro';
import { lines, primaryText, secondaryBackground } from '../../ui/styles';
import { ReactComponent as Icon } from '../../../assets/images/bulls-eye.svg';

export const InfoCard = ({ numbers, infoText }) => {
  return (
    <CardWrapper>
      <RoundBorder>
        <Icon />
      </RoundBorder>
      <InfoBox>
        <Percentage>{numbers}</Percentage>
        <PercentageInfo>{infoText}</PercentageInfo>
      </InfoBox>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 144px;
  margin: 56px 0 40px 0;
`;

const RoundBorder = styled.div`
  display: flex;
  position: absolute;
  top: 146px;
  left: 160px;
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
