import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Ensure the correct Chart.js version is used

const ChartYear = () => {
    const chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Đã hoàn thành",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: "rgba(74, 58, 255, 1)",
                borderColor: "rgba(74, 58, 255, 1)",
                tension: 0.1
            },
            {
                label: "Chưa hoàn thành",
                data: [30, 25, 20, 15, 10, 5, 0],
                fill: false,
                backgroundColor: "rgba(200, 147, 253, 1)",
                borderColor: " rgba(200, 147, 253, 1)",
                tension: 0.1
            },
            {
                label: "Đã quá hạn",
                data: [10, 15, 20, 25, 30, 35, 40],
                fill: false,
                backgroundColor: "rgba(198, 210, 253, 1)",
                borderColor: "rgba(198, 210, 253, 1)",
                tension: 0.1
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
            },
            legend: {
                display: true,
                position: 'bottom',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Users'
                }
            }
        }
    };

    return (
        <div className="chart-container" style={{ width: '700px', height: "500px" }}>
            <h2 style={{ textAlign: "center" }}>Thống kê năm 2024</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default ChartYear;