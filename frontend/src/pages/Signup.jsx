import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiAtSign, FiLock } from "react-icons/fi";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

        {/* Logo / avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-black font-bold text-xl">
            M
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent border border-emerald-500/40 rounded-lg pl-12 pr-4 py-3 text-white outline-none focus:border-emerald-400"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input
              name="email"
              placeholder="Email"
              className="w-full bg-transparent border border-emerald-500/40 rounded-lg pl-12 pr-4 py-3 text-white outline-none focus:border-emerald-400"
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div className="relative">
            <FiAtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input
              name="username"
              placeholder="Username"
              className="w-full bg-transparent border border-emerald-500/40 rounded-lg pl-12 pr-4 py-3 text-white outline-none focus:border-emerald-400"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border border-emerald-500/40 rounded-lg pl-12 pr-4 py-3 text-white outline-none focus:border-emerald-400"
              onChange={handleChange}
            />
          </div>

          <button
            disabled={loading}
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-sm text-center mt-4">{error}</p>
        )}

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
