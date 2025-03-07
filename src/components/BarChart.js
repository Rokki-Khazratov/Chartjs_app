import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const [selectedDataset, setSelectedDataset] = useState('values');

  const datasets = {
    values: {
      label: data.columns.projects,
      data: data.regionData.values,
      color: 'rgba(54, 162, 235, 0.6)'
    },
    initiativeCount: {
      label: data.columns.initiatives,
      data: data.regionData.initiativeCount,
      color: 'rgba(255, 99, 132, 0.6)'
    },
    approvedProjects: {
      label: data.columns.approvedProjects,
      data: data.regionData.approvedProjects,
      color: 'rgba(75, 192, 192, 0.6)'
    },
    allocatedFunds: {
      label: data.columns.allocatedFunds,
      data: data.regionData.allocatedFunds,
      color: 'rgba(255, 206, 86, 0.6)'
    }
  };

  const chartData = {
    labels: data.regionData.labels,
    datasets: [
      {
        label: datasets[selectedDataset].label,
        data: datasets[selectedDataset].data,
        backgroundColor: datasets[selectedDataset].color,
        borderColor: datasets[selectedDataset].color.replace('0.6', '1'),
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: data.chartTitle,
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${datasets[selectedDataset].label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: datasets[selectedDataset].label,
          font: {
            size: 14
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 11
          },
          maxRotation: 45,
          minRotation: 45
        }
      }
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <select 
          value={selectedDataset} 
          onChange={(e) => setSelectedDataset(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          <option value="values">{data.columns.projects}</option>
          <option value="initiativeCount">{data.columns.initiatives}</option>
          <option value="approvedProjects">{data.columns.approvedProjects}</option>
          <option value="allocatedFunds">{data.columns.allocatedFunds}</option>
        </select>
      </div>
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default BarChart; 