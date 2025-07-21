import React from 'react';
import Calendar from './components/Calendar';
import { EventProvider } from './context/EventContext';

export default function App() {
  return (
    <EventProvider>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">📆 Event Calendar</h1>
          <Calendar />
        </div>
      </main>
    </EventProvider>
  );
}