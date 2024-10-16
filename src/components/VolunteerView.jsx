import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Importing react-slick for carousel functionality

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
    <div className="p-8 bg-blue-500">
      <div className="flex justify-center m-3">
        {/* Welcome Message */}
        <h2 className="text-3xl font-semibold mb-4 text-white">Our Features</h2>
      </div>

      {/* Features Section Carousel */}
      <div className="bg-transparent shadow-lg rounded-lg p-4">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md h-80">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VolunteerView;
