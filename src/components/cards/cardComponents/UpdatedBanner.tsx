import React from 'react';
import styled from 'styled-components/macro';
import { white } from '../../ui/styles';
import { Banner } from './index';

export const UpdatedBanner = () => {
  return (
    <Banner>
      <UpdatedText>Data is updated.</UpdatedText>
    </Banner>
  );
};

const UpdatedText = styled.p`
  font-size: 16px;
  color: ${white};
  margin: 0;
`;
