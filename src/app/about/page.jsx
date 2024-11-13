import Summary from "@/components/aboutmepage/Summary";
import FavoriteSongs from "@/components/aboutmepage/music-rec-section/FavoriteSongs";

export default function About() {
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28">
      <Summary />
      <FavoriteSongs />
    </div>
  );
}
