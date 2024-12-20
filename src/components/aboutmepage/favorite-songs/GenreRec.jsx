import Image from "next/image";
import SongList from "./SongList";

export default function GenreRec({ genreTitle, songsData, gradientUrl }) {
  return (
    <div className="flex flex-col lg:w-full">
      <div className="flex items-center mb-2">
        <div className="relative h-full aspect-square mr-2 ">
          <Image
            src={gradientUrl}
            alt={`Color gradient of ${genreTitle}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-xl"
          />
        </div>
        <p className="font-IBMBold text-body-md md:text-body-xl mb-2">
          {genreTitle}
        </p>
      </div>
      <div className="flex">
        {/* <div className="relative mr-2 min-w-[30px] sm:min-w-[100px] lg:hidden block">
          <Image
            src={gradientUrl}
            alt={`Color gradient of ${genreTitle}`}
            fill
            style={{
              objectFit: "cover",
            }}
            className="rounded-xl"
          />
        </div> */}
        <div className="w-full">
          <SongList songs={songsData} />
        </div>
      </div>
    </div>
  );
}
