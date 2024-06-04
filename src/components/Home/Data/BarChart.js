import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";


const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container" style={{ width: '600px', height: '400px', border: '1px solid #A8A8A8', borderRadius: '5px', backgroundColor: '#F4F8FD', padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Thống kê KPI giảng dạy</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    },
                    scales: {
                        x: {
                            stacked: false,
                            title: {
                                display: true,
                                text: 'Projects'
                            }
                        },
                    }
                }}
            />
            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#4A3AFF' }}></span>

                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#93AAFD' }}></span>

                </div>
            </div>
        </div>
    );
};

export default BarChart;