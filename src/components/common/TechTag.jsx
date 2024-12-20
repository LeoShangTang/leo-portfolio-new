export default function TechTag({ tech }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-50 rounded-lg">
      <div className="text-[18px] md:text-[24px]">{tech.icon}</div>
      <span className="font-IBMBold md:text-small-xl text-small-md">
        {tech.name}
      </span>
    </div>
  );
}
