import React from 'react';
import profileImg from '../assets/formal_aniket_image.jpg';
import resumePDF from '../assets/Aniket_Sapehia_CV (1).pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 flex flex-col items-start text-left z-10">
          <p className="text-cyan-400 md:text-4xl font-mono mb-4 text-lg">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            Aniket Sapehia.
          </h1>
          <h2 className="text-4xl md:text-4xl font-bold text-slate-400 mb-6 tracking-tight">
            I am a Machine Learning engineer and a frontend web developer.
          </h2>
          <p className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed">
            I'm a 3rd year Computer Science and Engineering student at Lovely Professional University. Currently, I'm focused on learning and implementing machine learning and solving complex problems.
          </p>
          
          {/* Button Group */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors duration-300 font-mono backdrop-blur-sm">
              Check out my work!
            </a>
            
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noopener noreferrer"
              download="Aniket_Sapehia_Resume.pdf"
              className="px-8 py-4 bg-cyan-400 text-slate-900 rounded hover:bg-cyan-300 transition-colors duration-300 font-mono font-bold"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center z-10">
          {/* Main Container with responsive sizing */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            
            {/* Background Decorative Animations */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border-2 border-cyan-400/50 border-dashed animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-blue-500/30"></div>
            
            {/* Image Container */}
            <div className="relative rounded-full w-full h-100 overflow-hidden flex items-center justify-center border-4 border-slate-700 bg-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img 
                src={profileImg} 
                alt="Aniket Sapehia" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;