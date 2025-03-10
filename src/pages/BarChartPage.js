import React from 'react';
import BarChart from '../components/BarChart';
import chartData from '../data/chartData.json';
import { Link } from 'react-router-dom';

const BarChartPage = () => {
  return (
    <div className="chart-page">
      <div className="nav-header">
        <Link to="/" className="back-link">← Бош саҳифа</Link>
      </div>
      <h1>Ҳудудлар бўйича лойиҳалар статистикаси</h1>
      <div className="chart-container">
        <BarChart data={chartData} />
      </div>
    </div>
  );
};

export default BarChartPage; 