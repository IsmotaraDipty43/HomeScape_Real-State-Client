import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl  text-center font-bold mt-20 mb-8">  Get In Touch With HomeScape</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>

      {/* Contact Details */}
<div className="flex flex-col items-center justify-center text-center">
  <h3 className="text-2xl font-semibold mb-6 text-black">Our Office</h3>
  <ul className="space-y-4 text-gray-700">
    <li className="flex items-center justify-center">
      <FaMapMarkerAlt className="mr-2 text-blue-500" />
      <span>Dhaka, Bangladesh</span>
    </li>
    <li className="flex items-center justify-center">
      <FaPhone className="mr-2 text-blue-500" />
      <span>+880 123-456-7890</span>
    </li>
    <li className="flex items-center justify-center">
      <FaEnvelope className="mr-2 text-blue-500" />
      <span>support@homescape.com</span>
    </li>
  </ul>

  <div className="mt-8 flex space-x-6 justify-center">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
      <FaFacebook size={28} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
      <FaTwitter size={28} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
      <FaInstagram size={28} />
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default ContactPage;
