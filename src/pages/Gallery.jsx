import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Tag, X, ZoomIn } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['ALL', 'EVENTS', 'SHIVATECH', 'TEAM', 'MOMENTS', 'BEHIND THE SCENES'];

  const filteredPhotos = selectedCategory === 'ALL'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase">
          GALLERY ARCHIVE
        </div>
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          MEMORIES &amp; <span className="text-red-500">MOMENTS</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Explore key moments from SHIVATECH 2026 hackathons, pitch sessions, keynotes, and celebrations.
        </p>
      </div>

      {/* Category Filter Tabs */}
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

      {/* Photo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-red-500/40 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-950">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-80"></div>
              
              {/* Overlay Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 rounded-full bg-red-600 text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-orbitron font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-900/90 text-red-400 border border-red-500/30 backdrop-blur-md">
                  {photo.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-2 bg-[#050914] border-t border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="text-red-400 font-bold">{photo.event}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-red-400" />
                  {photo.date}
                </span>
              </div>

              <h3 className="font-orbitron text-base font-bold text-white group-hover:text-red-400 transition-colors">
                {photo.title}
              </h3>

              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {photo.description}
              </p>

              {photo.location && (
                <div className="pt-2 flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>{photo.location}</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox Modal for Photo Focus */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            <div className="p-6 space-y-3 bg-[#050914]">
              <div className="flex items-center justify-between text-xs font-orbitron font-bold">
                <span className="text-red-400">{selectedPhoto.event}</span>
                <span className="text-slate-400">{selectedPhoto.date}</span>
              </div>

              <h2 className="font-orbitron text-xl font-bold text-white">
                {selectedPhoto.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.description}
              </p>

              {selectedPhoto.location && (
                <div className="flex items-center gap-1.5 text-xs text-blue-400 pt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedPhoto.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
