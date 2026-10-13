import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-12 pb-16 bg-[#050914] bg-grid-pattern">
      
      {/* Background Glows & Parallax Overlay Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Red / Blue Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[250px] bg-blue-600/15 blur-[120px] rounded-full"></div>

        {/* Hero Web & Building Overlay Assets */}
        <img 
          src="/images/hero/web-left.png" 
          alt="" 
          className="absolute top-0 left-0 w-64 md:w-96 opacity-30 select-none pointer-events-none"
        />
        <img 
          src="/images/hero/web-right.png" 
          alt="" 
          className="absolute top-0 right-0 w-64 md:w-96 opacity-30 select-none pointer-events-none"
        />
        <img 
          src="/images/hero/buildings-back.png" 
          alt="" 
          className="absolute bottom-0 inset-x-0 w-full opacity-20 object-cover select-none pointer-events-none h-48 md:h-64"
        />
        <img 
          src="/images/hero/buildings-front.png" 
          alt="" 
          className="absolute bottom-0 inset-x-0 w-full opacity-30 object-cover select-none pointer-events-none h-32 md:h-48"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-6">
        
        {/* Organizer Sub-badge */}
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 text-xs font-semibold tracking-widest uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>{EVENT_DETAILS.organizer}</span>
        </div>

        {/* Main Title */}
        <h1 className="font-orbitron font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white drop-shadow-[0_0_35px_rgba(239,68,68,0.4)]">
          SHIVATECH <span className="text-red-500">2026</span>
        </h1>

        {/* Subtitle */}
        <h2 className="font-orbitron font-bold text-lg sm:text-2xl md:text-3xl text-slate-200 tracking-wider">
          {EVENT_DETAILS.tagline}
        </h2>

        {/* Subtitle badge */}
        <div className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase">
          {EVENT_DETAILS.subtitle}
        </div>

        {/* Hackathon Date Pill - UPDATED TO 16 & 17 October 2026 */}
        <div className="inline-flex items-center gap-3 py-2.5 px-6 rounded-full bg-red-500/10 border border-red-500/40 text-white font-orbitron font-bold text-sm sm:text-lg tracking-wider shadow-[0_0_25px_rgba(239,68,68,0.3)] animate-pulse-slow">
          <Calendar className="w-5 h-5 text-red-400" />
          <span>HACKATHON DATE: <span className="text-red-400">{EVENT_DETAILS.hackathonDate}</span></span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
          {EVENT_DETAILS.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          <Link
            to="/events"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-orbitron font-bold text-sm tracking-wider shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>DISCOVER SHIVATECH</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={EVENT_DETAILS.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-white/20 hover:border-red-500/50 text-white font-orbitron font-bold text-sm tracking-wider hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-4 h-4 text-red-400" />
          </a>

        </div>

      </div>

    </section>
  );
}
