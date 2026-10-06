import { GoldDivider } from "@/components/Ornament";
import Reveal from "@/components/Reveal";

export default function Greeting() {
  return (
    <section className="py-20 px-6 text-center bg-cream flex flex-col items-center">
      <div className="max-w-sm space-y-8">
        <Reveal delay={100}>
          <h3 className="font-arabic text-4xl text-crimson-deep leading-relaxed mt-4 drop-shadow-sm">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h3>
        </Reveal>
        <Reveal delay={200}>
          <p className="italic text-ink/80 text-lg">Assalamu'alaikum Warahmatullahi Wabarakatuh.</p>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-ink leading-relaxed">
            "Dengan penuh rasa syukur kepada Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara khitanan putra kami."
          </p>
        </Reveal>

        <Reveal delay={400}><GoldDivider /></Reveal>

        {/* Doa Card */}
        <Reveal delay={500}>
          <div className="border border-gold-dark/40 rounded-xl p-6 relative bg-white/50 shadow-md hover:shadow-lg transition-shadow">
            <p className="text-sm font-formal text-gold-dark mb-4">Doa orang tua (QS. Ibrahim: 40)</p>
            <p className="font-arabic text-2xl text-ink leading-loose mb-4">
              رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ
            </p>
            <p className="text-xs italic text-ink/70">
              "Ya Tuhanku, jadikanlah aku dan anak cucuku orang-orang yang tetap mendirikan salat. Ya Tuhan kami, perkenankanlah doaku."
            </p>
          </div>
        </Reveal>

        {/* Harapan Card */}
        <Reveal delay={600}>
          <div className="border border-gold-dark/40 rounded-xl p-6 relative bg-white/50 shadow-md hover:shadow-lg transition-shadow">
            <p className="text-sm font-formal text-gold-dark mb-4">Harapan (QS. Al-Furqan: 74)</p>
            <p className="font-arabic text-2xl text-ink leading-loose mb-4">
              وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
            </p>
            <p className="text-xs italic text-ink/70">
              "Dan orang-orang yang berkata: Ya Tuhan kami, anugerahkanlah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa."
            </p>
          </div>
        </Reveal>

        <Reveal delay={700}><GoldDivider /></Reveal>

        <Reveal delay={800}>
          <p className="mt-8 font-formal text-crimson-deep text-lg drop-shadow-sm">Mohon Doa Restu atas khitanan putra kami.</p>
        </Reveal>
      </div>
    </section>
  );
}
