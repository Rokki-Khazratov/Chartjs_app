import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.monthlyData.labels,
    datasets: [
      {
        label: 'Продажи',
        data: data.monthlyData.sales,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Посетители',
        data: data.monthlyData.visitors,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ежемесячная статистика'
      }
    }
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart; 