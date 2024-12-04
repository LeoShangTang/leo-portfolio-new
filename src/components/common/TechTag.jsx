export default function TechTag({ tech }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-50 rounded-lg">
      {tech.icon}
      <span className="font-IBMBold text-small-xl">{tech.name}</span>
    </div>
  );
}
