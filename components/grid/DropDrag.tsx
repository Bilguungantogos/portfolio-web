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

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const DragFromOutsideLayout = () => {
  const [mounted, setmounted] = useState(false);

  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 1 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 },
    { i: "d", x: 3, y: 0, w: 1, h: 2 },
    { i: "g", x: 1, y: 2, w: 1, h: 1 },
    { i: "h", x: 3, y: 2, w: 2, h: 1 },
    { i: "e", x: 0, y: 1, w: 1, h: 2 },
    { i: "f", x: 1, y: 1, w: 2, h: 1 },
    { i: "j", x: 2, y: 0, w: 1, h: 1 },
    { i: "i", x: 2, y: 0, w: 1, h: 1 },
  ];
  const layoutsm = [
    { i: "a", x: 0, y: 0, w: 2, h: 0.6 },
    { i: "c", x: 2, y: 0, w: 1, h: 0.6 },
    { i: "d", x: 3, y: 0, w: 1, h: 1.2 },
    { i: "g", x: 1, y: 2, w: 1, h: 0.6 },
    { i: "h", x: 3, y: 2, w: 2, h: 0.6 },
    { i: "e", x: 0, y: 1, w: 1, h: 1.2 },
    { i: "f", x: 1, y: 1, w: 2, h: 0.6 },
    { i: "j", x: 2, y: 0, w: 1, h: 0.6 },
    { i: "i", x: 2, y: 0, w: 1, h: 0.6 },
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
    <div className="">
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
          className=" dark:bg-slate-700 lg:px-8 px-4 bg-[#0d1117D9] shadow-2xl cursor-grab flex items-center rounded-[32px]"
        >
          <AboutMe />
        </div>
        <div
          key={layout[1].i}
          className="relative flex justify-center items-center bg-[#0d1117D9] rounded-[32px]"
        >
          <div className="">
            <ThemeSwitch />
            <p className="absolute bottom-2 left-5 text-sm">
              Click the icon to switch the theme.
            </p>
          </div>
        </div>
        <div
          key={layout[2].i}
          className=" flex justify-center items-center bg-[#0d1117D9] text-white rounded-[32px] "
        >
          {layout[2].i}
        </div>
        <div
          key={layout[3].i}
          className=" flex justify-center items-center bg-[#0d1117D9] text-white rounded-[32px]"
        >
          <Button
            variant="default"
            className="bg-slate-700 rounded-[20px] py-6 px-6 lg:text-xl shadow-lg"
          >
            Download CV
          </Button>
        </div>
        <div
          key={layout[4].i}
          className=" flex justify-center items-center bg-[#0d1117D9] text-white rounded-[32px] "
        >
          h
        </div>
        <div
          key={layout[5].i}
          className=" flex justify-center items-center bg-[#0d1117D9] text-white rounded-[32px] "
        >
          {layout[5].i}
        </div>
        <div
          key={layout[6].i}
          className="flex bg-[#0d1117D9] px-8 pt-8 pb-12 text-white rounded-[32px] "
        >
          <MySkills />
        </div>
        <div
          key={layout[7].i}
          className="flex justify-center items-center relative bg-[#0d1117D9] text-white rounded-[32px] text-[50px]"
        >
          <FaGithub />
          <a
            className="absolute bottom-3 left-3 bg-slate-400 rounded-full cursor-pointer"
            onMouseUp={() => {
              window.open("https://github.com/Bilguungantogos");
            }}
          >
            <MdArrowOutward size={40} className="p-2" />
          </a>
        </div>
        <div
          key={layout[8].i}
          className="flex justify-center items-center text-white rounded-[32px] bg-[#0d1117D9]"
        >
          <SpotifyItem />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};
