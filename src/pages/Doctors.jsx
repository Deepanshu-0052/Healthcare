import React, { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    image: "/Images/Doctor1.jpg",
    email: "sarah.johnson@healthcare.com",
    education: "MD, Cardiology, Harvard Medical School",
    experience: "10 years in cardiac care and interventions",
    description:
      "Dr. Sarah Johnson is a leading cardiologist specializing in heart disease treatment and prevention. She focuses on patient-centered care and long-term heart health.",
  },
  {
    id: 2,
    name: "Dr. Michael Smith",
    specialization: "Dermatologist",
    image: "/Images/Doctor2.jpg",
    email: "michael.smith@healthcare.com",
    education: "MD, Dermatology, Johns Hopkins University",
    experience: "8 years in skin care and dermatological treatments",
    description:
      "Dr. Michael Smith is an expert dermatologist providing advanced treatments for skin disorders. He believes in holistic care for healthy and glowing skin.",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialization: "Pediatrician",
    image: "/Images/Doctor3.jpg",
    email: "emily.davis@healthcare.com",
    education: "MD, Pediatrics, Stanford University",
    experience: "7 years caring for children from newborn to teen",
    description:
      "Dr. Emily Davis provides compassionate pediatric care, focusing on preventive health and growth monitoring. She loves creating a friendly environment for kids.",
  },
  {
    id: 4,
    name: "Dr. John Williams",
    specialization: "Orthopedic",
    image: "/Images/Doctor4.jpg",
    email: "john.williams@healthcare.com",
    education: "MD, Orthopedics, University of California",
    experience: "12 years in orthopedic surgery and rehabilitation",
    description:
      "Dr. John Williams is a highly skilled orthopedic surgeon specializing in bone and joint health. His goal is to restore mobility and improve quality of life.",
  },
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Appointment booked with ${selectedDoctor.name}\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📅 Date: ${formData.date}`
    );
    setShowBooking(false);
    setSelectedDoctor(null);
    setFormData({ name: "", email: "", date: "" });
  };

  return (
    <section id="booking" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Meet Our Doctors
        </h2>
        <p className="mt-4 text-gray-600 text-center mb-12">
          Our experienced doctors across all specialties are here to provide
          top-notch care.
        </p>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 object-cover rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-gray-600 mb-4">{doctor.specialization}</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && !showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-32 h-32 object-cover rounded-full shadow-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedDoctor.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-2">
                {selectedDoctor.specialization}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Education:</span>{" "}
                {selectedDoctor.education}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Experience:</span>{" "}
                {selectedDoctor.experience}
              </p>
              <p className="text-gray-600 mt-4">
                {selectedDoctor.description}
              </p>
              <button
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => setShowBooking(true)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {selectedDoctor && showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Book Appointment with {selectedDoctor.name}
            </h3>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctors;
