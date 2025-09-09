import React, { useState } from "react";
import { Stethoscope, CalendarDays, User, Menu, X } from "lucide-react";
import { auth } from "../firebase"; // import auth
import { signInWithEmailAndPassword } from "firebase/auth";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  // Smooth scroll
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert("Login successful ✅");
      setLoginOpen(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      {/* Navbar content (same as your code) */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-blue-600 font-bold text-xl cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <Stethoscope className="w-6 h-6" />
          <span>HealthCare</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li onClick={() => handleScroll("home")} className="hover:text-blue-600 cursor-pointer">Home</li>
          <li onClick={() => handleScroll("about")} className="hover:text-blue-600 cursor-pointer">About</li>
          <li onClick={() => handleScroll("services")} className="hover:text-blue-600 cursor-pointer">Services</li>
          <li onClick={() => handleScroll("doctors")} className="hover:text-blue-600 cursor-pointer">Doctors</li>
          <li onClick={() => handleScroll("appointment")} className="hover:text-blue-600 cursor-pointer">Appointments</li>
          <li onClick={() => handleScroll("contact")} className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => handleScroll("appointment")}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            <CalendarDays className="w-4 h-4" /> Book Now
          </button>
          {user ? (
            <span className="text-gray-600">Welcome, {user.email}</span>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              <User className="w-4 h-4" /> Login
            </button>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
