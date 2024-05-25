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
import MyCalendar from "../Calender/Calender";
import Timeline from "./TimeLine/TimeLine";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcDeleteDatabase } from "react-icons/fc";
import { FcDatabase } from "react-icons/fc";
import ListGroup from "./ListGroup/ListGroup";



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

    const timelineItems = [
        {
            color: "success",
            icon: <FcAcceptDatabase />,
            title: "$2400 Design changes",
            dateTime: "22 DEC 7:20 PM",
            description: "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
            badges: ["design"],
        },
        {
            color: "error",
            icon: <FcDeleteDatabase />,
            title: "New order #1832412",
            dateTime: "21 DEC 11 PM",
            description: "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
            badges: ["order", "#1832412"],
        },
        {
            icon: <FcDatabase />,
            title: "Server payments for April",
            dateTime: "21 DEC 9:34 PM",
            description: "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
            badges: ["server", "payments"],
            lastItem: true,
        },
    ];

    return (
        <div className='home-container'>

            <div className='home-content'>
                <div className='card-class'>
                    <Card className="card-1" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Lượng Project đang thực hiện</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                5 Projects
                            </Card.Text>

                            <Card.Link href="#">Thiết lập KPI</Card.Link>
                            <Card.Link > <FcBusiness /> </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="card-2" style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>Lượng công việc đã làm</Card.Title>
                            <Card.Text>
                                130 CV
                            </Card.Text>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="card-3" style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>Tổng thời gian làm việc</Card.Title>
                            <Card.Text>
                                10 tiếng
                            </Card.Text>

                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="card-4" style={{ width: '16rem' }}>
                        <Card.Body>
                            <Card.Title>Tổng thời gian làm việc</Card.Title>
                            <Card.Text>
                                10 tiếng
                            </Card.Text>

                            <Card.Link href="#">Another Link</Card.Link>
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
                        <div className="list-section">
                            <h2 style={{ textAlign: "center" }}>List Projects</h2>
                            <ListGroup />
                        </div>
                    </div>
                    <div className="timeline-section">
                        <Timeline items={timelineItems} />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Home;
