import React from "react";
import { useNavigate } from "react-router-dom";

const VNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 h-screen w-1/5 p-4 pt-2 fixed left-0 top-0">
      <button
        className="flex py-6 justify-center w-full"
        onClick={() => navigate("./")}
      >
        <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-3xl text-white font-bold">VolunTrack</h1>
      </button>
      <ul className="space-y-4 text-white ">
        <li>
          <button
            onClick={() => navigate("/volunteer/dashboard")}
            className="w-full bg-gray-800 hover:bg-gray-700 p-2 text-center rounded-lg"
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/volunteer/events")}
            className="w-full bg-gray-800 hover:bg-gray-700 p-2 text-center rounded-lg"
          >
            Event List
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/volunteer/tasks")}
            className="w-full bg-gray-800 hover:bg-gray-700 p-2 text-center rounded-lg"
          >
            My Tasks
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/volunteer/calendar")}
            className="w-full bg-gray-800 hover:bg-gray-700 p-2 text-center rounded-lg"
          >
            Calendar
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/volunteer/profile")}
            className="w-full bg-gray-800 hover:bg-gray-700 p-2 text-center rounded-lg"
          >
            Profile
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default VNavbar;
