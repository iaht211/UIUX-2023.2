import React, { useState } from "react";
import 'react-pro-sidebar/dist/css/styles.css';
import {
    Card,
    Container,
    Col,
} from "react-bootstrap";
import './Home.scss'
import BarChart from "./Data/BarChart";  // Adjust the import path as needed
import { FcBusiness } from "react-icons/fc";
import MyCalendar from "./Calender/Calender";
import bookImage from "../../assets/education_img.png"
import chartImage from "../../assets/Remove-bg 1.png"
import humanImage from "../../assets/Rectangle 126.png"

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

    return (
        <div className='home-container'>
            <div className='home-content'>
                <div className='card-class'>
                    <Card className="card-1">
                        <Card.Body>
                            <Card.Title>Tổng chỉ tiêu tháng này</Card.Title>
                            <Card.Text>
                                145
                            </Card.Text>
                            <Card.Img src={bookImage} alt="Card image cap" />

                        </Card.Body>
                    </Card>
                    <Card className="card-2">

                        <Card.Body>
                            <Card.Title>Chỉ tiêu tháng này</Card.Title>
                            <Card.Text>
                                12
                            </Card.Text>
                            <Card.Img src={chartImage} alt="Card image cap" />
                        </Card.Body>

                    </Card>
                    <Card className="card-3">

                        <Card.Body>
                            <Card.Title>Chỉ tiêu tháng tới</Card.Title>
                            <Card.Text>
                                15
                            </Card.Text>
                            <Card.Img src={humanImage} alt="Card image cap" />

                        </Card.Body>
                    </Card>
                </div>

                <div className="kpi-section">
                    <div className="chart-calender-project">
                        <div className="chart-calender">
                            <div className="chart-main">
                                <BarChart chartData={chartData} />
                            </div>
                            <div className='calendar-section'>
                                <MyCalendar />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
