// src/components/Dashboard.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Sample data
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Total Sales ($)',
        data: [5000, 4000, 3000, 7000, 8000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const ordersData = {
    labels: ['Pending', 'Shipped', 'Delivered', 'Returned'],
    datasets: [
      {
        label: 'Order Status',
        data: [20, 50, 100, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Sales and Orders Dashboard</h2>
      
      <div style={{ width: '600px', marginBottom: '30px' }}>
        <h3>Sales Over Time</h3>
        <Bar data={salesData} />
      </div>
      
      <div style={{ width: '400px' }}>
        <h3>Order Status Distribution</h3>
        <Pie data={ordersData} />
      </div>
    </div>
  );
};

export default Dashboard;
