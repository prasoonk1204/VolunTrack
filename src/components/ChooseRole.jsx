import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerView from "./VolunteerView";
import OrganizerView from "./OrganizerView";
import Header from "./Header";
import Footer from "./Footer";

const ChooseRole = () => {
  const [view, setView] = useState("volunteer"); // Default view
  const navigate = useNavigate();

  const handleVolunteerDashboard = () => {
    navigate("/volunteer/dashboard"); // Redirect to the volunteer dashboard
  };

  const handleOrganizerDashboard = () => {
    navigate("/organizer/dashboard"); // Redirect to the organizer dashboard
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 min-h-screen">
      <Header />

      {/* Button Options */}
      <div className="w-full h-96 flex justify-center gap-8 my-8 p-4">
        {/* Volunteer Button */}
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-8 py-8 px-4 rounded-2xl shadow-lg transition-all
            ${
              view === "volunteer"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:bg-slate-100"
            }`}
          onClick={() => setView("volunteer")}
        >
          <h1 className="text-3xl font-bold text-center leading-snug">
            Engage, Empower, Impact – Join the Movement and Make a Difference!
          </h1>
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all
              ${
                view === "volunteer"
                  ? "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
                  : "bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-700"
              }`}
            onClick={handleVolunteerDashboard} // Updated to navigate to dashboard
            disabled={view === "organizer"} // Disable if Organizer view is active
          >
            Join as Volunteer
          </button>
        </button>

        {/* Organizer Button */}
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-8 py-8 px-4 rounded-2xl shadow-lg transition-all
            ${
              view === "organizer"
                ? "bg-gradient-to-r from-green-500 to-teal-600 text-white"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:bg-slate-100"
            }`}
          onClick={() => setView("organizer")}
        >
          <h1 className="text-3xl font-bold text-center leading-snug">
            Connect, Coordinate, Contribute – Streamline Volunteer Management
            for Your Organization
          </h1>
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all
              ${
                view === "organizer"
                  ? "bg-white text-green-500 hover:bg-green-500 hover:text-white"
                  : "bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-700"
              }`}
            onClick={handleOrganizerDashboard} // Updated to navigate to dashboard
            disabled={view === "volunteer"} // Disable if Volunteer view is active
          >
            Host as Organizer
          </button>
        </button>
      </div>

      {/* Content Based on Selected View */}
      <div className="w-full rounded-2xl px-4">
        {view === "volunteer" ? <VolunteerView /> : <OrganizerView />}
      </div>

      <Footer />
    </div>
  );
};

export default ChooseRole;
