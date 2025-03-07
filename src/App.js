import React from 'react';
import BarChart from './components/BarChart';
import chartData from './data/chartData.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ҳудудлар бўйича лойиҳалар статистикаси</h1>
      <div className="chart-container">
        <BarChart data={chartData} />
      </div>
    </div>
  );
}

export default App; 