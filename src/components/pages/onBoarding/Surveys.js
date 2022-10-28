import { useParams } from 'react-router-dom';
import { Home } from '../Home';
import { Survey1 } from './Survey1';
import { Survey2 } from './Survey2';
import { Survey3 } from './Survey3';
import { Survey4 } from './Survey4';
import { Survey5 } from './Survey5';

export const Surveys = () => {
  const params = useParams();
  const id = params.surveyId;

  switch (id) {
    case '1':
      return <Survey1 />;
    case '2':
      return <Survey2 />;

    case '3':
      return <Survey3 />;

    case '4':
      return <Survey4 />;

    case '5':
      return <Survey5 />;

    default:
      <Home />;
  }
};
