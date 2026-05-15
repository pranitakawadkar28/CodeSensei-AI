import React from "react";
import Nav from "../../components/topnav/Nav";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-8 sm:p-20">
        <div className="max-w-4xl w-full bg-zinc-900 p-12 sm:p-16 rounded-[2.5rem] border border-zinc-800 shadow-2xl space-y-16">
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-zinc-100 tracking-tight">About the Project</h1>
            <div className="w-20 h-1 bg-zinc-100 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">
                CodeSensei AI
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                CodeSensei is a professional-grade AI tool designed to analyze JavaScript codebases. By utilizing advanced Generative AI, we provide instant insights into code structure, efficiency, and potential bugs, helping developers maintain high standards in their software projects.
              </p>
            </div>

            {/* Developer Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">
                Our Vision
              </h2>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                We believe in simplifying the development workflow. Our goal is to empower developers with real-time feedback that acts as a second pair of eyes, ensuring that every line of code is optimized for performance and maintainability.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-zinc-800 text-center">
             <p className="text-zinc-600 text-sm font-medium tracking-widest uppercase">Built with Modern Tech • React • Node • Gemini</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
