import React, { useState } from "react";

const FaqO = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: "What is VolunTrack?",
      answer:
        "VolunTrack is a platform that connects volunteers with organizations and events, enabling them to contribute their skills and time to meaningful causes.",
    },
    {
      question: "How do I register my organization on VolunTrack?",
      answer:
        "To register your organization, click the 'Host as Organizer' button. After providing your organization details, you will be able to post events and start recruiting volunteers.",
    },
    {
      question: "How can I post a new event?",
      answer:
        "After logging into your organizer dashboard, click 'Create Event' and fill in the details such as event description, required volunteers, dates, and location. Once submitted, your event will be live on the platform.",
    },
    {
      question: "Can I track volunteer participation in my events?",
      answer:
        "Yes, VolunTrack provides tools to monitor volunteer attendance, performance, and participation hours. You can easily manage volunteer assignments and keep track of who has completed their tasks.",
    },
    {
      question: "What if I need to change event details after posting it?",
      answer:
        "You can edit event details from your dashboard at any time. Volunteers will be notified of any significant changes, such as the date or location of the event.",
    },
    {
      question: "What support does VolunTrack offer for event organizers?",
      answer:
        "VolunTrack provides comprehensive tools, including volunteer management, event tracking, and reporting features. Additionally, we offer customer support to assist with any platform-related issues.",
    },
  ];

  // State to manage which FAQ answer is visible
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4 text-white text-center">
        Frequently Asked Questions
      </h2>
      <div className="bg-blue-500 rounded-lg shadow-md p-4 flex flex-col items-center w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 w-3/4">
            <button
              className="w-full text-left p-2 px-8 bg-gray-100 focus:bg-gray-300 hover:bg-gray-300 text-black flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              <div>{faq.question}</div>
              <div className="ml-2">
                {visibleIndex === index ? (
                  <span>&#9650;</span>
                ) : (
                  <span>&#9660;</span>
                )}
              </div>
            </button>
            {visibleIndex === index && (
              <div className="p-2 px-8 bg-gray-100 text-left w-full">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqO;
