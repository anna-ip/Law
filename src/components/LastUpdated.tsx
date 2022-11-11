import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { primaryText } from './ui/styles';

export const LastUpdated = () => {
  const [updated] = useState(() => {
    const data = window.localStorage.getItem('DATE');
    return data !== null ? JSON.parse(data) : '';
  });

  return (
    <UpdatedContainer>
      {updated?.length > 0 && (
        <>
          <UpdatedText>Last updated: </UpdatedText>
          <UpdatedText>{updated}</UpdatedText>
        </>
      )}
      <SurveyLink to={'/onboarding/1'}>Retake Survey</SurveyLink>
    </UpdatedContainer>
  );
};

const UpdatedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: end;
  margin-top: 40px;
`;

const UpdatedText = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${primaryText};
  margin: 0 4px 0 0;
`;

const SurveyLink = styled(Link)`
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 500;
  color: ${primaryText};
  margin-left: 14px;
`;
