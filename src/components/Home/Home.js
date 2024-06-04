import React, { useState } from "react";
import 'react-pro-sidebar/dist/css/styles.css';
import './Home.scss'
import BarChart from "./Data/BarChart";  // Adjust the import path as needed
import MyCalendar from "./Calender/Calender";
import ChartWeek from "../Chart/ChartWeek";
import Note from "./Note/Note";
import kpiImg from '../../assets/Remove-bg 1.png'


const Home = () => {
    const [chartData, setChartData] = useState({
        labels: ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"],
        datasets: [
            {
                label: "Thực tế",
                data: [20, 70, 50, 80, 120],
                backgroundColor: '#4A3AFF',
                borderWidth: 1,
            },
            {
                label: "Mục tiêu",
                data: [80, 50, 70, 70, 100],
                backgroundColor: '#93AAFD',
                borderWidth: 1,
            }
        ],
    });
    const [chartWeekData, setChartWeekData] = useState({
        labels: ["Đã hoàn thành", "Chưa hoàn thành", "Đã quá hạn"],
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
                label: "Đã quá hạn",
                data: [20, 30, 40, 50],
                backgroundColor: "#C6D2FD"
            }
        ]
    };

    return (
        <div className='home-container'>
            <div className="chart-note">
                <div className="header">
                    <img src={kpiImg} alt="" width="200" height="200"/>
                    <div className="header-content">
                        <h4>Chào mừng đến với KPInit</h4>
                        <span>Cùng nhau hoàn thành công việc nhé</span>
                        <div className="statistical">
                            <div className="left">
                                <span>số lượng nhiệm vụ hôm nay<br></br></span>
                                <span>12</span>

                            </div>
                            <div className="right">
                                <span>tổng số nhiệm vụ <br/><br/></span>
                                <span>12</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Note/>
            </div>
            <div className="chart-calender">
                <BarChart chartData={chartData} />
                <MyCalendar/>
            </div>
        </div>
    )
}

export default Home;