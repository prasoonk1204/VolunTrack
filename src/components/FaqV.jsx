import React, { useState } from "react";

const FAQ = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: "What is VolunTrack?",
      answer:
        "VolunTrack is a platform that connects volunteers with organizations and events, enabling them to contribute their skills and time to meaningful causes.",
    },
    {
      question: "How do I sign up as a volunteer?",
      answer:
        "You can sign up by clicking the 'Join as Volunteer' button on the landing page and filling in your details. Once registered, you can browse available events and start volunteering.",
    },
    {
      question: "Can I volunteer for multiple events?",
      answer:
        "Yes, VolunTrack allows you to sign up for multiple events as long as there are no scheduling conflicts.",
    },
    {
      question: "Do I need prior experience to volunteer?",
      answer:
        "No, VolunTrack welcomes volunteers of all skill levels. Each event will specify if any specific skills or experience are required.",
    },
    {
      question: "Can I earn certificates for volunteering?",
      answer:
        "Yes, after completing an event, you can receive a certificate of participation or appreciation, depending on the organizer's policy.",
    },
    {
      question: "What if I need to cancel my participation in an event?",
      answer:
        "You can cancel your participation from your dashboard. However, we recommend giving notice as early as possible so the organizer can make other arrangements.",
    },
  ];

  // State to manage which FAQ answer is visible
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="my-12 flex flex-col items-center">
      {/* FAQ Section Title */}
      <h2 className="text-4xl font-bold mb-8 text-gray-800text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full mb-4">
            <button
              className="w-full text-left p-4 bg-gray-100 rounded-t-lg flex justify-between items-center hover:bg-gray-200 transition-colors duration-300"
              onClick={() => toggleAnswer(index)}
            >
              {/* Question */}
              <span className="font-semibold text-lg text-gray-800">
                {faq.question}
              </span>

              {/* Expand/Collapse Icon */}
              <span className="text-gray-500">
                {visibleIndex === index ? (
                  <span>&#9650;</span> // Up arrow
                ) : (
                  <span>&#9660;</span> // Down arrow
                )}
              </span>
            </button>

            {/* Answer (shown when active) */}
            {visibleIndex === index && (
              <div className="p-4 bg-gray-50 rounded-b-lg border-l-4 text-gray-700 transition-opacity duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
