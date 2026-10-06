"use client";

import { useState, useEffect, useRef } from "react";

export default function AutoScroll() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Show button only after cover is opened
  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    window.addEventListener('open-invitation', handleOpen);
    return () => window.removeEventListener('open-invitation', handleOpen);
  }, []);

  useEffect(() => {
    if (isScrolling) {
      scrollIntervalRef.current = setInterval(() => {
        window.scrollBy({ top: 1, left: 0 });
        
        // Auto-stop when reaching the bottom
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
          setIsScrolling(false);
        }
      }, 30); // Scroll speed (lower is faster)
    } else {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    }
    
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, [isScrolling]);

  // Stop auto-scroll if user manually scrolls/touches the screen
  useEffect(() => {
    const handleUserInteraction = () => {
      if (isScrolling) setIsScrolling(false);
    };
    
    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
    };
  }, [isScrolling]);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => setIsScrolling(!isScrolling)}
      className={`fixed bottom-6 left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all z-50 hover:scale-110 active:scale-95 ${
        isScrolling 
          ? "bg-crimson text-gold-light shadow-[0_0_20px_rgba(179,18,43,0.6)] border border-gold-light/50" 
          : "bg-gold-gradient text-ink"
      }`}
      title={isScrolling ? "Hentikan Scroll" : "Scroll Otomatis"}
    >
      {isScrolling ? (
        // Pause Icon
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ) : (
        // Auto Scroll Icon
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )}
    </button>
  );
}
