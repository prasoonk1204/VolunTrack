import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Importing react-slick for carousel functionality
import FAQ from "./FaqV"; // Import the FAQ component

const VolunteerView = () => {
  const navigate = useNavigate();

  // Sample feature data
  const features = [
    {
      title: "Event Participation",
      description: "Sign up for various community events and initiatives.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Track Volunteer Hours",
      description:
        "Keep a record of your volunteer hours for recognition and experience.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Community Engagement",
      description: "Connect with other volunteers and community members.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Skill Development",
      description:
        "Opportunities for training and skill enhancement through workshops.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Flexible Scheduling",
      description: "Choose events that fit your schedule and availability.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Feedback and Support",
      description:
        "Provide feedback on events and receive support from coordinators.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Networking Opportunities",
      description:
        "Meet like-minded individuals and build lasting connections.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
    },
    {
      title: "Newsletter Updates",
      description:
        "Receive updates on upcoming events and volunteer opportunities.",
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
      <div className="flex justify-center mt-4 mb-8">
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold text-gray-800">Our Features</h2>
      </div>

      {/* Features Section Carousel */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl rounded-lg p-6">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md h-80 transition-transform transform hover:scale-105">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
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
        <FAQ /> {/* Add the FAQ component here */}
      </div>
    </div>
  );
};

export default VolunteerView;
