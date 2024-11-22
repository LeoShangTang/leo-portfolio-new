import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Title() {
  return (
    <div className="flex flex-col w-full justify-center items-start mx-auto">
      <div className="flex h-auto gap-10">
        <div className="relative min-w-[250px] flex-shrink-0 hidden lg:block">
          <Image
            src="/images/Me2.webp"
            alt="Picture of Leo Shang in the Museum"
            layout="fill"
            style={{
              objectFit: "cover",
            }}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-digifit text-title-md md:text-title-xl">
            Leo Shang
          </div>
          <div className="font-IBMMedium text-body-md md:text-body-xl">
            <span className="font-IBMBold">Full-stack</span>{" "}
            <span className="font-IBMBold">developer</span> and 3rd-year
            computer science student
          </div>
          <div className="flex flex-row gap-3 mt-5">
            <a
              href="https://github.com/LeoShangTang"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/leo-shang-604911267/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="mailto:leoshang12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              <MdEmail size={32} />
            </a>
          </div>
        </div>
      </div>

      <div className="font-IBMBold mt-10 mb-1 text-sub-title-md md:text-sub-title-xl ">
        My Projects
      </div>
    </div>
  );
}
