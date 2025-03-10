import React from 'react';
import LineChart from '../components/LineChart';
import chartData from '../data/chartData.json';
import { Link } from 'react-router-dom';

const LineChartPage = () => {
  return (
    <div className="chart-page">
      <div className="nav-header">
        <Link to="/" className="back-link">← Бош саҳифа</Link>
      </div>
      <h1>Вақт бўйича ўзгаришлар</h1>
      <div className="chart-container">
        <LineChart data={chartData} />
      </div>
    </div>
  );
};

export default LineChartPage; 