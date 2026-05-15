import React from "react";
import Nav from "../../components/topnav/Nav";

const GuidePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-2xl w-full bg-zinc-900 p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl space-y-8">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto border border-zinc-700">
             <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-zinc-100 tracking-tight">User Guide</h1>
            <p className="text-zinc-500 font-medium italic">Content is currently under development.</p>
          </div>
          <div className="w-20 h-1 bg-zinc-100 mx-auto rounded-full opacity-20"></div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Stay tuned! We are crafting a detailed guide to help you get the most out of CodeSensei AI.
          </p>
        </div>
      </main>
    </div>
  );
};

export default GuidePage;
