import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { lines, primaryText, softGrey } from '../ui/styles';
import { ReactComponent as Globe } from '../../assets/images/globe.svg';
import { departments } from './data';

interface RegionProps {
  region: string;
  setRegion: (region: string) => void;
}

export const Region = ({ setRegion, region }: RegionProps) => {
  return (
    <InfoContainer
      key={region}
      initial={{ opacity: 0, y: 200 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: 'ease-in', duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <HeaderContainer>
        <HeaderWrapper>
          <Globe width='40px' height='40px' />
          <InfoTitle>{region}</InfoTitle>
        </HeaderWrapper>
        <ClearMapButton onClick={() => setRegion('')}>Clear map</ClearMapButton>
      </HeaderContainer>
      <DottedFrame>
        <CardContainer>
          {departments.map((info, index) => (
            <Card key={`region ${index}`}>
              <img
                src={info.icon}
                alt={info.title}
                width='24px'
                height='24px'
              />
              <CardTitle>{info.title}</CardTitle>
            </Card>
          ))}
        </CardContainer>
      </DottedFrame>
    </InfoContainer>
  );
};

const InfoContainer = styled(motion.div)`
  padding: 0 180px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoTitle = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 2.5rem;
  color: ${primaryText};
  margin: 0 0 0 8px;
`;

const ClearMapButton = styled.button`
  border: none;
  text-decoration: underline;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 1rem;
  background-color: transparent;
  color: ${primaryText};
  margin: 0;
`;

const DottedFrame = styled.div`
  border: 2px dashed ${lines};
  border-radius: 12px;
  padding: 31px 20px 20px 20px;
  margin-bottom: 22px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 260px;
  height: 80px;
  border-radius: 10px;
  padding-left: 24px;
  background-color: ${softGrey};
`;

const CardTitle = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  margin-left: 10px;
  color: ${primaryText};
`;
