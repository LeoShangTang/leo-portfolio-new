import SongList from "./SongList";
import asianLofiHipHop from "../../../../public/data/songs/asian-lofi-hip-hop.json";
import Image from "next/image";

export default function MusicRec() {
  return (
    <main className="flex flex-col justify-center items-center w-[90%] ">
      <h2 className="text-sub-title-xl font-IBMMedium w-full">
        I love <span className="font-bold whitespace-nowrap">music</span>! Here
        are some of my{" "}
        <span className="font-bold whitespace-nowrap">favorite songs</span>!
      </h2>

      <div className="flex w-full flex-col">
        <p className="font-IBMBold text-body-xl">Asian Lofi Hip Hop</p>
        <div className="flex">
          <div className="relative w-[90px] mr-2">
            <Image
              src="/images/songs/asian-lofi-hip-hop/gradient.jpg"
              alt={`Color gradient of Asian Lofi Hip Hop`}
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="w-full">
            <SongList songs={asianLofiHipHop} />
          </div>
        </div>
      </div>
    </main>
  );
}
