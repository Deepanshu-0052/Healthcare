import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="/Images/Doctor1.jpg"
            alt="Doctor 1"
            className="w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/Images/Doctor2.jpg"
            alt="Doctor 2"
            className="w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/Images/Doctor3.jpg"
            alt="Doctor 3"
            className="w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/Images/Doctor4.jpg"
            alt="Doctor 4"
            className="w-full h-48 md:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Description */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Welcome to Healthcare
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            At Healthcare, we provide top-notch medical services with experienced doctors and advanced technology.
            Our mission is to make healthcare accessible, reliable, and convenient for everyone.
            We focus on patient care, comfort, and long-term wellness.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
