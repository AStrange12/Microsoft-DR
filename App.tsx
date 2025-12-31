
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateReminder from './pages/CreateReminder';
import ReminderList from './pages/ReminderList';
import HowItWorks from './pages/HowItWorks';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateReminder />} />
          <Route path="/list" element={<ReminderList />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
