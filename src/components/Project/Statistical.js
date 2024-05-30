import ChartDay from "../Chart/ChartDay";
import React, { useState } from 'react';
import ChartMonth from "../Chart/ChartMonth";
import ChartYear from "../Chart/ChartYear";

const Project = () => {
    const [chartData, setChartData] = useState({
        labels: ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"],
        datasets: [
            {
                label: "Đã làm",
                data: [20, 70, 50, 80, 120],
                backgroundColor: '#4A3AFF',
                borderWidth: 1,
            },
            {
                label: "Chưa làm",
                data: [80, 50, 70, 70, 100],
                backgroundColor: '#FF0000',
                borderWidth: 1,
            },
            {
                label: "Quán hạn",
                data: [80, 50, 70, 70, 100],
                backgroundColor: '#C6D2FD',
                borderWidth: 1,
            },
            {
                label: "Đang làm",
                data: [80, 50, 70, 70, 100],
                backgroundColor: '#93AAFD',
                borderWidth: 1,
            }
        ],
    });
    const chartYear = {
        labels: [
            "Project A",
            "Project B",
            "Project C",
            "Project D"
        ],
        datasets: [
            {
                label: "Q1",
                data: [10, 20, 30, 40],
                backgroundColor: "#4A3AFF"
            },
            {
                label: "Q2",
                data: [15, 25, 35, 45],
                backgroundColor: "#93AAFD"
            },
            {
                label: "Q3",
                data: [20, 30, 40, 50],
                backgroundColor: "#FFD700"
            },
            {
                label: "Q4",
                data: [25, 35, 45, 55],
                backgroundColor: "#FF4500"
            }
        ]
    };
    return (

        <div className="statistical-container">
            <div className="header">
                header
            </div>
            <div className="content">
                <ChartDay chartData={chartData} />
                <ChartMonth />
                <ChartYear chartData={chartYear} />
            </div>
        </div>

    )
}

export default Project;