import React, { useState } from "react";

const FAQ = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: "What is VolunTrack?",
      answer: "VolunTrack is a platform that connects volunteers with organizations in need of help.",
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking on the 'Get Started' button on the landing page.",
    },
    {
      question: "Can I volunteer for multiple events?",
      answer: "Yes, you can volunteer for as many events as you like!",
    },
    {
      question: "What kind of events can I participate in?",
      answer: "We offer a variety of events including community service, fundraising, and awareness campaigns.",
    },
  ];

  // State to manage which FAQ answer is visible
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4 text-white text-center">Frequently Asked Questions</h2>
      <div className="bg-blue-500 rounded-lg shadow-md p-4 flex flex-col items-center w-3/4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 w-full">
            <button
              className="w-full text-left p-2 bg-gray-200 text-black rounded-lg"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-center">{faq.question}</div>
            </button>
            {visibleIndex === index && (
              <div className="p-2 bg-gray-100 rounded-lg text-center w-full">
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
