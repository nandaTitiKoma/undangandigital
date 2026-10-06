import { invitation } from "@/data/invitation";
import Reveal from "@/components/Reveal";

export default function Location() {
  return (
    <section className="py-20 px-4 bg-cream text-center">
      <Reveal delay={100}>
        <h3 className="font-formal text-3xl text-crimson-deep mb-4">Lokasi Acara</h3>
      </Reveal>
      <Reveal delay={200}>
        <p className="text-ink mb-2 font-bold">{invitation.venueName}</p>
      </Reveal>
      <Reveal delay={300}>
        <p className="text-ink/80 mb-8 max-w-sm mx-auto">{invitation.venueAddress}</p>
      </Reveal>
      
      <Reveal delay={400}>
        <div className="w-full max-w-md mx-auto aspect-square p-2 bg-gold-gradient rounded-xl shadow-xl mb-8 relative hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full rounded-lg overflow-hidden bg-white">
            <iframe 
              src={invitation.mapsEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] sepia-[10%] contrast-[110%]"
            ></iframe>
          </div>
        </div>
      </Reveal>

      <Reveal delay={600}>
        <a 
          href={invitation.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-cream font-bold rounded-full shadow-lg hover:bg-crimson-light hover:shadow-xl hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Buka di Google Maps
        </a>
      </Reveal>
    </section>
  );
}
