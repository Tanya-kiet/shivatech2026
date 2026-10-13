import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Trophy, ExternalLink, ArrowRight, Clock, Sparkles, X } from 'lucide-react';
import { EVENTS_DATA } from '../data/events';

export default function TracksSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-20 px-4 relative bg-[#03060d] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
            FLAGSHIP EVENTS &amp; TRACKS
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            EXPLORE <span className="text-red-500">COMPETITIONS</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Choose your arena: Hackathon, Startup Pitching, Departmental Tech Contests, Robotics Arena, or Creative Zone.
          </p>
        </div>

        {/* Tracks Grid - 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS_DATA.map((event) => {
            const title = event.title || event.name;
            const description = event.description || event.tagline;
            const category = event.category || event.badge;
            const venue = event.venue || event.location;
            const isHackathon = event.id.includes('hack') || category.includes('HACKATHON');

            return (
              <div 
                key={event.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-red-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
              >
                <div className="space-y-4">
                  
                  {/* Category & Prize Header */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[10px] font-orbitron font-bold tracking-widest px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 uppercase">
                      {category}
                    </span>
                    {event.prize && (
                      <span className="text-xs font-bold text-yellow-400 flex items-center gap-1 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">
                        <Trophy className="w-3.5 h-3.5" />
                        {event.prize}
                      </span>
                    )}
                  </div>

                  {/* Event Title */}
                  <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                    {description}
                  </p>

                  {/* Hackathon Timeline Highlight Badge */}
                  {isHackathon && (
                    <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-[11px] font-mono text-red-300 space-y-1">
                      <div className="flex items-center gap-1.5 font-bold">
                        <Clock className="w-3.5 h-3.5 text-red-400" />
                        <span>HACKATHON TIMELINE:</span>
                      </div>
                      <div className="pl-5 text-slate-300">
                        16 Oct 09:00 AM &rarr; 17 Oct 06:00 PM (Result)
                      </div>
                    </div>
                  )}

                  {/* Details Meta */}
                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="font-semibold text-slate-200">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="truncate">{venue}</span>
                    </div>
                  </div>

                </div>

                {/* Card Footer Button */}
                <div className="pt-6 mt-4 flex items-center justify-between gap-3 border-t border-white/5">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold font-orbitron tracking-wider transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>REGISTER</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Events Button */}
        <div className="text-center pt-6">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 border border-white/20 hover:border-red-500/50 text-white font-orbitron font-bold text-xs tracking-widest hover:bg-slate-800 transition-all shadow-lg"
          >
            <span>VIEW ALL COMPETITIONS &amp; RULES</span>
            <ArrowRight className="w-4 h-4 text-red-400" />
          </Link>
        </div>

      </div>

      {/* Event Details & Timeline Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-orbitron font-bold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 uppercase">
                {selectedEvent.category || selectedEvent.badge}
              </span>
              <h2 className="font-orbitron text-2xl font-bold text-white pt-1">
                {selectedEvent.title || selectedEvent.name}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedEvent.description || selectedEvent.tagline}
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-800/50 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-slate-200">
                <Calendar className="w-4 h-4 text-red-400" />
                <span className="font-semibold">{selectedEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{selectedEvent.venue || selectedEvent.location}</span>
              </div>
              {selectedEvent.prize && (
                <div className="flex items-center gap-2 text-yellow-400 font-bold">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span>{selectedEvent.prize}</span>
                </div>
              )}
            </div>

            {/* HACKNATION 2.0 Timeline Display */}
            {selectedEvent.timeline && selectedEvent.timeline.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 font-orbitron text-sm font-bold text-red-400 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>EVENT TIMELINE</span>
                </div>

                <div className="space-y-3 relative pl-4 border-l-2 border-red-500/40">
                  {selectedEvent.timeline.map((step, idx) => (
                    <div key={idx} className="relative space-y-1">
                      <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                      <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold">
                        <span>{step.date}</span>
                        <span>&middot;</span>
                        <span className="bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30 text-white">{step.time}</span>
                      </div>
                      <h4 className="font-orbitron text-sm font-bold text-white">{step.title}</h4>
                      {step.description && (
                        <p className="text-xs text-slate-400">{step.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Registration Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Official Registration</span>
              <a
                href={selectedEvent.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-orbitron font-bold text-xs tracking-wider transition-all flex items-center gap-2 shadow-lg"
              >
                <span>REGISTER NOW</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
