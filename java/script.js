import React, { useState, useEffect } from 'react';
import './App.css'; // We will put our custom neon/animations here

export default function App() {
  // REACT HOOK: Tracks scroll position for the sticky animation
  const [scrollData, setScrollData] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate if the hero animation should trigger (scrolled past 100px)
  const isScrolled = scrollData > 100;

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR COMPONENT */}
      <nav className={`fixed w-full z-50 transition-all duration-300 flex justify-between items-center px-8 py-5 ${scrollData > 50 ? 'bg-black/90 backdrop-blur-md border-b border-[#222]' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          {/* Neon Green Active Dot */}
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
          <span className="text-xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Avan IT
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 font-semibold text-gray-400 text-sm">
          <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#solutions" className="hover:text-yellow-400 transition-colors">Solutions</a>
        </div>

        {/* Deep Red Action Button */}
        <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded font-bold tracking-wide transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          EXECUTE
        </button>
      </nav>

      {/* 2. STICKY HERO COMPONENT */}
      <div className="h-[150vh] relative">
        <section className="sticky top-0 h-screen flex flex-col justify-center items-center metallic-bg overflow-hidden">
          
          <div className={`text-center z-10 transition-all duration-700 ${isScrolled ? 'opacity-10 scale-95' : 'opacity-100 scale-100'}`}>
            <span className="text-orange-500 border border-orange-500/30 bg-orange-500/10 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 inline-block">
              INTELLIGENCE & INNOVATION
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Avan IT Solutions
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">Advancing the digital frontier.</p>
          </div>

          {/* Animated Flying Words */}
          <div className={`pop-word ${isScrolled ? 'top-[25%] left-[20%] opacity-100 scale-100' : 'top-1/2 left-1/2 opacity-0 scale-75'}`}>
            <span className="text-neon-green">⚡</span> Development
          </div>
          <div className={`pop-word ${isScrolled ? 'top-[25%] left-[80%] opacity-100 scale-100' : 'top-1/2 left-1/2 opacity-0 scale-75'}`}>
            <span className="text-gold">⚙️</span> Implementation
          </div>
          <div className={`pop-word ${isScrolled ? 'top-[75%] left-[20%] opacity-100 scale-100' : 'top-1/2 left-1/2 opacity-0 scale-75'}`}>
            <span className="text-red-500">🛡️</span> Support
          </div>
          <div className={`pop-word ${isScrolled ? 'top-[75%] left-[80%] opacity-100 scale-100' : 'top-1/2 left-1/2 opacity-0 scale-75'}`}>
            <span className="text-orange-500">👥</span> Staffing
          </div>
        </section>
      </div>

      {/* 3. TECH MARQUEE COMPONENT */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#222] overflow-hidden">
        <div className="text-center mb-10">
            <h2 className="text-2xl font-black tracking-widest text-gray-300 uppercase">Core Technologies</h2>
        </div>
        <div className="flex whitespace-nowrap animate-marquee">
            {/* We duplicate the array to create a seamless infinite loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                  <TechCard title="AWS" icon="☁️" color="hover:border-orange-500 hover:shadow-[0_0_15px_#f97316]" />
                  <TechCard title="React" icon="⚛️" color="hover:border-neon-green hover:shadow-[0_0_15px_#4ade80]" />
                  <TechCard title="Docker" icon="🐳" color="hover:border-blue-500 hover:shadow-[0_0_15px_#3b82f6]" />
                  <TechCard title="SAP" icon="💼" color="hover:border-gold hover:shadow-[0_0_15px_#fbbf24]" />
                  <TechCard title="AI" icon="🧠" color="hover:border-red-500 hover:shadow-[0_0_15px_#ef4444]" />
              </div>
            ))}
        </div>
      </section>

    </div>
  );
}

// Reusable Sub-Component for the Tech Marquee
function TechCard({ title, icon, color }) {
  return (
    <div className={`bg-[#111] border border-[#333] px-10 py-6 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer ${color}`}>
        <span className="text-3xl">{icon}</span>
        <span className="font-bold text-gray-200 uppercase tracking-wider">{title}</span>
    </div>
  );
}
