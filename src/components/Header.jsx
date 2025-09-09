import React from "react";
import { CalendarDays } from "lucide-react";

const Header = () => {
  // Scroll to booking section with offset for sticky navbar
  const handleBookClick = () => {
    const bookingSection = document.getElementById("booking");
    const navbar = document.getElementById("navbar"); // if you have navbar
    if (bookingSection) {
      const offset = navbar ? navbar.offsetHeight : 0;
      const elementPosition = bookingSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Book Your Doctor’s Appointment{" "}
            <span className="text-yellow-300">Easily</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Connect with trusted doctors online. Fast, secure, and reliable
            healthcare at your fingertips.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBookClick}
              className="flex items-center gap-2 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-shadow shadow-md hover:shadow-lg"
            >
              <CalendarDays className="w-5 h-5" /> Book Appointment
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <img
            src="/Images/hello.jpg"
            alt="Doctor illustration"
            className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
    </header>
  );
};

export default Header;
