import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../data/constants';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#03060d] text-slate-400 py-12 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: About & Logos */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img src="/images/university_logo.png" alt="Shivalik University" className="h-10 w-auto object-contain" />
              <img src="/images/acm_logo_cropped.png" alt="ACM Chapter" className="h-9 w-auto object-contain" />
              <img src="/images/cbii_logo.png" alt="CBII" className="h-9 w-auto object-contain" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-white tracking-wider">
              SHIVATECH <span className="text-red-500">2026</span>
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 max-w-md">
              The 2-day annual technical festival proudly organized by Shivalik University, Dehradun. Bringing together top minds for hackathons, innovation conclaves, robotics, and departmental challenges.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-orbitron text-xs font-semibold text-white tracking-widest uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/events" className="hover:text-red-400 transition-colors">All Events</Link></li>
              <li><Link to="/schedule" className="hover:text-red-400 transition-colors">Event Schedule</Link></li>
              <li><Link to="/gallery" className="hover:text-red-400 transition-colors">Gallery Archive</Link></li>
              <li><Link to="/team" className="hover:text-red-400 transition-colors">Organizing Team</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-red-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Venue & Organizer */}
          <div className="space-y-3">
            <h4 className="font-orbitron text-xs font-semibold text-white tracking-widest uppercase">
              LOCATION &amp; VENUE
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              Shivalik University / Shivalik College of Engineering<br />
              Siniwala, P.O. Sherpur, Shimla Road,<br />
              Dehradun, Uttarakhand 248197
            </p>
            <a 
              href={SOCIAL_LINKS.location} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs text-red-400 hover:text-red-300 underline font-medium"
            >
              Get Directions on Google Maps &rarr;
            </a>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="tracking-[0.25em] uppercase text-center md:text-left font-semibold text-slate-300">
            DIFFERENT SKILLS <span className="text-red-500 font-bold mx-1">/</span> ONE VISION
          </div>
          
          <div className="text-center tracking-wider text-slate-300 font-medium py-1.5 px-4 rounded-full bg-white/[0.04] border border-white/10 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            Designed and developed by - <span className="text-white font-bold">Kumar Satyam</span> <span className="text-red-400 font-semibold">( Graphic Head ACM )</span>
          </div>

          <div className="text-center md:text-right tracking-wider text-slate-500 font-mono">
            &copy; 2026 SHIVATECH. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
