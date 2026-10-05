import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { EVENT_DETAILS } from '../data/constants';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(EVENT_DETAILS.countdownTarget).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="relative py-12 px-4">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[150px] bg-red-600/15 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <Calendar className="w-3.5 h-3.5" />
            <span>HACKATHON COUNTDOWN &middot; {EVENT_DETAILS.hackathonDate}</span>
          </div>
        </div>

        {/* Countdown Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {timerUnits.map((unit) => (
            <div 
              key={unit.label}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-xl hover:border-red-500/40 transition-all duration-300 group"
            >
              <span className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 group-hover:scale-105 transition-transform duration-300">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-red-400">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
