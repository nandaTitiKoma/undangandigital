import { invitation } from "@/data/invitation";
import { FlowerCorner } from "@/components/Ornament";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden bg-gradient-to-b from-crimson-deep to-crimson">
      
      <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4">
        <FlowerCorner className="w-40 h-40 animate-[pulse_4s_ease-in-out_infinite]" />
      </div>
      <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 scale-x-[-1]">
        <FlowerCorner className="w-40 h-40 animate-[pulse_4s_ease-in-out_infinite_1s]" />
      </div>

      {/* Background Rumah Gadang (SVG Silhouette placeholder) */}
      <div className="absolute bottom-0 w-full opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 300" className="w-full h-auto fill-gold">
           <path d="M50 300 L50 200 Q 150 100 200 200 L 250 200 Q 300 50 400 150 Q 500 50 550 200 L 600 200 Q 650 100 750 200 L 750 300 Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        <Reveal delay={100}>
          <h2 className="text-4xl md:text-5xl font-script text-gold-gradient tracking-wide">
            Khitanan
          </h2>
        </Reveal>
        
        {/* Photo frame */}
        <Reveal delay={300}>
          <div className="relative p-2 rounded-t-full bg-gold-gradient shadow-[0_0_40px_rgba(226,176,74,0.3)]">
            <div className="w-48 h-64 md:w-56 md:h-72 rounded-t-full bg-cream overflow-hidden">
              <img src={invitation.photoSrc} alt={invitation.childName} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="absolute -top-6 -right-6 text-gold text-3xl animate-bounce">✨</div>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="border-y border-gold-dark py-4 px-8 mt-6 backdrop-blur-sm bg-ink/20 shadow-xl rounded-lg">
            <h1 className="text-3xl md:text-4xl font-formal text-cream uppercase tracking-widest drop-shadow-md">
              {invitation.childName}
            </h1>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
