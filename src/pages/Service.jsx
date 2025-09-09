import React from "react";
import { Stethoscope, HeartPulse, ShieldCheck, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "General Consultation",
    description:
      "Get expert advice from our certified doctors. Fast, reliable, and accessible medical consultations.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-red-600" />,
    title: "Cardiology Services",
    description:
      "Advanced cardiac care and diagnostics from experienced cardiologists for a healthy heart.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Preventive Care",
    description:
      "Preventive screenings and health checkups to ensure long-term wellness and early detection.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-yellow-500" />,
    title: "Appointment Scheduling",
    description:
      "Easily schedule appointments online with your preferred doctors and clinics.",
  },
];

const Service = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 text-center mb-12">
          Explore the wide range of healthcare services we offer for your well-being.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
