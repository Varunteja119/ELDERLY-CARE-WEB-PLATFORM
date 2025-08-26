import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Caregivers } from './pages/Caregivers';
import { OldAgeHomes } from './pages/OldAgeHomes';
import { DigitalGrandparenting } from './pages/DigitalGrandparenting';
import { HealthSupport } from './pages/HealthSupport';
import { Community } from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/caregivers" element={<Caregivers />} />
            <Route path="/old-age-homes" element={<OldAgeHomes />} />
            <Route path="/digital-grandparenting" element={<DigitalGrandparenting />} />
            <Route path="/health-support" element={<HealthSupport />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;