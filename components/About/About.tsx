import Image from "next/image";
import me from "../../public/me.png";
import { technologies } from "@/constants/Technologies";
import SectionContainer from "../SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <div className="relative pb-1">
        <div className=" pt-2 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-8">
          <div className="mt-5 w-full h-px bg-zinc-800" />

          <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
            <div className="flex justify-center w-auto md:justify-start min-w-fit">
              {/* <Image
                src={me}
                alt="Abdelaziz Naija"
                height={350}
                className="object-cover"
                quality={100}
                priority={true}
              /> */}
            </div>
            <div className="flex flex-col space-y-6">
              <article className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tight  self-center md:self-start">
                  Abdelaziz Naija
                </h2>
                <h3 className="text-sm font-normal  self-center md:self-start">
                  AI engineer
                </h3>
              </article>
              <article className="flex flex-col space-y-2 w-full ">
                <p className=" text-sm leading-7 text-center md:text-start">
                I&apos;m an aspiring AI and data enthusiast eager to explore the realms of data science, data analysis, and machine learning. With a keen interest in harnessing the power of data to drive insights and innovations, I&apos;m excited to delve into the intricacies of AI algorithms and techniques. Additionally, I&apos;m keen on honing my skills in data analysis to uncover meaningful patterns and trends that can inform decision-making processes. Through continuous learning and hands-on experience, I aim to become proficient in leveraging data-driven approaches to tackle real-world challenges..
                </p>
                <p className="text-sm leading-7 text-center md:text-start">
  
                </p>
              </article>
              <article className="flex flex-col space-y-2 w-full md:w-3/4">
                <h3 className="pt-18 text-3xl font-bold tracking-tight self-center md:self-start">
                  Technologies I use
                </h3>
                <div className="pt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center md:justify-start text-sm ">
                  {technologies.map((category) =>
                    category.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center flex-col"
                      >
                        {tech.icon}
                        <span className="mt-2">{tech.name}</span>
                      </div>
                    ))
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
