import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import TradeInput from '../dynasty/newtrade/newtrade.tsx';
import LeagueOverview from '../dynasty/leagueOverview/leagueOverview.tsx';

const Main = () => (
  <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route path="/aboutme" element={<AboutMe />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/newtrade" element={<TradeInput />} />
    <Route path="/leagueOverview" element={<LeagueOverview />} />
  </Routes>
);

export default Main;
