import React, { useState } from "react";
import VNavbar from "./VNavbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { events } from "./EventsData"; // Importing shared events data

const VCalendar = () => {
  const [date, setDate] = useState(new Date());

  const selectedEvents = events.filter(
    (event) => event.date.toDateString() === date.toDateString()
  );

  return (
    <div className="flex w-screen h-screen bg-gray-200">
      <VNavbar />
      <div className="ml-[20%] p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Volunteer Calendar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
            <Calendar
              onChange={setDate}
              value={date}
              tileClassName={({ date, view }) =>
                view === "month" &&
                events.some(
                  (event) => event.date.toDateString() === date.toDateString()
                )
                  ? "highlight-event"
                  : null
              }
            />
          </div>

          {/* Events on the Selected Date */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">
              Events on {date.toDateString()}
            </h2>
            {selectedEvents.length > 0 ? (
              <ul className="space-y-4 w-full">
                {selectedEvents.map((event, index) => (
                  <li
                    key={index}
                    className="p-4 bg-blue-100 rounded-lg text-blue-900"
                  >
                    {event.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No events on this date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCalendar;
