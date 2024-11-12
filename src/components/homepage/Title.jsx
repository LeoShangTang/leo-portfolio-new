export default function Title() {
  return (
    <div className="flex  flex-col w-[90%] justify-center items-start">
      <div className="flex font-digifit text-title-xl items-center justify-center h-fit mb-[20px]">
        Leo Shang
      </div>
      <div className="font-IBMMedium text-body-xl  h-fit mb-[60px]">
        I'm a 3rd-year Computer Science student, designing and developing
        solutions to problems with{" "}
        <span className="font-bold whitespace-nowrap">full stack</span> and{" "}
        <span className="font-bold whitespace-nowrap">UI design</span>{" "}
        experience.
      </div>
      <div className="font-IBMBold text-sub-title-xl  h-fit mb-[20px]">
        My Work
      </div>
    </div>
  );
}
