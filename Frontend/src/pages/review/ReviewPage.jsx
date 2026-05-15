import React, { useRef, useState, useEffect } from "react";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import Nav from "../../components/topnav/Nav";
import CodeArea from "../../components/codeArea/CodeArea";
import ReviewArea from "../../components/reviewArea/ReviewArea";

const ReviewPage = () => {
  const [review, setReview] = useState("");
  const [code, setcode] = useState(`// Professional AI Code Review\n\nfunction calculateMetrics(data) {\n  return data.map(item => item.value * 2);\n}`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setReview("");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/ai/review`, { code });
      setReview(response.data.data.review || response.data);
    } catch (error) {
      setReview("### ❌ Error\nFailed to reach the AI engine. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 overflow-hidden">
      <Nav />
      <main className="flex-grow flex flex-col md:flex-row p-6 gap-6 overflow-hidden">
        {/* Editor Panel */}
        <div className="flex-[1.2] flex flex-col bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative shadow-2xl">
          <div className="bg-zinc-800/50 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Workspace / editor.js</span>
            <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            </div>
          </div>
          
          <div className="flex-grow overflow-auto">
            <CodeArea code={code} setcode={setcode} />
          </div>
          
          <div className="absolute bottom-6 right-6 z-20">
            <button
              onClick={() => !loading && reviewCode()}
              disabled={loading}
              className={`px-8 py-3 rounded-xl font-bold transition-all shadow-2xl
                ${loading 
                  ? "bg-zinc-800 text-zinc-600 cursor-not-allowed border border-zinc-700" 
                  : "bg-zinc-100 text-zinc-950 hover:bg-white active:scale-95"
                }`}
            >
              {loading ? "Analyzing..." : "Run Review"}
            </button>
          </div>
        </div>

        {/* Feedback Panel */}
        <div className="flex-1 flex flex-col bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="bg-zinc-800/50 px-6 py-3 border-b border-zinc-800 flex items-center gap-2">
             <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
             <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">AI Diagnostics</span>
          </div>
          
          <div className="flex-grow overflow-auto p-8 text-zinc-400 font-normal leading-relaxed">
            {review ? (
              <ReviewArea loading={loading} review={review} />
            ) : !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest">Awaiting Analysis</p>
              </div>
            )}
            {loading && <ReviewArea loading={loading} review="### Analyzing code structure..." />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
