import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SurveyBackground } from '../../survey/SurveyBackground';
import { Survey } from '../../survey/Survey';
import { OnboardingLink } from '../../ui/button';
import { BackLink } from '../../survey/BackLink';

const survey1 = [
  {
    question: 'What is your Industry?',
    answer: [
      { id: 1, label: 'Automotive' },
      { id: 2, label: 'Aviation' },
      { id: 4, label: 'Banking' },
      { id: 5, label: 'Chemical' },
      { id: 6, label: 'Crypto Currency' },
      { id: 7, label: 'Finance' },
      { id: 8, label: 'FMCG' },
      { id: 9, label: 'Pharmaceutical' },
      { id: 10, label: 'Retail Business' },
      { id: 11, label: 'Technology' },
      { id: 12, label: 'White Goods' },
      { id: 13, label: 'Other' },
    ],
  },
];

export const Survey1 = () => {
  const [today, setToday] = useState('');
  const location = useLocation();

  const handleNavigate = () => {
    window.localStorage.setItem('DATE', JSON.stringify(today));
    return { ...location, pathname: '/home' };
  };

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setToday(`${day}/${month}/${year}`);
  }, []);

  return (
    <SurveyBackground>
      <BackLink to={handleNavigate(location)}>QUESTION 1/5</BackLink>
      {survey1.map((survey, index) => (
        <Survey key={`survey-${index}`} index={index} survey={survey} />
      ))}

      <OnboardingLink to={'/onboarding/2'} />
    </SurveyBackground>
  );
};
