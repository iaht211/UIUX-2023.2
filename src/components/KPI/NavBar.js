import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const [state_button_data, setStateButtonData] = useState(false);

    return (
        <div className="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="/kpi/giangday">Giảng dạy</a> */}
                                <button onClick={() => { navigate('/kpi/giangday', { state: { state_button_data } }) }}>Giảng dạy</button>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nghiên cứu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Phục vụ</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;