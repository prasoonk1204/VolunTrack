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
    <div className="mt-8 flex flex-col items-center">
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

export default FAQ;
