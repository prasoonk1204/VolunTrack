import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizerView = () => {
  const navigate = useNavigate();

  const handleOrganizerSignup = () => {
    navigate("/signup/organizer"); // Redirect to the organizer login page
  };


  return (
    <div className="p-4">
      <div className="flex justify-between space-x-4 mb-6">
        {/* Welcome Message */}
        <h2 className="text-2xl font-semibold mb-4">Welcome, Organizer!</h2>

        {/* Buttons for Login/Signup */}

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-200"
          onClick={handleOrganizerSignup}
        >
          Login / Signup
        </button>
      </div>

      {/* Features Section */}
      <h3 className="text-xl font-semibold mt-6 mb-2">
        Key Features for Organizers
      </h3>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Event Management:</strong> Create and manage events
            efficiently.
          </li>
          <li className="mb-2">
            <strong>Volunteer Coordination:</strong> Organize and coordinate
            volunteers for various initiatives.
          </li>
          <li className="mb-2">
            <strong>Resource Allocation:</strong> Ensure proper allocation of
            resources for events.
          </li>
          <li className="mb-2">
            <strong>Feedback Collection:</strong> Gather feedback from
            volunteers and participants.
          </li>
          <li className="mb-2">
            <strong>Communication Tools:</strong> Stay connected with volunteers
            and stakeholders.
          </li>
          <li className="mb-2">
            <strong>Event Analytics:</strong> Analyze event performance and
            volunteer engagement.
          </li>
          <li className="mb-2">
            <strong>Promotional Support:</strong> Access tools for promoting
            your events.
          </li>
          <li className="mb-2">
            <strong>Collaboration Features:</strong> Work with other organizers
            and volunteers seamlessly.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrganizerView;
