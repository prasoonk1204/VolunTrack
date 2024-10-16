import React from "react";
import { useNavigate } from "react-router-dom";

const VolunteerView = () => {
  const navigate = useNavigate();


  return (
    <div className="p-4 ">
      <div className="flex justify-between space-x-4 mb-6">
        {/* Welcome Message */}
        <h2 className="text-2xl font-semibold mb-4">Welcome, Volunteer!</h2>
      </div>

      {/* Feature Buttons in Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Event Participation */}
        <div
          className="bg-pink-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/features/event-participation")}
        >
          <h3 className="text-2xl font-semibold mb-2">Event Participation</h3>
          <p className="text-center mb-4">
            Participate in various events organized for community welfare and volunteering.
          </p>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            Visit page
          </button>
        </div>

        {/* Track Volunteer Hours */}
        <div
          className="bg-green-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/features/track-volunteer-hours")}
        >
          <h3 className="text-2xl font-semibold mb-2">Track Volunteer Hours</h3>
          <p className="text-center mb-4">
            Keep track of your volunteer hours and get recognized for your efforts.
          </p>
          <button className="bg-white text-green-500 py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            Visit page
          </button>
        </div>

        {/* Community Engagement */}
        <div
          className="bg-orange-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/features/community-engagement")}
        >
          <h3 className="text-2xl font-semibold mb-2">Community Engagement</h3>
          <p className="text-center mb-4">
            Engage with your local community through various volunteering initiatives.
          </p>
          <button className="bg-white text-yellow-500 py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            Visit page
          </button>
        </div>

        {/* Skill Development */}
        <div
          className="bg-red-500 text-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate("/features/skill-development")}
        >
          <h3 className="text-2xl font-semibold mb-2">Skill Development</h3>
          <p className="text-center mb-4">
            Develop new skills and gain valuable experience through volunteering.
          </p>
          <button className="bg-white text-red-500 py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            Visit page
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerView;
