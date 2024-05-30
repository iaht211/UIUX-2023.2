// TimelineItem.js
import React from "react";

const TimelineItem = ({ color, icon, title, dateTime, description, badges, lastItem }) => {
    return (
        <li className={`timeline-item ${lastItem ? 'last-item' : ''}`} style={{}}>
            <span className={`timeline-icon bg-${color}`}>
                {icon}
            </span>
            <div className="timeline-content">
                <h4 style={{ 'font-size': '1rem' }}>{title}</h4>
                <small>{dateTime}</small>
                <p>{description}</p>
                {badges && (
                    <div className="timeline-badges">
                        {badges.map((badge, index) => (
                            <span key={index} className="badge">
                                {badge}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </li>
    );
};

export default TimelineItem;
