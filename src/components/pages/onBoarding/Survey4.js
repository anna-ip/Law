import { SurveyBackground } from '../../survey/SurveyBackground';
import { Survey } from '../../survey/Survey';
import { OnboardingButton } from '../../ui/button';
import { BackLink } from '../../survey/BackLink';

const survey4 = [
  {
    question: 'What is the total legal cost?',
    explanation:
      '(internal people cost including lawyers, paralegals, IP specialists, compliance team and external legal cost)',
    answer: [
      { id: 1, label: '< 5' },
      { id: 2, label: '5 –15' },
      { id: 4, label: '16 - 25' },
      { id: 5, label: '26 –50' },
      { id: 6, label: '51 –100' },
      { id: 7, label: '100 - 200' },
      { id: 8, label: '> 200' },
    ],
  },
];

export const Survey4 = () => {
  return (
    <SurveyBackground>
      <BackLink to={'/onBoarding/3'}>QUESTION 4/5</BackLink>
      {survey4.map((survey, index) => (
        <Survey key={`survey-${index}`} index={index} survey={survey} />
      ))}
      <OnboardingButton to={'/onboarding/5'} />
    </SurveyBackground>
  );
};
