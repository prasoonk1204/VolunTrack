// src/components/VolunteerSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the signup logic here
    console.log("Volunteer Signup Data: ", formData);
  };

  const navigate = useNavigate();

  const handleVolunteerLogin = () => {
    navigate("/login/volunteer"); // Redirect to the organizer signup page
  };

  return (
    <div className="w-96 mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Volunteer Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Availability</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mb-4"
        >
          Signup
        </button>
      </form>
      <p className="mb-4">
        Already have an account?{" "}
        <span
          className="text-blue-500 hover:underline"
          onClick={handleVolunteerLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default VolunteerSignup;
