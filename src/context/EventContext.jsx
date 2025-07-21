// import React, { createContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export const EventContext = createContext();

// export const EventProvider = ({ children }) => {
//   const [events, setEvents] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   const addEvent = (event) => {
//     setEvents((prev) => [...prev, { ...event, id: uuidv4() }]);
//   };

//   const deleteEvent = (id) => {
//     setEvents((prev) => prev.filter((e) => e.id !== id));
//   };

//   const updateEvent = (id, newTitle) => {
//     setEvents((prev) =>
//       prev.map((e) => (e.id === id ? { ...e, title: newTitle } : e))
//     );
//   };

//   return (
//     <EventContext.Provider
//       value={{
//         events,
//         selectedDate,
//         selectedEvent,
//         showAddModal,
//         showEditModal,
//         showDeleteModal,
//         setEvents,
//         setSelectedDate,
//         setSelectedEvent,
//         setShowAddModal,
//         setShowEditModal,
//         setShowDeleteModal,
//         addEvent,
//         deleteEvent,
//         updateEvent,
//       }}
//     >
//       {children}
//     </EventContext.Provider>
//   );
// };
import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => [...prev, { ...event, id: uuidv4() }]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const updateEvent = (id, newTitle) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, title: newTitle } : e))
    );
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};
