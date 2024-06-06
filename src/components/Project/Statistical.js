import ChartWeek from "../Chart/ChartWeek";
import React, { useState } from 'react';
import ChartYear from "../Chart/ChartYear";
import ChartMonth from "../Chart/ChartMonth";
import "./Statustical.scss"

const Project = () => {
    const [chartData, setChartData] = useState({
        labels: ["Đã hoàn thành", "Chưa hoàn thành", "Quá hạn"],
        datasets: [
            {
                label: "Users Gained",
                data: [100, 150, 200], // Replace with your actual user data
                backgroundColor: [
                    "#4A3AFF",
                    "#C893FD",
                    "#C6D2FD",
                ],
                borderColor: [
                    "#4A3AFF",
                    "#C893FD",
                    "#C6D2FD",
                ],
                borderWidth: 1,
            },
        ],
    });
    const chartMonth = {
        labels: [
            "Project A",
            "Project B",
            "Project C",
            "Project D"
        ],
        datasets: [
            {
                label: "Đã hoàn thành",
                data: [10, 20, 30, 40],
                backgroundColor: "#4A3AFF"
            },
            {
                label: "Chưa hoàn thành",
                data: [15, 25, 35, 45],
                backgroundColor: "#C893FD"
            },
            {
                label: "Quá hạn",
                data: [20, 30, 40, 50],
                backgroundColor: "#C6D2FD"
            }
        ]
    };
    return (

        <div className="statistical-container">
            <div className="content">
                <div className="chart-week">
                    <ChartWeek chartData={chartData} />
                </div>
                <div className="chart-month">
                    <ChartMonth chartData={chartMonth} />


                </div>
                <div className="chart-year">
                    <ChartYear />

                </div>

            </div>
        </div>

    )
}

export default Project;