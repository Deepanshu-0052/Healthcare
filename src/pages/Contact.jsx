import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error saving message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Get in Touch
        </h2>
        <p className="mt-4 text-gray-600 text-center mb-12">
          Have questions or need support? Reach out to us and we'll respond promptly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">
                123 Health Street, Wellness City, Country
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">support@healthcare.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700">+123 456 7890</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
