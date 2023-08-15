import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart, { elements } from 'chart.js/auto';

function ChartComponent({ chartData }) {
  return (
    <div className='chart'>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;