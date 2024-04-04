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
    <div className="flex flex-col justify-between select-none ">
      <p className="text-light text-lg text-slate-600 px-6 max-[481px]:px-4 max-[481px]:text-sm select-none">
        I have been working on a project involving the utilization of these
        languages and tools:
      </p>
      <p className="flex flex-wrap justify-center gap-8 max-[481px]:gap-4">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <IoLogoJavascript size={"full"} />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <BiLogoTypescript size={"full"} />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <IoLogoReact size={"full"} />
        </a>
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <SiNextdotjs size={"full"} />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <TbBrandTailwind size={"full"} />
        </a>

        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <BiLogoMongodb size={"full"} />
        </a>
        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <SiMysql size={"full"} />
        </a>

        <a
          href="https://nodejs.org"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <IoLogoNodejs size={"full"} />
        </a>
        <a
          href="https://www.postgresql.org"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <BiLogoPostgresql size={"full"} />
        </a>
        <a
          href="https://sass-lang.com"
          target="_blank"
          rel="noreferrer"
          className="size-[40px] max-[481px]:size-[30px]"
        >
          <IoLogoSass size={"full"} />
        </a>
      </p>
    </div>
  );
};

export default MySkills;
