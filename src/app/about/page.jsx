import Summary from "@/components/aboutmepage/Summary";
import FavoriteSongs from "@/components/aboutmepage/favorite-songs/FavoriteSongs";
import FreeTime from "@/components/aboutmepage/FreeTime";

export default function About() {
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28 px-5">
      <Summary />
      <FreeTime />
      <FavoriteSongs />
    </div>
  );
}
