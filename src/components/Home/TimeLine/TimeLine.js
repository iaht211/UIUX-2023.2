// Timeline.js
import React from "react";
import TimelineList from "./TimelineList";
import TimelineItem from "./TimelineItem";


const Timeline = ({ items }) => {
    return (
        <TimelineList title="Lịch sử hoạt động" style={{ border: '1px solid #A8A8A8' }}>
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    color={item.color}
                    icon={item.icon}
                    title={item.title}
                    dateTime={item.dateTime}
                    description={item.description}
                    badges={item.badges}
                    lastItem={item.lastItem}
                />
            ))}
        </TimelineList>
    );
};

export default Timeline;
