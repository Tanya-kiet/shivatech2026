import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/schedule';

export default function Schedule() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeDay = SCHEDULE_DATA[activeDayIndex] || SCHEDULE_DATA[0];

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
          STAY ON TRACK &middot; 2-DAY FESTIVAL
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          EVENT <span className="text-red-500">SCHEDULE</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Full 2-day festival schedule including HACKNATION 2.0 Hackathon, Startup Pitching, Departmental Contests, Robotics Arena, and Valedictory.
        </p>
      </div>

      {/* Day Selector Pills (2 Days) */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {SCHEDULE_DATA.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDayIndex(idx)}
            className={`px-8 py-4 rounded-2xl font-orbitron font-bold text-sm sm:text-base tracking-wider transition-all duration-200 flex flex-col items-center gap-1 ${
              activeDayIndex === idx
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] scale-105 border border-red-400/50'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            <span>{day.pillLabel}</span>
            <span className="text-[11px] font-normal text-slate-300">{day.dateStr}</span>
          </button>
        ))}
      </div>

      {/* Active Day Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs font-orbitron font-bold text-red-400 tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span>{activeDay.day} &middot; {activeDay.dateStr}</span>
          </div>
          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white">
            {activeDay.title}
          </h2>
        </div>
        <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold font-mono">
          <Calendar className="w-4 h-4" />
          <span>OFFICIAL TIMELINE</span>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {activeDay.events.map((evt, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-slate-900/60 border border-white/10 hover:border-red-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                  <Clock className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-red-400">
                  {evt.time}
                </span>
              </div>
              
              <h3 className="font-orbitron text-base font-bold text-white group-hover:text-red-400 transition-colors">
                {evt.title}
              </h3>
              
              {evt.description && (
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  {evt.description}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 px-3 py-2 rounded-lg border border-white/5 shrink-0 self-start sm:self-center">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{evt.venue}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
