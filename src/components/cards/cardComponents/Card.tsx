import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';
import {
  yellow,
  lines,
  secondaryBackground,
  lightGrey,
  primaryText,
} from '../../ui/styles';
import exclamation from '../../../assets/images/exclamation.svg';
import { Circle } from '../../ui/circle';

import { ReactComponent as Level } from '../../../assets/images/level.svg';
import { ReactComponent as OrangeLevel } from '../../../assets/images/level-orange.svg';
import { UpdatedBanner } from './UpdatedBanner';

interface CardContainerProps {
  margin?: string;
}

interface TitleWrapperProps {
  alignTitle?: string;
}

interface CardProps extends CardContainerProps, TitleWrapperProps {
  isEditing: boolean;
  hasBeenEdited: boolean;
  hasInfoButton?: boolean;
  hasLevels?: boolean;
  hasEditedLevels?: boolean;
  hasCircle?: boolean;
  hasLine?: boolean;
  hasEditButton?: boolean;
  onClick?: () => void;
  title: string;
  hasWrapTitle?: boolean;
  circleBackground?: string;
  icon?: string;
  iconSize?: number;
  circleSize?: number;
  onClickInfo?: () => void;
}

export const Card = ({
  isEditing,
  hasBeenEdited,
  hasInfoButton = true,
  hasLevels = false,
  hasEditedLevels,
  hasCircle = true,
  hasLine = true,
  hasEditButton = true,
  onClick,
  children,
  title,
  hasWrapTitle = false,
  alignTitle,
  circleBackground = yellow,
  icon = exclamation,
  iconSize = 5,
  circleSize = 24,
  onClickInfo,
  margin,
}: PropsWithChildren<CardProps>) => {
  return (
    <CardContainer margin={margin}>
      <TitleContainer>
        <TitleWrapper alignTitle={alignTitle}>
          {hasWrapTitle ? (
            <WrapContainer>
              <CardTitle>{title}</CardTitle>
            </WrapContainer>
          ) : (
            <CardTitle>{title}</CardTitle>
          )}

          {hasCircle &&
            (!isEditing && hasInfoButton ? (
              <CircleWrapper onClick={onClickInfo}>
                <Circle
                  bg={circleBackground}
                  icon={icon}
                  size={circleSize}
                  iconSize={iconSize}
                />
              </CircleWrapper>
            ) : (
              !isEditing && (
                <Circle
                  bg={circleBackground}
                  icon={icon}
                  size={circleSize}
                  iconSize={iconSize}
                />
              )
            ))}
        </TitleWrapper>
        {!isEditing && hasEditButton && (
          <EditButton onClick={onClick}>Edit</EditButton>
        )}
      </TitleContainer>
      {hasLevels && !isEditing && !hasEditedLevels && (
        <LevelWrapper>
          <Level />
          <LevelText>4 / 5</LevelText>
        </LevelWrapper>
      )}
      {hasLevels && !isEditing && hasEditedLevels && (
        <LevelWrapper>
          <OrangeLevel />
          <LevelText>3 / 5</LevelText>
        </LevelWrapper>
      )}
      {!isEditing && hasInfoButton && (
        <BenchmarkWrapper onClick={onClickInfo}>
          <Benchmark>Benchmark</Benchmark>
        </BenchmarkWrapper>
      )}
      {hasLine && <Line />}
      {!isEditing && hasBeenEdited && <UpdatedBanner />}
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  height: fit-content;
  border-radius: 20px;
  background-color: ${secondaryBackground};
  margin: ${(props) =>
    props.margin ? `${props.margin}` : '10px 20px 100px 0px'};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TitleWrapper = styled.div<TitleWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) =>
    props.alignTitle ? `${props.alignTitle}` : 'center'};
  margin: 0;
`;

const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 76%;
`;

const CardTitle = styled.h1`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 2rem;
  color: ${primaryText};
  margin: 0 8px 0 0;
  line-height: 38.4px;
`;

const CircleWrapper = styled.div`
  cursor: pointer;
`;

const BenchmarkWrapper = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
`;

const Benchmark = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  color: ${lightGrey};
  text-decoration: underline;
  margin: 0 0 15px 0;
`;

const EditButton = styled.button`
  background: ${secondaryBackground};
  border: none;
  text-decoration: underline;
  font-family: 'Poppins';
  font-size: 16px;
  color: ${primaryText};
  margin-right: 10px;
  cursor: pointer;
`;

const LevelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 15px 0;
`;

const LevelText = styled.p`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 1rem;
  margin: 0 0 0 16px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lines};
`;
