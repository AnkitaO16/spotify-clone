import { useState } from "react"
import { Link } from "react-router-dom"
import musicImage from "/Users/cspl_ankita/git-AnkitaO16/spotify-clone/spotify-clone-web/src/assets/672c876d3a42c5f4539c526d791eb01f.jpg"
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit to backend
    console.log(form)
  }

  return (
    <div className="flex h-screen w-full">
      <div className="hidden md:flex w-1/2 bg-black">
        <img
          src={musicImage}
          alt="music"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-[#121212] text-white p-8">
        <h1 className="text-4xl font-bold mb-6 text-spotify">Welcome Back</h1>

        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-gray-600 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#1f1f1f] border border-gray-600 focus:outline-none"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-spotify hover:bg-[#1aa34a] p-3 rounded-lg font-semibold transition"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-spotify hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
