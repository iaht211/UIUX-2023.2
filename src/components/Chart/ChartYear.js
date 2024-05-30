import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ChartYear = ({ chartData }) => {
    return (
        <div className="chart-container" style={{ width: '583px', height: '400px', border: '1px solid #A8A8A8', borderRadius: '5px', backgroundColor: '#F4F8FD' }}>
            <h2 style={{ textAlign: "center" }}>Thống kê KPI</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Thống kê các Project đang thực hiện"
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    },
                    scales: {
                        x: {
                            stacked: false,
                            type: 'category',
                            labels: chartData.labels,
                            title: {
                                display: true,
                                text: 'Projects'
                            }
                        },
                        y: {
                            stacked: false,
                            title: {
                                display: true,
                                text: 'KPI Value'
                            }
                        }
                    }
                }}
            />
            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#4A3AFF' }}></span>
                    <span>Thực tế Q1</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#93AAFD' }}></span>
                    <span>Thực tế Q2</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#FFD700' }}></span>
                    <span>Thực tế Q3</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#FF4500' }}></span>
                    <span>Thực tế Q4</span>
                </div>
            </div>
        </div>
    );
};

export default ChartYear;