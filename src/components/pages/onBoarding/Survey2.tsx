import { SurveyBackground } from '../../survey/SurveyBackground';
import { Survey } from '../../survey/Survey';
import { OnboardingLink } from '../../ui/button';
import { BackLink } from '../../survey/BackLink';

const survey2 = [
  {
    question: 'What is your role?',
    answer: [
      { id: '1', label: 'Chief Executive Officer' },
      { id: '2', label: 'Chief Financial Officer' },
      { id: '4', label: 'Group General Counsel / Chief Legal Officer' },
      { id: '5', label: 'Head of Legal Operations' },
      { id: '6', label: 'Chief Compliance Officer' },
      { id: '7', label: 'Chief Operating Officer' },
      { id: '8', label: 'Other' },
    ],
  },
];

export const Survey2 = () => {
  return (
    <SurveyBackground>
      <BackLink to={'/onboarding/1'}> QUESTION 2/5</BackLink>
      {survey2.map((survey, index) => (
        <Survey key={`survey-${index}`} index={index} survey={survey} />
      ))}
      <OnboardingLink to={'/onboarding/3'} />
    </SurveyBackground>
  );
};
