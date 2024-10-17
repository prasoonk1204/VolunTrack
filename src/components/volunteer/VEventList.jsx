import React from "react";
import VNavbar from "./VNavbar";
import { events } from "./EventsData"; // Importing shared events data

const VEventList = () => {
  // Sort events by date
  const sortedEvents = events.sort((a, b) => a.date - b.date);

  return (
    <div className="flex">
      {/* Sidebar */}
      <VNavbar />

      {/* Main content area */}
      <div className="ml-[20%] p-8 w-full h-lvh">
        <h1 className="text-3xl font-bold mb-6">Event List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg min-h-56 relative"
            >
              <h3 className="font-bold text-lg">{event.name}</h3>
              <p className="text-sm text-gray-600">
                Date: {event.date.toDateString()}
              </p>
              <p className="mt-2">{event.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded absolute bottom-4">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VEventList;
