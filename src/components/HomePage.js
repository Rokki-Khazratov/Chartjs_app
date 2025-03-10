import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Ҳудудлар бўйича статистика</h1>
      <div className="chart-links">
        <Link to="/bar" className="chart-link">
          <div className="chart-card">
            <h2>Устун диаграмма</h2>
            <p>Ҳудудлар бўйича маълумотлар таҳлили</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage; 