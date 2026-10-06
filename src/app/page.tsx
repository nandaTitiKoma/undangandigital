import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import Greeting from "@/components/Greeting";
import EventDetails from "@/components/EventDetails";
import Location from "@/components/Location";
import Closing from "@/components/Closing";
import MusicPlayer from "@/components/MusicPlayer";
import Reveal from "@/components/Reveal";
import AutoScroll from "@/components/AutoScroll";

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col">
      <Cover />
      <div id="content" className="flex flex-col pb-20">
        <Reveal><Hero /></Reveal>
        <Reveal><Greeting /></Reveal>
        <Reveal><EventDetails /></Reveal>
        <Reveal><Location /></Reveal>
        <Reveal><Closing /></Reveal>
      </div>
      <MusicPlayer />
      <AutoScroll />
    </div>
  );
}
