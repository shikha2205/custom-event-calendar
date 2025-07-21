// === src/components/Day.jsx ===
import React, { useContext } from 'react';
import { format, isSameMonth, isToday } from 'date-fns';
import { EventContext } from '../context/EventContext';

export default function Day({ date, currentDate }) {
  const { events } = useContext(EventContext);
  const dayEvents = events.filter(
    (e) => format(new Date(e.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );

  return (
    <div
      className={`h-32 border-r border-t p-1 overflow-hidden text-xs relative flex flex-col ${
        isSameMonth(date, currentDate) ? 'bg-white' : 'bg-gray-100 text-gray-400'
      } ${isToday(date) ? 'border-blue-500 border-2' : ''}`}
    >
      <div className="absolute top-1 right-2 text-sm font-semibold">{format(date, 'd')}</div>
      <div className="mt-6 space-y-1 overflow-y-auto px-1">
        {dayEvents.map((event) => (
          <div key={event.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded shadow-sm truncate">
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
Day.jsx
