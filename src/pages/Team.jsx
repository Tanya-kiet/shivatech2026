import React, { useEffect, useState } from 'react';
import { Linkedin, Instagram, Mail, ShieldCheck, Search } from 'lucide-react';
import { TEAM_DATA } from '../data/team';

export default function Team() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facultyList = TEAM_DATA.filter(m => m.category === 'faculty');
  const studentList = TEAM_DATA.filter(m => m.category === 'student');

  const filterMembers = (list) => {
    if (!searchTerm) return list;
    return list.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
          SHIVATECH 2026 OFFICIAL CREW
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          OUR <span className="text-red-500">TEAM</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Meet the faculty coordinators, student executive leads, and organizing committee behind SHIVATECH 2026.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          {['ALL', 'FACULTY', 'STUDENT LEADS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search member..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Faculty Coordinators Section */}
      {(activeTab === 'ALL' || activeTab === 'FACULTY') && filterMembers(facultyList).length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-6 w-1 bg-red-500 rounded-full"></div>
            <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <span>FACULTY COORDINATORS</span>
            </h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterMembers(facultyList).map((member) => (
              <div
                key={member.id || member.name}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4 text-center">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-tr from-red-500 to-blue-500 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full bg-slate-800"
                      onError={(e) => { e.target.src = '/images/shivalik_campus.webp'; }}
                    />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-snug font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {member.socials && member.socials.email && (
                  <div className="flex items-center justify-center pt-4 mt-4 border-t border-white/10">
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-red-600/30 transition-colors text-xs flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Student Executive Leads Section */}
      {(activeTab === 'ALL' || activeTab === 'STUDENT LEADS') && filterMembers(studentList).length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-6 w-1 bg-red-500 rounded-full"></div>
            <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white tracking-wider">
              STUDENT EXECUTIVE &amp; ACM MEMBERS ({filterMembers(studentList).length})
            </h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterMembers(studentList).map((member) => (
              <div
                key={member.id || member.name}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-tr from-red-500 to-blue-500 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full bg-slate-800"
                      onError={(e) => { e.target.src = '/images/shivalik_campus.webp'; }}
                    />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-snug font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {member.socials && (member.socials.email || member.socials.instagram) && (
                  <div className="flex items-center justify-center gap-2 pt-4 mt-4 border-t border-white/10">
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-pink-600/30 transition-colors"
                        title="Instagram"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-red-600/30 transition-colors"
                        title={`Email: ${member.socials.email}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
