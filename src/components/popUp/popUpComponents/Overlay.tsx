import styled from 'styled-components/macro';
import { PropsWithChildren } from 'react';

interface OverlayProps {
  onClick?: () => void;
}

export const Overlay = ({
  children,
  onClick,
}: PropsWithChildren<OverlayProps>) => {
  return <StyledOverLay onClick={onClick}>{children}</StyledOverLay>;
};

const StyledOverLay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;
