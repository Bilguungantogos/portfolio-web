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

const MySkills = () => {
  return (
    <div className="flex flex-col justify-between">
      <p className="text-light text-lg text-slate-300 px-6">
        I am currently working on a project involving the utilization of these
        languages and tools:
      </p>
      <p className="flex flex-wrap justify-center gap-8">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoJavascript size={40} />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoTypescript size={40} />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <IoLogoReact size={40} />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <SiNextdotjs size={40} />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <TbBrandTailwind size={40} />
        </a>

        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <BiLogoMongodb size={40} />
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <SiMysql size={40} />
        </a>

        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <IoLogoNodejs size={40} />
        </a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
          <BiLogoPostgresql size={40} />
        </a>
        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <IoLogoSass size={40} />
        </a>
      </p>
    </div>
  );
};

export default MySkills;
