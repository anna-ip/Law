import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './components/pages/Home';
import { RiskAndOps } from './components/pages/RiskAndOps';

import { GlobalStyle } from './components/ui/styles';
import { Surveys } from './components/pages/onBoarding/Surveys';
import { LegalOperating } from './components/pages/LegalOperating';
import { LandingPage } from './components/pages/LandingPage';
import { InBetween } from './components/pages/InBetween';
import { SpendLevel } from './components/pages/SpendLevel';
import { Triage } from './components/pages/Triage';
import { Complexity } from './components/pages/Complexity';
import { LogIn } from './components/pages/index';
import { Theme } from './Theme';

export const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Theme>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/logIn' element={<LogIn />} />
            <Route path='/profileOption' element={<InBetween />} />
            <Route path='/home' element={<Home />} />
            <Route path='/spend' element={<SpendLevel />} />
            <Route path='/complexity' element={<Complexity />} />
            <Route path='/legal' element={<LegalOperating />} />
            <Route path='/risk' element={<RiskAndOps />} />
            <Route path='/triage' element={<Triage />} />
            <Route path='/onboarding/:surveyId' element={<Surveys />} />
          </Routes>
        </AnimatePresence>
      </Theme>
    </>
  );
};
