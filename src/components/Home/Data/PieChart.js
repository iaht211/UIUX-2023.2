import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData }) => {
    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Pie data={chartData} />
        </div>
    );
}

export default PieChart;
