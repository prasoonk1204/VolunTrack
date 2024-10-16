import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizerView = () => {
  const navigate = useNavigate();


  return (
    <div className="p-8 bg-blue-500">
      <div className="flex justify-center m-3">
        {/* Welcome Message */}
        <h2 className="text-3xl font-semibold mb-4">Our Features</h2>
      </div>

      {/* Features Section */}
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
