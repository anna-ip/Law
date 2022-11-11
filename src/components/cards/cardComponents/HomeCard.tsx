import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';
import {
  yellow,
  secondaryBackground,
  primaryText,
  lightGrey,
} from '../../ui/styles';
import exclamation from '../../../assets/images/exclamation.svg';
import { Circle } from '../../ui/circle';

interface StyledCardProps {
  padding?: string;
  cardWidth?: number;
  justifyContent?: string;
  margin?: string;
  cardMaxWidth?: number;
  cardHeight?: string;
  cardMinHeight?: string;
}

interface StyledTitleContainerProps {
  alignCircle?: string;
  titlePadding?: string;
}

interface TitleWrapperProps {
  wrapWidth?: string;
}

interface HomeCardProps
  extends StyledCardProps,
    StyledTitleContainerProps,
    TitleWrapperProps {
  title: string;
  onClick?: () => void;
  hasLevels?: boolean;
  hasCircle?: boolean;
  hasTabs?: boolean;
  hasTitleWrap?: boolean;
  circleBackground?: string;
  icon?: string;
  iconSize?: number;
  circleSize?: number;
}

export const HomeCard = ({
  hasLevels = false,
  hasCircle = true,
  hasTabs = false,
  hasTitleWrap = false,
  wrapWidth = '70%',
  titlePadding,
  onClick,
  children,
  title,
  circleBackground = yellow,
  icon = exclamation,
  iconSize = 5,
  circleSize = 24,
  alignCircle,
  padding,
  cardWidth,
  cardMaxWidth,
  cardHeight,
  cardMinHeight,
  margin,
  justifyContent,
}: PropsWithChildren<HomeCardProps>) => {
  return (
    <CardContainer
      padding={padding}
      cardWidth={cardWidth}
      cardMaxWidth={cardMaxWidth}
      cardHeight={cardHeight}
      cardMinHeight={cardMinHeight}
      margin={margin}
      justifyContent={justifyContent}
    >
      <TitleContainer alignCircle={alignCircle} titlePadding={titlePadding}>
        {hasTitleWrap ? (
          <TitleWrapper wrapWidth={wrapWidth}>
            <CardTitle>{title}</CardTitle>
          </TitleWrapper>
        ) : (
          <CardTitle>{title}</CardTitle>
        )}
        {hasTabs && (
          <TabContainer>
            <ActiveTab>Contracts</ActiveTab>
            <TabText>Internal Process</TabText>
            <TabText>Litigation</TabText>
          </TabContainer>
        )}
        {hasCircle && (
          <Circle
            bg={circleBackground}
            icon={icon}
            size={circleSize}
            iconSize={iconSize}
          />
        )}
      </TitleContainer>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) =>
    props.padding ? `${props.padding}` : '27px 28px 36px 35px'};
  margin: ${(props) => (props.margin ? `${props.margin}` : 0)};
  border-radius: 20px;
  background-color: ${secondaryBackground};
  width: ${(props) => props.cardWidth};
  max-width: ${(props) => props.cardMaxWidth};
  min-height: ${(props) => props.cardMinHeight};
  height: ${(props) => props.cardHeight};

  :hover {
    box-shadow: 0 10px 30px rgb(15, 16, 41, 0.1);
  }
`;

const TitleContainer = styled.div<StyledTitleContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) =>
    props.alignCircle ? `${props.alignCircle}` : 'center'};
  justify-content: space-between;
  margin-bottom: 8px;
  padding: ${(props) => (props.titlePadding ? `${props.titlePadding}` : 0)};
`;

const TitleWrapper = styled.div<TitleWrapperProps>`
  width: ${(props) => props.wrapWidth};
`;

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 1.625rem;
  color: ${primaryText};
  margin: 0;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const ActiveTab = styled.p`
  font-size: 14px;
  color: ${primaryText};
`;

const TabText = styled(ActiveTab)`
  color: ${lightGrey};
`;
