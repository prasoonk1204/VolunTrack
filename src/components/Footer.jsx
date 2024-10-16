import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="flex justify-around items-start space-y-4">
        <div className="flex flex-col gap-4 mt-5">
          <h3 className="text-lg">Our Social media </h3>
          <a href="#" className="text-white hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            Instagram
          </a>
        </div>
        <form className="flex flex-col space-y-2 w-full max-w-xs">
          <h3 className="text-lg">Get in Touch</h3>
          <input type="text" placeholder="Your Name" className="p-2 rounded" />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded hover:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded"
            rows="3"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
