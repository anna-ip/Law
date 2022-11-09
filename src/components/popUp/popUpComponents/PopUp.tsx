import { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';
import { secondaryBackground, white } from '../../ui/styles';
import { ReactComponent as CloseIcon } from '../../../assets/images/close-grey.svg';

interface PopUpProps {
  positionTop?: string;
  positionLeft?: string;
  positionRight?: string;
  width?: string;
  maxWidth?: string;
  arrowPosition?: string;
  topArrow?: boolean;
}

export const PopUp = ({
  children,
  positionTop,
  positionLeft,
  positionRight,
  width,
  maxWidth,
  arrowPosition,
  topArrow = true,
}: PropsWithChildren<PopUpProps>) => {
  return (
    <Container
      positionTop={positionTop}
      positionLeft={positionLeft}
      positionRight={positionRight}
      width={width}
      maxWidth={maxWidth}
    >
      {topArrow ? (
        <TooltipArrow arrowPosition={arrowPosition} />
      ) : (
        <SideTooltipArrow />
      )}
      <IconWrapper>
        <CloseIcon />
      </IconWrapper>
      <>{children}</>
    </Container>
  );
};

const Container = styled.div<PopUpProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => props.positionTop};
  ${(props) =>
    props.positionLeft && {
      left: props.positionLeft,
    }};
  ${(props) =>
    props.positionRight && {
      right: props.positionRight,
    }};
  background-color: ${secondaryBackground};
  width: ${(props) => (props.width ? `${props.width}` : `${38}%`)};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}` : `${592}px`)};
  border-radius: 20px;
  align-items: center;
  padding: 15px;
`;

const TooltipArrow = styled.div<PopUpProps>`
  display: block;
  position: absolute;
  top: -30px;
  left: ${(props) =>
    props.arrowPosition ? `${props.arrowPosition}` : `${12}%`};
  border: 15px solid ${white};
  border-color: transparent transparent ${white} transparent;
`;

const SideTooltipArrow = styled(TooltipArrow)`
  top: 45%;
  left: 630px;
  border-color: transparent transparent transparent ${white};
`;

const IconWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  cursor: pointer;
`;
