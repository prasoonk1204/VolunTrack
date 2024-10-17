import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerView from "./VolunteerView";
import OrganizerView from "./OrganizerView";
import Header from "./Header";
import Footer from "./Footer";
import VDashboard from "./volunteer/VDashboard";

const ChooseRole = () => {
  const [view, setView] = useState("volunteer"); // Default view
  const navigate = useNavigate();

  // Directly navigate to volunteer dashboard
  const handleVolunteerDashboard = () => {
    navigate("/volunteer/dashboard"); // Redirect to the volunteer dashboard
  };

  const handleOrganizerDashboard = () => {
    navigate("/organizer/dashboard"); // Redirect to the organizer dashboard
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      {/* Button Options */}
      <div className="w-full h-96 flex">
        {/* Volunteer Button */}
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-10
            ${
              view === "volunteer"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 hover:bg-slate-100"
            }`}
          onClick={() => setView("volunteer")}
        >
          <h1 className="text-4xl h-28">
            Engage, Empower, Impact – Join the Movement and Make a Difference!
          </h1>
          <button
            className={`mr-4 px-4 py-2 rounded ${
              view === "volunteer"
                ? "border-2 border-solid border-white transition-all text-white hover:bg-white hover:text-black"
                : "bg-gray-800 text-white border-2 border-solid border-gray-800"
            }`}
            onClick={handleVolunteerDashboard} // Updated to navigate to dashboard
            disabled={view === "organizer"}
          >
            Join as Volunteer
          </button>
        </button>

        {/* Organizer Button */}
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-10
            ${
              view === "organizer"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 hover:bg-slate-100"
            }`}
          onClick={() => setView("organizer")}
        >
          <h1 className="text-4xl h-28">
            Connect, Coordinate, Contribute - Streamline Volunteer Management
            for Your Organization
          </h1>
          <button
            className={`px-4 py-2 rounded ${
              view === "organizer"
                ? "border-2 border-solid border-white transition-all text-white hover:bg-white hover:text-black"
                : "bg-gray-800 text-white border-2 border-solid border-gray-800"
            }`}
            onClick={handleOrganizerDashboard}
            disabled={view === "volunteer"} // Disable if Volunteer view is active
          >
            Host as Organizer
          </button>
        </button>
      </div>

      {/* Content Based on Selected View */}
      <div className="w-full rounded-2xl">
        {view === "volunteer" ? <VolunteerView /> : <OrganizerView />}
      </div>
      <Footer />
    </div>
  );
};

export default ChooseRole;
