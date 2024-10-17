import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Importing react-slick for carousel functionality
import FaqO from "./FaqO"; // Import the FAQ component

const OrganizerView = () => {
  const navigate = useNavigate();

  // Sample feature data
  const features = [
    {
      title: "Event Management",
      description: "Create and manage events efficiently.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Volunteer Coordination",
      description:
        "Organize and coordinate volunteers for various initiatives.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Resource Allocation",
      description: "Ensure proper allocation of resources for events.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Feedback Collection",
      description: "Gather feedback from volunteers and participants.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Communication Tools",
      description: "Stay connected with volunteers and stakeholders.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Event Analytics",
      description: "Analyze event performance and volunteer engagement.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Promotional Support",
      description: "Access tools for promoting your events.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Collaboration Features",
      description: "Work with other organizers and volunteers seamlessly.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
  ];

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1,
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 2000, // Duration between slides (in milliseconds)
    arrows: false, // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="flex justify-center mt-4">
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Features</h2>
      </div>

      {/* Features Section Carousel */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 shadow-lg rounded-lg p-6">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md h-80 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-gray-800">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <FaqO />
      </div>
    </div>
  );
};

export default OrganizerView;
