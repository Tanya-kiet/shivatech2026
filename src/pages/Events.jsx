import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Users, ExternalLink, Clock, Sparkles, X } from 'lucide-react';
import { EVENTS_DATA } from '../data/events';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'ALL',
    'HACKATHON',
    'INNOVATION & ENTREPRENEURSHIP',
    'TECHNICAL COMPETITIONS',
    'ROBOTICS',
    'CREATIVE & ESPORTS'
  ];

  const filteredEvents = selectedCategory === 'ALL' 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(e => e.category === selectedCategory || e.badge === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
          EXPLORE COMPETITIONS
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          OUR <span className="text-red-500">EVENTS</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Participate in premier technical challenges, hackathons, robotics, and innovation conclaves at SHIVATECH 2026.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] scale-105'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.map((event) => {
          const title = event.title || event.name;
          const description = event.description || event.tagline;
          const category = event.category || event.badge;
          const venue = event.venue || event.location;
          const isHackathon = event.id.includes('hack') || category.includes('HACKATHON');

          return (
            <div 
              key={event.id}
              className="flex flex-col justify-between p-8 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-red-500/40 transition-all duration-300 group hover:shadow-[0_0_35px_rgba(239,68,68,0.2)]"
            >
              <div className="space-y-6">
                
                {/* Category & Prize Header */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-orbitron font-bold tracking-widest px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 uppercase">
                    {category}
                  </span>
                  {event.prize && (
                    <div className="flex items-center gap-1 text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                      <Trophy className="w-4 h-4" />
                      <span>{event.prize}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="font-orbitron text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {description}
                </p>

                {/* Hackathon Timeline Card Badge */}
                {isHackathon && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-red-400">
                      <Clock className="w-4 h-4" />
                      <span>HACKATHON TIMELINE (16 &amp; 17 OCT):</span>
                    </div>
                    <div className="pl-6 text-slate-200">
                      16 Oct 09:00 AM (Begins) &rarr; 17 Oct 06:00 PM (Result Declaration)
                    </div>
                  </div>
                )}

                {/* Event Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-white/5">
                    <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-white/5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{venue}</span>
                  </div>
                  {event.teamSize && (
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-white/5">
                      <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{event.teamSize}</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 font-orbitron"
                >
                  <span>View Details &amp; Rules</span>
                </button>

                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-orbitron font-bold text-xs tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all flex items-center gap-2"
                >
                  <span>REGISTER NOW</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          );
        })}
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
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedEvent.description || selectedEvent.tagline}
              </p>
            </div>

            {/* Event Timeline (Specifically for Hacknation 2.0) */}
            {selectedEvent.timeline && selectedEvent.timeline.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 font-orbitron text-sm font-bold text-red-400 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>HACKNATION 2.0 EVENT TIMELINE</span>
                </div>

                <div className="space-y-4 relative pl-5 border-l-2 border-red-500/40">
                  {selectedEvent.timeline.map((step, idx) => (
                    <div key={idx} className="relative space-y-1">
                      <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]"></div>
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

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Official Registration Link</span>
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

    </div>
  );
}
