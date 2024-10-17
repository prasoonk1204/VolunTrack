import React from "react";
import VNavbar from "./VNavbar";
import { events } from "./EventsData";
import { tasks } from "./TasksData";

const VDashboard = () => {
    const today = new Date();
    const upcomingEvents = events.filter((event) => event.date > today); // Show only future events
    const completedTasks = tasks.filter((task) => task.status === "Completed");
    const ongoingTasks = tasks.filter((task) => task.status === "Ongoing");
    const pendingTasks = tasks.filter((task) => task.status === "Pending");


  return (
    <div className="flex">
      {/* Sidebar */}
      <VNavbar />

      {/* Main content area */}
      <div className="ml-[20%] pl-8 w-full flex">
        {/* Left section for events and task summary */}
        <div className="flex-1 pt-8 ">
          <h1 className="text-3xl font-bold mb-6">Volunteer Dashboard</h1>

          {/* Upcoming Events */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md p-4 rounded-lg h-48"
                  >
                    <h3 className="font-bold text-lg">{event.name}</h3>
                    <p className="text-sm text-gray-600">
                      Date: {event.date.toDateString()}
                    </p>
                    <p className="mt-2">{event.description}</p>
                  </div>
                ))
              ) : (
                <p>No upcoming events.</p>
              )}
            </div>
          </section>

          {/* Task Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <p className="font-bold text-lg">
                You've completed {completedTasks.length} out of {tasks.length}{" "}
                assigned tasks.
              </p>
              <ul className="list-disc list-inside">
                {tasks.map((task, index) => (
                  <li key={index}>
                    {task.name}: {task.status}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Right section for volunteering hours and announcements */}
        <div className="w-[30%] ml-4 bg-gray-300 p-4 h-full">
          <section className="sticky top-8">
            {/* Volunteering Hours */}
            <div className="bg-white shadow-md p-4 rounded-lg mb-4">
              <h2 className="text-xl font-semibold mb-2">Volunteering Hours</h2>
              <p>Total Volunteering Hours: 12 hours</p>
            </div>

            {/* Announcements */}
            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
            <div className="bg-white shadow-md p-4 rounded-lg mb-4">
              <p>
                Don't forget to register for the upcoming beach cleanup event!
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg mb-4">
              <p>
                New volunteer opportunities available for the holiday season.
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <p>Check your tasks for updated information on assignments.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VDashboard;
