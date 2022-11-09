import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';
import { primaryBlue } from '../../ui/styles';

interface BannerProps {
  radius?: number;
}

export const Banner = ({
  children,
  radius,
}: PropsWithChildren<BannerProps>) => {
  return <Updated radius={radius}>{children}</Updated>;
};

const Updated = styled.div<BannerProps>`
  display: flex;
  align-items: center;
  background-color: ${primaryBlue};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : `${5}px`)};
  padding: 12px 0 12px 20px;
`;
