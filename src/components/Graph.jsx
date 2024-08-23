import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Graph = ({ type, data }) => {
  const chartData = {
    labels: data.map((_, index) => `Label ${index + 1}`),
    datasets: [
      {
        label: 'Data',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Red
          'rgba(54, 162, 235, 0.2)', // Blue
          'rgba(75, 192, 192, 0.2)', // Green
          'rgba(255, 206, 86, 0.2)', // Yellow
          'rgba(153, 102, 255, 0.2)', // Purple
          'rgba(255, 159, 64, 0.2)', // Orange
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Red
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(75, 192, 192, 1)', // Green
          'rgba(255, 206, 86, 1)', // Yellow
          'rgba(153, 102, 255, 1)', // Purple
          'rgba(255, 159, 64, 1)', // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true
      },
    },
  };

  return (
    <>
      {type === 'bar' && <Bar data={chartData} options={chartOptions} />}
      {type === 'line' && <Line data={chartData} options={chartOptions} />}
      {type === 'doughnut' && <Doughnut data={chartData} options={chartOptions} />}
    </>
  );
};

export default Graph;