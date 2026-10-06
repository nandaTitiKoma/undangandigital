"use client";

import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";

export default function Cover() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(to);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    // Dispatch custom event to start music
    window.dispatchEvent(new Event('open-invitation'));
    
    // Wait for the slide-up animation to finish before removing from DOM
    setTimeout(() => {
      setIsUnmounted(true);
    }, 1000);
  };

  if (isUnmounted) return null;

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-[100dvh] z-[50] flex flex-col items-center justify-center text-center p-6 overflow-hidden bg-gradient-to-b from-ink via-crimson-deep to-crimson transition-all duration-1000 ease-in-out ${
        isOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      
      {/* Ornamen Kiri Atas */}
      <div className="absolute top-0 left-0 w-44 h-44 md:w-60 md:h-60 pointer-events-none opacity-60">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold drop-shadow-[0_0_10px_rgba(226,176,74,0.3)]">
          <path fill="currentColor" opacity="0.08" d="M0 0 L200 0 C150 0 100 50 100 100 C100 150 50 200 0 200 Z" />
          <path fill="currentColor" opacity="0.12" d="M0 0 L150 0 C100 0 75 50 75 100 C75 150 25 200 0 200 Z" />
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" d="M0 40 C40 40 80 80 80 140 C80 170 50 200 0 200" opacity="0.4" />
          <path fill="none" stroke="currentColor" strokeWidth="1" d="M0 20 C60 20 120 60 120 140 C120 160 100 200 0 200" opacity="0.6" />
          
          <g transform="translate(35, 35)">
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
            <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
            <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
            <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
          </g>
          <g transform="translate(90, 50) scale(0.6)">
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
            <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
            <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
            <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
          </g>
          <g transform="translate(50, 90) scale(0.5)">
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
            <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
            <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
            <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
          </g>
        </svg>
      </div>

      {/* Ornamen Kanan Bawah */}
      <div className="absolute bottom-0 right-0 w-44 h-44 md:w-60 md:h-60 pointer-events-none opacity-60 rotate-180">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold drop-shadow-[0_0_10px_rgba(226,176,74,0.3)]">
          <path fill="currentColor" opacity="0.08" d="M0 0 L200 0 C150 0 100 50 100 100 C100 150 50 200 0 200 Z" />
          <path fill="currentColor" opacity="0.12" d="M0 0 L150 0 C100 0 75 50 75 100 C75 150 25 200 0 200 Z" />
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" d="M0 40 C40 40 80 80 80 140 C80 170 50 200 0 200" opacity="0.4" />
          <path fill="none" stroke="currentColor" strokeWidth="1" d="M0 20 C60 20 120 60 120 140 C120 160 100 200 0 200" opacity="0.6" />
          
          <g transform="translate(35, 35)">
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
            <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
            <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
            <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
          </g>
          <g transform="translate(90, 50) scale(0.6)">
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
            <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
            <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
            <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
          </g>
          <g transform="translate(50, 90) scale(0.5)">
            <circle cx="0" cy="0" r="4" fill="currentColor" />
            <path fill="currentColor" d="M0 -20 C 4 -10 4 -4 0 0 C -4 -4 -4 -10 0 -20 Z" />
            <path fill="currentColor" d="M0 20 C 4 10 4 4 0 0 C -4 4 -4 10 0 20 Z" />
            <path fill="currentColor" d="M-20 0 C -10 4 -4 4 0 0 C -4 -4 -10 -4 -20 0 Z" />
            <path fill="currentColor" d="M20 0 C 10 4 4 4 0 0 C 4 -4 10 -4 20 0 Z" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col items-center space-y-6 z-10 w-full max-w-sm">
        <div className="space-y-2 relative">
          <h2 className="text-gold-light text-sm tracking-[0.3em] font-formal uppercase">Undangan Khitanan</h2>
          <h1 className="text-4xl md:text-5xl font-script text-gold-gradient drop-shadow-lg">{invitation.childName}</h1>
        </div>
        
        <div className="relative p-1.5 rounded-t-full mt-4 group">
          <div className="absolute inset-0 rounded-t-full bg-gold-gradient blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
          <div className="relative w-36 h-48 md:w-44 md:h-56 rounded-t-full bg-cream overflow-hidden border-4 border-crimson-deep shadow-[0_0_30px_rgba(226,176,74,0.4)] z-10">
            <img src={invitation.coverPhotoSrc} alt={invitation.childName} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
          </div>
          {/* Sparkles on frame */}
          <div className="absolute -top-3 -right-3 text-gold text-2xl animate-[bounce_3s_infinite] z-20">✨</div>
          <div className="absolute top-1/2 -left-5 text-gold-light text-xl animate-[bounce_4s_infinite] delay-300 z-20">✨</div>
        </div>

        <div className="mt-8 mb-6 bg-black/30 backdrop-blur-md px-8 py-5 rounded-2xl border border-gold-dark/50 w-full shadow-2xl">
          <p className="text-gold-light/70 text-xs tracking-widest uppercase mb-1">Kepada Yth.</p>
          <p className="text-cream text-xl font-formal">{guestName}</p>
        </div>

        <button 
          onClick={handleOpen}
          className="relative overflow-hidden px-8 py-3 bg-gold-gradient text-ink font-bold rounded-full shadow-[0_0_20px_rgba(226,176,74,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(226,176,74,0.6)] transition-all active:scale-95 group"
        >
          <span className="relative z-10">Buka Undangan</span>
          <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
        </button>
      </div>
    </div>
  );
}
