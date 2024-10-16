// src/components/OrganizerSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganizerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    organization: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the signup logic here
    console.log("Organizer Signup Data: ", formData);
  };
  
  const navigate = useNavigate();

  const handleOrganizerLogin = () => {
    navigate("/login/organizer"); // Redirect to the organizer signup page
  };

  return (
    <div className="w-96 mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Organizer Signup</h2>
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
          <label className="block text-sm font-medium mb-1">Organization</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
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
          onClick={handleOrganizerLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default OrganizerSignup;
