import React, { useState } from "react";
import VNavbar from "./VNavbar";
import { tasks as initialTasks } from "./TasksData"; // Importing tasks data

const VTasks = () => {
  const [tasks, setTasks] = useState(initialTasks); // Using imported tasks data

  // Function to toggle between Completed and Pending statuses
  const toggleTaskStatus = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  // Sort tasks to move completed tasks to the end
  const sortedTasks = [...tasks].sort((a, b) => {
    return a.status === "Completed" ? 1 : b.status === "Completed" ? -1 : 0;
  });

  return (
    <div className="flex w-screen h-lvh">
      {/* Sidebar */}
      <VNavbar />

      {/* Main content area */}
      <div className="ml-[20%] p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">My Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTasks.map((task, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md min-h-48 relative ${
                task.status === "Completed" ? "bg-green-100" : "bg-white"
              }`}
            >
              <h3 className="font-bold text-lg">{task.name}</h3>
              <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
              <p
                className={`mt-2 font-bold absolute bottom-16 ${
                  task.status === "Completed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {task.status}
              </p>

              {/* Button to mark as Complete/Incomplete */}
              <button
                className={`mt-4 text-white py-2 px-4 rounded absolute bottom-4 ${
                  task.status === "Pending"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => toggleTaskStatus(index)}
              >
                {task.status === "Pending"
                  ? "Mark as Completed"
                  : "Mark as Incomplete"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VTasks;
