import Image from "next/image";
import SongList from "./SongList";

export default function GenreRec({ genreTitle, songsData, gradientUrl }) {
  return (
    <div className="flex w-full flex-col">
      <p className="font-IBMBold text-body-xl">{genreTitle}</p>
      <div className="flex">
        <div className="relative w-[90px] mr-2">
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
