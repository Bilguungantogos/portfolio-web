"use client";

import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { ThemeToggle } from "../theme-toggle";
import { siteConfig } from "@/config/site-config";
import "./mygrid.css";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

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
  ];

  useEffect(() => {
    setmounted(true);
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
        useCSSTransforms={mounted}
        onLayoutChange={(layout) => console.log(layout)}
        margin={[16, 16]}
      >
        {/* {layout.map((item) => (
          <div
            key={item.i}
            className="bg-slate-600 px-4 py-5"
            style={{
              color: "white",
              borderRadius: "10px",
            }}
          >
            {item.i}
          </div>
        ))} */}
        <div
          key={layout[0].i}
          style={{
            color: "rgb(240, 242, 248)",
            borderRadius: "32px",
            cursor: "grab",
          }}
          className="flex items-center space-x-6 dark:bg-slate-700 px-8 bg-[#0d1117D9] shadow-2xl"
        >
          <div className="flex justify-between select-none">
            <img
              alt="avatar"
              src="/IMG_8615.jpeg"
              width={120}
              height={120}
              className="object-cover rounded-full"
              loading="eager"
            />
          </div>
          <div>
            <div className="text-xl font-semibold text-primary select-none">
              {siteConfig.title}
            </div>
            <h1 className="text-4xl font-bold my-2 text-white select-none">
              {siteConfig.creator}
            </h1>
            <p className="text-2xl text-neutral-300 font-light select-none">
              {siteConfig.bio}
            </p>
          </div>
        </div>
        <div
          key={layout[1].i}
          style={{
            backgroundColor: "#0d1117D9",
            borderRadius: "32px",
          }}
          className="relative"
        >
          <div className="">
            <ThemeToggle />
            <p className="absolute bottom-2 left-5 text-sm">
              Click the icon to switch the theme.
            </p>
          </div>
        </div>
        <div
          key={layout[2].i}
          style={{
            backgroundColor: "#6464C8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            color: "white",
            borderRadius: "10px",
          }}
        >
          {layout[2].i}
        </div>
        <div
          key={layout[3].i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0d1117D9",
            color: "white",
            borderRadius: "32px",
          }}
        >
          <Button
            variant="default"
            className="bg-slate-700 rounded-[20px] py-6 px-6 text-xl shadow-lg"
          >
            Download CV
          </Button>
        </div>
        <div
          key={layout[4].i}
          style={{
            backgroundColor: "#6464C8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            color: "white",
            borderRadius: "10px",
          }}
        >
          h
        </div>
        <div
          key={layout[5].i}
          style={{
            backgroundColor: "#6464C8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            color: "white",
            borderRadius: "10px",
          }}
        >
          {layout[5].i}
        </div>
        <div
          key={layout[6].i}
          style={{
            backgroundColor: "#6464C8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            color: "white",
            borderRadius: "10px",
          }}
        >
          {layout[6].i}
        </div>
        <div
          key={layout[7].i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            color: "white",
            borderRadius: "10px",
          }}
          className="relative bg-[#0d1117D9]"
        >
          <FaGithub />
          <a
            className="absolute bottom-3 left-3 bg-slate-400 rounded-full"
            onClick={() => {
              window.open("https://github.com/Bilguungantogos");
            }}
          >
            <MdArrowOutward size={40} className="p-2" />
          </a>
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};
