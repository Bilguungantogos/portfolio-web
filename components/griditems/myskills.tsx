import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io";
import { motion } from "framer-motion";

const skillIcons = [
  {
    icon: <IoLogoJavascript size={"full"} />,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <BiLogoTypescript size={"full"} />,
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: <IoLogoReact size={"full"} />,
    href: "https://reactjs.org/",
  },
  {
    icon: <SiNextdotjs size={"full"} />,
    href: "https://nextjs.org/",
  },
  {
    icon: <TbBrandTailwind size={"full"} />,
    href: "https://tailwindcss.com/",
  },
  {
    icon: <BiLogoMongodb size={"full"} />,
    href: "https://www.mongodb.com/",
  },
  {
    icon: <SiMysql size={"full"} />,
    href: "https://www.mysql.com/",
  },
  {
    icon: <IoLogoNodejs size={"full"} />,
    href: "https://nodejs.org",
  },
  {
    icon: <BiLogoPostgresql size={"full"} />,
    href: "https://www.postgresql.org",
  },
  {
    icon: <IoLogoSass size={"full"} />,
    href: "https://sass-lang.com",
  },
];

const MySkills = () => {
  return (
    <div className="flex flex-col justify-between select-none ">
      <p className="text-light text-lg text-slate-600 px-6 max-[481px]:px-4 max-[481px]:text-sm select-none dark:text-slate-200">
        I have been working on a project involving the utilization of these
        languages and tools:
      </p>
      <p className="flex flex-wrap justify-center gap-8 max-[481px]:gap-4">
        {skillIcons.map((e) => {
          return (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="size-[40px] max-[481px]:size-[30px]"
            >
              <a href={e.href}>{e.icon}</a>
            </motion.button>
          );
        })}
      </p>
    </div>
  );
};

export default MySkills;
