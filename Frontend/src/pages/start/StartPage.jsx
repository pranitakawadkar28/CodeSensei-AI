import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/topnav/Nav";

const StartPage = () => {
  const [ready, setReady] = useState(false);
  const [info, setInfo] = useState("Checking system status...");
  const token = localStorage.getItem("token");

  async function connect() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/home/connect`);
      if (response.status === 200) setReady(true);
    } catch (error) {
      setInfo("Service unavailable");
    }
  }

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-3xl w-full space-y-10">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100">
              Professional <br />
              Code Intelligence
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
              Instantly identify bugs, security flaws, and performance bottlenecks with our Gemini-powered review engine.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {ready ? (
              <div className="flex gap-4">
                <Link to={token ? "/review" : "/login"}>
                  <button className="bg-zinc-100 text-zinc-950 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-xl shadow-white/5 active:scale-95">
                    {token ? "Open Workspace" : "Get Started"}
                  </button>
                </Link>
                {!token && (
                  <Link to="/about">
                    <button className="px-10 py-4 rounded-xl font-bold text-lg text-zinc-400 hover:text-zinc-100 transition-all">
                      Learn More
                    </button>
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-zinc-300">{info}</span>
              </div>
            )}
            
            <div className="pt-12 flex items-center gap-8 opacity-20 grayscale">
               <span className="text-xs font-bold uppercase tracking-widest text-zinc-100">React</span>
               <span className="text-xs font-bold uppercase tracking-widest text-zinc-100">NodeJS</span>
               <span className="text-xs font-bold uppercase tracking-widest text-zinc-100">Gemini</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartPage;
