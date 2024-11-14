import Image from "next/image";
import SongList from "./SongList";

export default function GenreRec({ genreTitle, songsData, gradientUrl }) {
  return (
    <div className="flex flex-col lg:w-full">
      <div className="flex items-center mb-2">
        <div className="relative h-full aspect-square mr-2 hidden lg:block">
          <Image
            src={gradientUrl}
            alt={`Color gradient of ${genreTitle}`}
            objectFit="cover"
            fill
            className="rounded-xl"
          />
        </div>
        <p className="font-IBMBold text-body-md md:text-body-xl mb-2">
          {genreTitle}
        </p>
      </div>
      <div className="flex">
        <div className="relative mr-2 min-w-[30px] sm:min-w-[250px] lg:hidden block">
          <Image
            src={gradientUrl}
            alt={`Color gradient of ${genreTitle}`}
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="w-full">
          <SongList songs={songsData} />
        </div>
      </div>
    </div>
  );
}
