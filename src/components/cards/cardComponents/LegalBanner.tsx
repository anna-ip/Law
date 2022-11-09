import React from 'react';
import styled from 'styled-components/macro';
import { Circle } from '../../ui/circle';
import { Banner } from './index';
import { green, white } from '../../ui/styles';
import check from '../../../assets/images/check.svg';
import clock from '../../../assets/images/clock.svg';
import user from '../../../assets/images/user.svg';

interface LegalBannerProps {
  employee: number;
  hours: string;
}

export const LegalBanner = ({ employee, hours }: LegalBannerProps) => {
  return (
    <Banner radius={20}>
      <Container>
        <LeftContainer>
          <Circle bg={green} icon={check} size={36} />
          <BannerTitle>Overall</BannerTitle>
        </LeftContainer>
        <RightContainer>
          <img src={clock} alt='Icon' />
          <TotalText>Total activities</TotalText>
          <TotalHours>{hours} h</TotalHours>
          <img src={user} alt='Icon' />
          <NumberEmployee>{employee}</NumberEmployee>
          <Employee>employee</Employee>
        </RightContainer>
      </Container>
    </Banner>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 20px 4px 0;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const BannerTitle = styled.p`
  font-family: 'Poppins';
  font-size: 32px;
  font-weight: 500;
  color: ${white};
  margin: 0 0 0 18px;
`;

const TotalText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  color: ${white};
  margin: 0 14px 0 6px;
`;

const TotalHours = styled(TotalText)`
  color: ${green};
  margin: 0 49px 0 0;
`;

const NumberEmployee = styled(TotalText)`
  margin: 0 4px 0 12px;
`;

const Employee = styled(TotalText)`
  margin: 0;
`;
