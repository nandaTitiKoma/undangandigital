import { invitation } from "@/data/invitation";
import { FlowerCorner } from "@/components/Ornament";
import Reveal from "@/components/Reveal";

export default function Closing() {
  return (
    <section className="py-20 px-6 text-center bg-crimson-deep text-cream relative overflow-hidden">
      
      <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-4 scale-y-[-1]">
        <FlowerCorner className="w-32 h-32" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 scale-x-[-1] scale-y-[-1]">
        <FlowerCorner className="w-32 h-32" />
      </div>

      <div className="relative z-10 max-w-sm mx-auto space-y-8">
        <Reveal delay={100}>
          <p className="leading-relaxed drop-shadow-md">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa dan restu."
          </p>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="italic text-gold-light text-lg">Wassalamu'alaikum Warahmatullahi Wabarakatuh.</p>
        </Reveal>

        <div className="pt-8 space-y-6">
          <Reveal delay={300}>
            <p className="text-sm">Hormat kami,</p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="space-y-2">
              <p className="text-sm text-gold-light font-formal uppercase tracking-widest">Orang Tua</p>
              <p className="font-script text-3xl md:text-4xl text-gold-gradient leading-tight">
                {invitation.parents.father} &amp; {invitation.parents.mother}
              </p>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="space-y-1 pt-2">
              <p className="text-xs text-gold-light/80 font-formal uppercase tracking-wider mb-2">Saudara Kandung</p>
              {invitation.siblings.map((sibling, idx) => (
                <p key={idx} className="text-sm text-cream/90">{sibling}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={700}>
          <div className="pt-12 border-t border-gold-dark/40">
            <p className="italic font-formal text-sm text-gold-light/80">
              "Adat basandi syarak, syarak basandi Kitabullah."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
