import Image from "next/image";

export default function Summary() {
  return (
    <div className="relative w-1/2 aspect-square">
      <Image
        src="/images/Me1.jpg"
        alt="Picture of Leo Shang in the Wilderness (UBC)"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        placeholder="blur"
        blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
      />
    </div>
  );
}
