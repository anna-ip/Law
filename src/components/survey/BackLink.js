import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { green } from '../ui/styles';
import { ReactComponent as Chevron } from '../../assets/images/Union.svg';

export const BackLink = ({ to, children }) => {
  return (
    <>
      <StyledBackLink to={to}>
        <Chevron
          width='12px'
          height='17px'
          alt='Chevron icon'
          style={{ marginRight: '25px' }}
        />
        {children}
      </StyledBackLink>
    </>
  );
};

const StyledBackLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-size: 16px;
  color: ${green};
  font-weight: 700;
  text-decoration: none;
`;
