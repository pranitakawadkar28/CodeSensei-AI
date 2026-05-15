import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/topnav/Nav";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, formData);
      localStorage.setItem("token", response.data.token);
      navigate("/review");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Nav />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="w-full max-w-[420px] bg-zinc-900 p-10 sm:p-12 rounded-[2rem] border border-zinc-800 shadow-2xl">
          <div className="text-center space-y-3 mb-10">
            <h1 className="text-3xl font-bold text-zinc-100 tracking-tight">Create Account</h1>
            <p className="text-zinc-500 font-medium">Join the professional network</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-100 focus:border-zinc-500 outline-none transition-all placeholder:text-zinc-800"
                placeholder="johndoe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-100 focus:border-zinc-500 outline-none transition-all placeholder:text-zinc-800"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400 ml-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-100 focus:border-zinc-500 outline-none transition-all placeholder:text-zinc-800"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 py-3 rounded-xl text-sm font-bold text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-100 text-zinc-950 font-bold py-4 rounded-xl transition-all hover:bg-white active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Sign up"}
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-500 font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-zinc-100 hover:underline transition-colors">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
