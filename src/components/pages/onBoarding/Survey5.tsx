import { useLocation } from 'react-router-dom';
import { SurveyBackground } from '../../survey/SurveyBackground';
import { Survey } from '../../survey/Survey';
import { OnboardingLink } from '../../ui/button';
import { useEffect, useState } from 'react';
import { BackLink } from '../../survey/BackLink';

const survey5 = [
  {
    question: 'What is the external legal cost?',
    explanation: '(Law firms, Alternative service provider)',
    answer: [
      { id: '1', label: 'I don’t know' },
      { id: '2', label: '< 1M' },
      { id: '3', label: '1M –5M' },
      { id: '4', label: '6M –10M' },
      { id: '5', label: '11M –20M' },
      { id: '6', label: '21M –50M' },
      { id: '7', label: '51M –100M' },
      { id: '8', label: '> 100M' },
    ],
  },
];

export const Survey5 = () => {
  const [today, setToday] = useState('');
  const location = useLocation();

  const handleNavigate = () => {
    window.localStorage.setItem('DATE', JSON.stringify(today));

    return { ...location, pathname: '/home' };
  };

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setToday(`${day}/${month}/${year}`);
  }, []);

  return (
    <SurveyBackground>
      <BackLink to={'/onBoarding/4'}>QUESTION 5/5</BackLink>
      {survey5.map((survey, index) => (
        <Survey key={`survey-${index}`} index={index} survey={survey} />
      ))}
      <OnboardingLink to={handleNavigate} />
    </SurveyBackground>
  );
};
