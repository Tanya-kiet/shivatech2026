import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = FAQ_DATA.filter(
    item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
          GOT QUESTIONS?
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl font-black text-white tracking-tight">
          FREQUENTLY ASKED <span className="text-red-500">QUESTIONS</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Find quick answers about SHIVATECH 2026, registration rules, hackathon dates, and event guidelines.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-xl mx-auto">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-red-500 focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors shadow-lg"
        />
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-all duration-200 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-orbitron text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-red-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-slate-900/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-slate-400 text-sm">
            No questions found matching &quot;{searchTerm}&quot;
          </div>
        )}
      </div>

    </div>
  );
}
