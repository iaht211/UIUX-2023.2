import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Ensure the correct Chart.js version is used

const ChartMonth = () => {
    const chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Users Gained",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                tension: 0.1
            },
            {
                label: "Users Lost",
                data: [30, 25, 20, 15, 10, 5, 0],
                fill: false,
                backgroundColor: "rgba(255,0,0,0.2)",
                borderColor: "rgba(255,0,0,1)",
                tension: 0.1
            },
            {
                label: "New Users",
                data: [10, 15, 20, 25, 30, 35, 40],
                fill: false,
                backgroundColor: "rgba(0,0,255,0.2)",
                borderColor: "rgba(0,0,255,1)",
                tension: 0.1
            },
            {
                label: "Returning Users",
                data: [20, 25, 30, 35, 40, 45, 50],
                fill: false,
                backgroundColor: "rgba(0,255,0,0.2)",
                borderColor: "rgba(0,255,0,1)",
                tension: 0.1
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: "Users Gained between 2016-2020"
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
        <div className="chart-container" style={{ width: '80%', margin: '0 auto' }}>
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default ChartMonth;