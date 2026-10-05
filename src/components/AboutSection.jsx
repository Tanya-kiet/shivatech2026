import React from 'react';
import { Award, Zap, Users, Code, Trophy, ShieldCheck } from 'lucide-react';
import { EVENT_DETAILS } from '../data/constants';

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-red-400" />,
      title: "HACKNATION HACKATHON",
      subtitle: "24-Hour Non-stop Coding",
      description: "Flagship hackathon held on 17 & 18 October 2026. Solve real-world industrial and societal problems."
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "PRIZES & REWARDS",
      subtitle: "Cash Prizes & Incubation",
      description: "Over ₹2,00,000 cash prizes for Hackathon + 10 Lakh Incubation Support from CBII iHub."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "QUANTUM DRIFT",
      subtitle: "Robotics Arena & Races",
      description: "Line followers, obstacle bots, and high-speed robo races with ₹35,000+ prize pool."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: "DEPARTMENTAL EVENTS",
      subtitle: "40+ Tech Challenges",
      description: "Competitions across CSE, Mechanical, Civil, ECE, Management, and Applied Sciences."
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-[#050914] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image & Glow Frame */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img 
                src="/images/shivalik_campus.webp" 
                alt="Shivalik University Campus" 
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-orbitron text-sm font-bold text-white">SHIVALIK UNIVERSITY</h4>
                    <p className="text-xs text-slate-300">Dehradun, Uttarakhand &middot; Official Host</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
              ABOUT THE TECH FEST
            </div>

            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              CELEBRATING <span className="text-red-500">INNOVATION</span> &amp; CREATIVITY
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {EVENT_DETAILS.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-red-500/30 transition-all space-y-2">
                  <div className="flex items-center gap-3">
                    {h.icon}
                    <h3 className="font-orbitron text-xs font-bold text-white">{h.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
