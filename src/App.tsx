import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LightSwitch from './components/LightSwitch';
import ThemeToggler from './components/ThemeToggler';
import SideNav from './sideNav/sidenav';
import BankAccountManager from './components/BankAccountManager';
import Stopwatch from './components/StopWatch';
import Dashboard from './components/Dasboard';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <SideNav />
        {/* Main content */}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lightswitch" element={<LightSwitch />} />
            <Route path="/themetogger" element={<ThemeToggler />} />
            <Route path="/bankaccount" element={<BankAccountManager />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
