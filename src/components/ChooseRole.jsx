import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerView from "./VolunteerView";
import OrganizerView from "./OrganizerView";

const ChooseRole = () => {
  const [view, setView] = useState("volunteer"); // Default view
  const navigate = useNavigate();

  const handleVolunteerSignup = () => {
    navigate("/signup/volunteer"); // Redirect to the volunteer signup page
  };

  const handleOrganizerSignup = () => {
    navigate("/signup/organizer"); // Redirect to the organizer signup page
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Button Options */}
      <div className="w-full h-96 flex">
        {/* Volunteer Button */}
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-10
            ${
              view === "volunteer"
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-slate-100"
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
                : "bg-black text-white border-2 border-solid border-black"
            }`}
            onClick={handleVolunteerSignup}
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
                : "bg-white text-black hover:bg-slate-100"
            }`}
          onClick={() => setView("organizer")} // Disable if Volunteer view is active
        >
          <h1 className="text-4xl h-28">
            Connect, Coordinate, Contribute - Streamline Volunteer Management
            for Your Organization
          </h1>
          <button
            className={`px-4 py-2 rounded ${
              view === "organizer"
                ? "border-2 border-solid border-white transition-all text-white hover:bg-white hover:text-black"
                : "bg-black text-white border-2 border-solid border-black"
            }`}
            onClick={handleOrganizerSignup}
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
    </div>
  );
};

export default ChooseRole;
