import React, { useState } from "react";
import { db } from "../firebase"; // adjust path if firebase.js is in src/
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Saving appointment:", formData);

    try {
      await addDoc(collection(db, "appointments"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      alert("Appointment booked successfully!");

      // reset form after submit
      setFormData({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("Failed to book appointment. Try again.");
    }
  };

  return (
    <section id="appointment" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Appointment
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to schedule your appointment with our experts.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. John Smith">Dr. John Smith</option>
            <option value="Dr. Emily White">Dr. Emily White</option>
            <option value="Dr. Michael Lee">Dr. Michael Lee</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />
          <textarea
            name="notes"
            placeholder="Additional Notes (optional)"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
