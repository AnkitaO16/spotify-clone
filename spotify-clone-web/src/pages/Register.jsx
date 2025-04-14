import { useState } from "react";
import { Link } from "react-router-dom";
import musicImage from "../assets/672c876d3a42c5f4539c526d791eb01f.jpg"; // check the path is correct

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      {/* Left Image */}
      <div className="hidden md:block">
        <img
          src={musicImage}
          alt="Music"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center items-center bg-[#121212] px-6 py-12">
        <h1 className="text-4xl font-bold text-spotify mb-8">
          Create Your Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-spotify"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-spotify"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-[#1f1f1f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-spotify"
          />
          <button
            type="submit"
            className="w-full bg-spotify hover:bg-[#1aa34a] text-white p-3 rounded-md font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-spotify hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
