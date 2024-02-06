import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaAngular, FaGitSquare, FaGithub, FaJava, FaJsSquare, FaLinux, FaPython, FaReact, FaWindows } from "react-icons/fa";
import { SiIntellijidea, SiMysql, SiOracle, SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";

export const technologies = [
  {
    category: "Programming Languges",
    items: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "JavaScript", icon: <FaJsSquare size={32} /> },
      { name: "NextJs", icon: <FaReact size={32} /> },
      { name: "Typescrips", icon: <FaAngular size={32} /> },
    ]
  },
  {
    category: "Web Development",
    items: [
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitSquare size={32} /> },
      { name: "GitHub", icon: <FaGithub size={32} /> },
      { name: "Postman", icon: <SiPostman size={32} /> },
      { name: "VsCode", icon: <TbBrandVscode size={32} /> },
    ]
  },
  {
    category: "OS",
    items: [
      { name: "Windows", icon: <FaWindows size={32} /> },
      { name: "Linux", icon: <FaLinux size={32} /> },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <DiMongodb size={32} /> },
    ]
  },

];