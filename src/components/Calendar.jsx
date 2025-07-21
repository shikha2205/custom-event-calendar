
import React, { useState, useContext } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";
import { EventContext } from "../context/EventContext";
import "./Calendar.css"; // Add custom styles here

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const { events, addEvent, deleteEvent, updateEvent } = useContext(EventContext);

  const handleDayClick = (day) => {
    setSelectedDate(day);
    const title = prompt("Enter event title:");
    if (title) {
      addEvent({
        id: Date.now(),
        date: format(day, "yyyy-MM-dd"),
        title,
      });
    }
  };

  const renderHeader = () => (
    <div className="header">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>◀</button>
      <div className="month">{format(currentMonth, "MMMM yyyy")}</div>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>▶</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day-name" key={i}>
          {date[i]}
        </div>
      );
    }
    return <div className="days-row">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        const dayEvents = events.filter(
          (e) => e.date === format(cloneDay, "yyyy-MM-dd")
        );

        days.push(
          <div
            className={`cell ${!isSameMonth(day, monthStart) ? "disabled" : ""} ${
              isSameDay(day, new Date()) ? "today" : ""
            }`}
            key={day}
            onClick={() => handleDayClick(cloneDay)}
          >
            <div className="date">{formattedDate}</div>
            <div className="events">
              {dayEvents.map((e) => (
                <div key={e.id} className="event">
                  {e.title}
                </div>
              ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="week" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;

