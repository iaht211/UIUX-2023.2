import NavBar from "./NavBar";
import './GiangDay.scss';

import { Gauge } from '@mui/x-charts/Gauge';
import Pagnination from "./Pagnination";
import { useNavigate } from "react-router-dom";

const GiangDay = () => {
    const navigate = useNavigate();
    return (
        <div className="giangday-container">
            <div className="navbar-container">
                <NavBar></NavBar>
            </div>
            <div className="content-1" onClick={() => navigate("/kpi/giangday/chitiet")}>
                <div className="left-content-1">

                    <div className="header">
                        <span>UI&UX</span>
                    </div>
                    <div className="content">
                        <span>Giang day mon UI&UX</span>
                    </div>

                    <div className="time">
                        <div className="start">
                            Ngay bat dau 01/06/2023
                        </div>
                        <div className="deadline">
                            Deadline: 1/4/2024
                        </div>
                    </div>
                </div>

                <div className="right-content-1">

                    <Gauge
                        value={60}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="80%"
                        outerRadius="100%"
                    // ...
                    />
                </div>
            </div>

            <div className="content-1">
                <div className="left-content-1">

                    <div className="header">
                        <span>UI&UX</span>
                    </div>
                    <div className="content">
                        <span>Giang day mon UI&UX</span>
                    </div>

                    <div className="time">
                        <div className="start">
                            Ngay bat dau 01/06/2023
                        </div>
                        <div className="deadline">
                            Deadline: 1/4/2024
                        </div>
                    </div>
                </div>

                <div className="right-content-1">

                    <Gauge
                        value={60}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="80%"
                        outerRadius="100%"
                    // ...
                    />
                </div>
            </div>

            <div className="content-1">
                <div className="left-content-1">

                    <div className="header">
                        <span>UI&UX</span>
                    </div>
                    <div className="content">
                        <span>Giang day mon UI&UX</span>
                    </div>

                    <div className="time">
                        <div className="start">
                            Ngay bat dau 01/06/2023
                        </div>
                        <div className="deadline">
                            Deadline: 1/4/2024
                        </div>
                    </div>
                </div>

                <div className="right-content-1">

                    <Gauge
                        value={60}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="80%"
                        outerRadius="100%"
                    // ...
                    />
                </div>
            </div>

            <div className="pagnination">
                <Pagnination></Pagnination>
            </div>
        </div>

    )
}

export default GiangDay;