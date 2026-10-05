import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/constants';

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "Unstop",
      role: "OFFICIAL PARTNER",
      logo: "/sponsors/unstop-seeklogo.svg",
      link: SOCIAL_LINKS.unstop
    },
    {
      name: "Shivalik University",
      role: "ORGANISER",
      logo: "/images/university_logo.png",
      link: SOCIAL_LINKS.university
    },
    {
      name: "ACM Student Chapter",
      role: "STUDENT CHAPTER",
      logo: "/images/acm_logo_cropped.png",
      link: SOCIAL_LINKS.acm
    },
    {
      name: "CBII / iHub",
      role: "INCUBATION PARTNER",
      logo: "/images/cbii_logo.png",
      link: SOCIAL_LINKS.cbii
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#050914] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto space-y-10 text-center">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
            PARTNERS &amp; ORGANIZERS
          </div>
          <h2 className="font-orbitron text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
            POWERED BY
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {sponsors.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col items-center justify-center gap-3 group hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
            >
              <img 
                src={s.logo} 
                alt={s.name} 
                className="h-12 sm:h-14 w-auto object-contain filter group-hover:brightness-110 transition-all"
              />
              <div className="text-center">
                <span className="block text-[10px] font-orbitron tracking-widest text-slate-400 font-semibold group-hover:text-red-400">
                  {s.role}
                </span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white flex items-center justify-center gap-1 mt-0.5">
                  {s.name}
                  <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
