import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './components/pages/Home';
import { RiskAndOps } from './components/pages/RiskAndOps';
import { LogIn } from './components/pages/LogIn';
import { GlobalStyle } from './components/ui/styles';
import { Surveys } from './components/pages/onBoarding/Surveys';
import { LegalOperating } from './components/pages/LegalOperating';
import { LandingPage } from './components/pages/LandingPage';
import { InBetween } from './components/pages/InBetween';
import { SpendLevel } from './components/pages/SpendLevel';
import { Triage } from './components/pages/Triage';
import { Complexity } from './components/pages/Complexity';

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/logIn' element={<LogIn />} />
          <Route exact path='/profileOption' element={<InBetween />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/spend' element={<SpendLevel />} />
          <Route path='/complexity' element={<Complexity />} />
          <Route path='/legal' element={<LegalOperating />} />
          <Route path='/risk' element={<RiskAndOps />} />
          <Route path='/triage' element={<Triage />} />
          <Route path='/onboarding/:surveyId' exact element={<Surveys />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
