import React from "react";
import { FaHeadset } from "react-icons/fa";

const Support = () => {
  return (
    <section className=" mb-10 py-5 px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <FaHeadset className="text-6xl text-black mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          24/7 Customer Support
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          At HomeScape, we are committed to providing seamless support throughout your home buying or selling journey. Our team is always ready to assist you with any questions or challenges you may encounter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Live Chat Support */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Live Chat Support</h3>
            <p className="text-gray-600">
              Get immediate help with our live chat feature, available around the clock for quick assistance.
            </p>
          </div>

          {/* Phone Support */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phone Support</h3>
            <p className="text-gray-600">
              Speak directly with one of our experts for personalized advice at any time, day or night.
            </p>
          </div>

          {/* Email Support */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email Support</h3>
            <p className="text-gray-600">
              Reach out to us via email for detailed responses and solutions to any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
