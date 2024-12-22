export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1280px] p-5 mt-10">
      <div className="font-digifit text-small-md md:text-small-xl">
        <span className="font-IBMBold">©</span> Leo Shang 2024
      </div>
      <div className="font-IBMMedium text-small-md md:text-small-xl">
        Made with <span className="font-IBMBold">React</span>. Deployed using{" "}
        <span className="font-IBMBold">Vercel</span>.
      </div>
    </footer>
  );
}
