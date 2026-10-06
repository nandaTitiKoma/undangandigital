"use client";

import { useEffect, useRef, useState } from "react";
import { invitation } from "@/data/invitation";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    
    try {
      audio = new Audio(invitation.musicSrc);
      audio.loop = true;
      audio.volume = 0.5;
      audio.preload = "auto"; // Preload auto fixes the playback delay!
      
      // Prevent browser error overlay if file missing
      audio.addEventListener("error", (e) => {
        console.warn("Audio error (probably missing file):", e);
      });

      audioRef.current = audio;
    } catch (e) {
      console.warn("Failed to initialize audio", e);
    }

    const playMusic = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Autoplay prevented or audio source missing");
      }
    };

    const handleOpen = () => {
      playMusic();
    };

    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden && !audioRef.current.paused) {
        audioRef.current.pause();
      } else if (!document.hidden && isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("open-invitation", handleOpen);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("open-invitation", handleOpen);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []); // Empty dependency array so it only runs once!

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        console.warn("Audio playback failed (file likely missing)");
        // Don't set isPlaying true if it failed
      });
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gold-gradient shadow-lg flex items-center justify-center text-ink transition-transform ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''} safe-pb`}
      aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
    >
      {isPlaying ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
      )}
    </button>
  );
}
