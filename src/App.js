import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BarChartPage from './pages/BarChartPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bar" element={<BarChartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 