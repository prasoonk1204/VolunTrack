import React from "react";
import { useNavigate } from "react-router-dom";

const VolunteerView = () => {
  const navigate = useNavigate();


  return (
    <div className="p-8 bg-blue-500">
      <div className="flex justify-center m-3">
        {/* Welcome Message */}
        <h2 className="text-3xl font-semibold mb-4">Our Features</h2> 
      </div>

      {/* Features Section */}
      <h3 className="text-xl font-semibold mt-6 mb-2">
        Key Features for Volunteers
      </h3>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Event Participation:</strong> Sign up for various community
            events and initiatives.
          </li>
          <li className="mb-2">
            <strong>Track Volunteer Hours:</strong> Keep a record of your
            volunteer hours for recognition and experience.
          </li>
          <li className="mb-2">
            <strong>Community Engagement:</strong> Connect with other volunteers
            and community members.
          </li>
          <li className="mb-2">
            <strong>Skill Development:</strong> Opportunities for training and
            skill enhancement through workshops.
          </li>
          <li className="mb-2">
            <strong>Flexible Scheduling:</strong> Choose events that fit your
            schedule and availability.
          </li>
          <li className="mb-2">
            <strong>Feedback and Support:</strong> Provide feedback on events
            and receive support from coordinators.
          </li>
          <li className="mb-2">
            <strong>Networking Opportunities:</strong> Meet like-minded
            individuals and build lasting connections.
          </li>
          <li className="mb-2">
            <strong>Newsletter Updates:</strong> Receive updates on upcoming
            events and volunteer opportunities.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VolunteerView;
