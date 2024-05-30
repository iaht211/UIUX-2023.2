import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import viLocale from "@fullcalendar/core/locales/vi"; // Import ngôn ngữ tiếng Việt
import "./Calender.scss"

function CalendarMain() {
    const events = [
        {
            title: "Giảng dạy",
            start: "2024-05-29T14:00:00",
            end: "2024-05-29T16:00:00",
        },
        {
            title: "Nghiên cứu",
            start: "2024-05-29T12:00:00",
            end: "2024-05-29T113:00:00",
        },
        {
            title: "Học từ vựng",
            start: "2024-05-30T12:00:00",
            end: "2024-05-30T113:00:00",
        },
        {
            title: "Làm bài tập lớn",
            start: "2024-05-31T12:00:00",
            end: "2024-05-31T113:00:00",
        },
        {
            title: "UIUX",
            start: "2024-05-31T12:00:00",
            end: "2024-05-31T113:00:00",
        },
        // Add more events here...
    ];

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridWeek"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}

                events={events}
                eventRender={(info) => (
                    <div>
                        <span>{info.event.title}</span>
                        <span>{info.event.start} - {info.event.end}</span>
                    </div>
                )}
            />
        </div>
    );
}

export default CalendarMain




