import React from "react";

const Investment = () => {
  return (
    <section className=" py-10 mb-10 px-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Investment Opportunities</h2>
        <p className="text-gray-600 text-lg text-center   mb-8">
          The real estate market presents a multitude of opportunities for
          investors to grow their wealth. Whether you're interested in
          residential or commercial properties, we provide you with the tools
          and resources you need to make informed investment decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">High-ROI Properties</h3>
            <p>
              Our team carefully selects high-return investment properties,
              ensuring you maximize your profit potential in the competitive
              real estate market.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Expert Guidance</h3>
            <p>
              Our experienced investment advisors provide personalized advice
              to help you navigate the complexities of real estate investments.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Global Opportunities</h3>
            <p>
              With a network of global property listings, you can access
              lucrative investment opportunities from across the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
