import { SurveyBackground } from '../../survey/SurveyBackground';
import { Survey } from '../../survey/Survey';
import { OnboardingLink } from '../../ui/button';
import { BackLink } from '../../survey/BackLink';

const survey3 = [
  {
    question: 'What is your global turnover? ',
    answer: [
      { id: 1, label: 'I don’t know' },
      { id: 2, label: '< 1B' },
      { id: 4, label: '1B –2B' },
      { id: 5, label: '3B –5B' },
      { id: 6, label: '5B –10B' },
      { id: 7, label: '10B –20B' },
      { id: 8, label: '> 20B' },
    ],
  },
];

export const Survey3 = () => {
  return (
    <SurveyBackground>
      <BackLink to={'/onBoarding/2'}>QUESTION 3/5</BackLink>
      {survey3.map((survey, index) => (
        <Survey key={`survey-${index}`} index={index} survey={survey} />
      ))}
      <OnboardingLink to={'/onboarding/4'} />
    </SurveyBackground>
  );
};
