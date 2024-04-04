"use client";

import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import ThemeSwitch from "../theme-toggle";
import "./mygrid.css";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import MySkills from "../griditems/myskills";
import { isMobile } from "react-device-detect";
import AboutMe from "../griditems/aboutme";
import SpotifyItem from "../griditems/spotifyItem";
import {
  BlankProject,
  CinemaAppItem,
  FoodDeliveryAppItem,
} from "../griditems/project";
import { motion } from "framer-motion";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const DragFromOutsideLayout = () => {
  const [mounted, setmounted] = useState(false);

  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 1 },
    { i: "c", x: 1, y: 0, w: 1, h: 1 },
    { i: "d", x: 4, y: 1, w: 1, h: 2 },
    { i: "g", x: 1, y: 0, w: 1, h: 1 },
    { i: "h", x: 0, y: 4, w: 2, h: 1 },
    { i: "e", x: 0, y: 0, w: 1, h: 2 },
    { i: "f", x: 4, y: 0, w: 2, h: 1 },
    { i: "j", x: 2, y: 0, w: 1, h: 1 },
    { i: "i", x: 2, y: 3, w: 1, h: 1 },
  ];
  const layoutsm = [
    { i: "a", x: 0, y: 0, w: 2, h: 1.2 },
    { i: "c", x: 2, y: 0, w: 1, h: 0.6 },
    { i: "d", x: 3, y: 0, w: 1, h: 1.2 },
    { i: "g", x: 0, y: 1, w: 1, h: 0.6 },
    { i: "h", x: 3, y: 3, w: 2, h: 0.6 },
    { i: "e", x: 0, y: 1, w: 1, h: 1.2 },
    { i: "f", x: 1, y: 1, w: 2, h: 0.6 },
    { i: "j", x: 2, y: 0, w: 1, h: 0.6 },
    { i: "i", x: 0, y: 1, w: 1, h: 0.6 },
  ];

  const [isDraggable, setIsDraggable] = useState(true);

  useEffect(() => {
    setmounted(true);
    setIsDraggable(!isMobile);

    const handleResize = () => {
      setIsDraggable(!isMobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#F6F2F2] dark:bg-[#090c10]">
      <ResponsiveReactGridLayout
        className=""
        layouts={{
          lg: layout,
          md: layout,
          sm: layout,
          xs: layout,
          xxs: layoutsm,
        }}
        cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 2 }}
        compactType="vertical"
        rowHeight={280}
        width={1200}
        measureBeforeMount={false}
        isDraggable={isDraggable}
        isResizable={false}
        useCSSTransforms={mounted}
        onLayoutChange={(layout) => console.log(layout)}
        margin={[16, 16]}
      >
        <div
          key={layout[0].i}
          style={{
            color: "rgb(240, 242, 248)",
          }}
          className="  lg:px-8 px-4 dark:dark:bg-[#0d1117D9] bg-[#FFFFFF] dark:text-white text-[#0F1117] cursor-grab flex items-center rounded-[32px]"
        >
          <AboutMe />
        </div>
        <div
          key={layout[1].i}
          className="relative flex justify-center items-center dark:dark:bg-[#0d1117D9] bg-[#FFFFFF] rounded-[32px]"
        >
          <div className="">
            <ThemeSwitch />
            <p className="text-black dark:text-white absolute bottom-2 left-5 text-sm max-[481px]:text-[10px]">
              Click the icon to switch the theme.
            </p>
          </div>
        </div>
        <div key={layout[2].i} className="rounded-[32px] overflow-hidden ">
          <FoodDeliveryAppItem />
        </div>
        <div
          key={layout[3].i}
          className=" flex justify-center items-center dark:bg-[#0d1117D9] dark:text-white bg-[#FFFFFF] text-[#0F1117] rounded-[32px]"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="dark:bg-slate-700 bg-[#F6F2F2] rounded-[20px] py-4 px-6 lg:text-xl shadow-lg"
            onMouseDown={(e: any) => {
              e.stopPropagation();
              window.open(
                "https://www.figma.com/proto/OOYYZWSg6qJ9vZxeOIVoAC/CV-Bilguun-Gantogos?node-id=1-9"
              );
            }}
          >
            Click to review my CV
          </motion.button>
        </div>
        <div
          key={layout[4].i}
          className=" dark:text-white  text-[#0F1117] rounded-[32px] overflow-hidden "
        >
          <BlankProject />
        </div>
        <div
          key={layout[5].i}
          className=" flex justify-center items-center dark:bg-[#0d1117D9] dark:text-white bg-[#FFFFFF] text-[#0F1117] rounded-[32px] overflow-hidden"
        >
          <CinemaAppItem />
        </div>
        <div
          key={layout[6].i}
          className="flex dark:bg-[#0d1117D9] px-8 pt-8 pb-12 max-[481px]:px-2 max-[481px]:py-4 bg-[#FFFFFF] dark:text-white text-[#0F1117] rounded-[32px] "
        >
          <MySkills />
        </div>
        <div
          key={layout[7].i}
          className="flex justify-center items-center relative dark:bg-[#0d1117D9] dark:text-white bg-[#FFFFFF] text-[#0F1117] rounded-[32px] text-[50px]"
        >
          <FaGithub />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-3 left-3 bg-slate-400 rounded-full cursor-pointer"
            onMouseDown={(e) => {
              e.stopPropagation();
              window.open("https://github.com/Bilguungantogos");
            }}
          >
            <MdArrowOutward size={40} className="p-2" />
          </motion.button>
        </div>
        <div
          key={layout[8].i}
          className="flex justify-center items-center dark:text-white text-[#0F1117] rounded-[32px] bg-[#FFFFFF] dark:bg-[#0d1117D9]"
        >
          <SpotifyItem />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};
