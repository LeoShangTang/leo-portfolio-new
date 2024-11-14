import TrackItem from "./TrackItem";
export default function SongList({ songs }) {
  return (
    <ul className="flex flex-col gap-2">
      {songs.map((song, index) => (
        <TrackItem song={song} key={index} />
      ))}
    </ul>
  );
}
