import asianLofiHipHop from "../../../../public/data/songs/asian-lofi-hip-hop.json";
import indiePop from "../../../../public/data/songs/indie-pop.json";
import jazzyFunkyStuff from "../../../../public/data/songs/jazzy-funky-stuff.json";
import slowcore from "../../../../public/data/songs/slowcore.json";
import GenreRec from "./GenreRec";

export default function FavoriteSongs() {
  return (
    <main className="flex flex-col justify-center items-center w-full mb-40">
      <h2 className="text-sub-title-xl font-IBMMedium w-full mb-10">
        I love <span className="font-bold whitespace-nowrap">music</span>! Here
        are some of my{" "}
        <span className="font-bold whitespace-nowrap">favorite songs</span>!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        <GenreRec
          genreTitle="Asian Lofi Hip Hop"
          songsData={asianLofiHipHop}
          gradientUrl={"/images/songs/asian-lofi-hip-hop/gradient.jpg"}
        />
        <GenreRec
          genreTitle="Indie Pop & Pop"
          songsData={indiePop}
          gradientUrl={"/images/songs/indie-pop/gradient.jpg"}
        />
        <GenreRec
          genreTitle="Slowcore"
          songsData={slowcore}
          gradientUrl={"/images/songs/slowcore/gradient.jpg"}
        />
        <GenreRec
          genreTitle="Jazzy Funky Stuff"
          songsData={jazzyFunkyStuff}
          gradientUrl={"/images/songs/jazzy-funky-stuff/gradient.jpg"}
        />
      </div>
    </main>
  );
}
