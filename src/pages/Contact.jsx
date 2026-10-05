import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { CONTACT_DATA } from '../data/contact';
import { SOCIAL_LINKS } from '../data/constants';

export default function Contact() {
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${type}-${text}`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
          GET IN TOUCH
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          CONTACT <span className="text-red-500">US</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Reach out to the SHIVATECH 2026 organizing team and faculty coordinators for queries, sponsorships, and registration support.
        </p>
      </div>

      {/* Coordinators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONTACT_DATA.map((person, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-red-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-orbitron font-bold tracking-widest px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 uppercase">
                {person.category === 'faculty' ? 'Faculty Lead' : 'Student Lead'}
              </span>
              <h2 className="font-orbitron text-xl font-bold text-white pt-2">
                {person.name}
              </h2>
              <p className="text-xs text-slate-300 font-medium">
                {person.role}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              
              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                <div className="flex items-center gap-2 text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-mono">{person.phone}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(person.phone, 'phone')}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Copy Phone"
                >
                  {copiedText === `phone-${person.phone}` ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                <div className="flex items-center gap-2 text-slate-200 truncate pr-1">
                  <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="truncate">{person.email}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(person.email, 'email')}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedText === `email-${person.email}` ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Map & Venue Card */}
      <div className="p-8 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-red-400 uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>VENUE &amp; LOCATION</span>
          </div>
          
          <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white">
            SHIVALIK UNIVERSITY, DEHRADUN
          </h2>
          
          <p className="text-sm text-slate-300 leading-relaxed">
            Shivalik College of Engineering / Shivalik University<br />
            Siniwala, P.O. Sherpur, Shimla Road, Dehradun, Uttarakhand 248197
          </p>

          <a
            href={SOCIAL_LINKS.location}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-orbitron font-bold text-xs tracking-wider transition-all shadow-lg"
          >
            <span>OPEN IN GOOGLE MAPS</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Embedded Map iframe */}
        <div className="h-64 rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="Shivalik University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6963283296224!2d77.8687!3d30.301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2baa00000001%3A0xa6bfbf5a198a264a!2sShivalik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
