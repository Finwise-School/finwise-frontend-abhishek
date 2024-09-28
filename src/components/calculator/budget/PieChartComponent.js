import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="w-64 h-64 mx-auto mb-10"> {/* Control the size here */}
      <h3 className="text-lg font-semibold mb-2 text-center">Spending Breakdown</h3>
      <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default PieChartComponent;
