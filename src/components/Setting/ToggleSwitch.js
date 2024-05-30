import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, id }) => {
    return (
        <div className="container">
            <div className="box-size">
                <div className="toggle-switch">
                    <input type="checkbox" className="checkbox" id={id} />
                    <label className="label" htmlFor={id}>
                        <span className="inner" />
                        <span className="switch" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ToggleSwitch;