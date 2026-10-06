"use client";

import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";
import Reveal from "@/components/Reveal";

export default function EventDetails() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(invitation.eventISO).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsPassed(true);
      } else {
        setTimeLeft({
          d: Math.floor(distance / (1000 * 60 * 60 * 24)),
          h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-crimson text-cream relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      
      <div className="text-center space-y-10">
        <Reveal delay={100}>
          <p className="text-lg font-formal text-gold-light">Yang InsyaAllah akan dilaksanakan pada:</p>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {/* Tanggal */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-3 group hover:bg-gold transition-colors">
                <svg className="w-5 h-5 text-gold group-hover:text-crimson-deep transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="font-formal text-gold-light">Tanggal</h4>
              <p>{invitation.dateLabel}</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="hidden md:block w-px h-16 bg-gold-dark/50"></div>
          </Reveal>

          {/* Waktu */}
          <Reveal delay={400}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-3 group hover:bg-gold transition-colors">
                <svg className="w-5 h-5 text-gold group-hover:text-crimson-deep transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="font-formal text-gold-light">Waktu</h4>
              <p>{invitation.timeLabel}</p>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="hidden md:block w-px h-16 bg-gold-dark/50"></div>
          </Reveal>

          {/* Lokasi */}
          <Reveal delay={600}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-3 group hover:bg-gold transition-colors">
                <svg className="w-5 h-5 text-gold group-hover:text-crimson-deep transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 className="font-formal text-gold-light">Lokasi</h4>
              <p>{invitation.venueName}</p>
            </div>
          </Reveal>
        </div>

        {/* Countdown */}
        <Reveal delay={800}>
          <div className="pt-8">
            {isMounted && !isPassed ? (
              <div className="flex justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-gold-gradient text-ink shadow-lg hover:scale-110 transition-transform cursor-default">
                    <span className="text-xl font-bold">{value}</span>
                    <span className="text-xs uppercase font-formal">{unit === 'd' ? 'Hari' : unit === 'h' ? 'Jam' : unit === 'm' ? 'Menit' : 'Detik'}</span>
                  </div>
                ))}
              </div>
            ) : isPassed ? (
              <p className="text-gold-light font-formal italic">Acara sedang/telah berlangsung. Terima kasih atas doa dan restunya.</p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
