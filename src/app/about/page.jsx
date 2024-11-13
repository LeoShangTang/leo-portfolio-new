import MusicRec from "@/components/aboutmepage/music-rec-section/MusicRec";
import Summary from "@/components/aboutmepage/Summary";

export default function About() {
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28">
      <Summary />
      <MusicRec />
    </div>
  );
}
