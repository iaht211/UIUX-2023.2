// TimelineList.js
import React from "react";

const TimelineList = ({ title, children }) => {
    return (
        <div className="timeline-list" style={{ listStyle: 'none', padding: 0, fontSize: 'small', border: '1px solid #A8A8A8' }}>
            <h4 style={{ 'font-size': '1rem' }}>{title}</h4>
            <ul>{children}</ul>
        </div>
    );
};

export default TimelineList;
