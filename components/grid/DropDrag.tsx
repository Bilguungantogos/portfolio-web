"use client";

import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { ThemeToggle } from "../theme-toggle";
import { siteConfig } from "@/config/site-config";
import "./mygrid.css";
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
  ];

  const rowsMax = 8;
  const columnsMax = 4;
  const layout2 = [];

  for (let i = 0; i < rowsMax; i++) {
    for (let j = 0; j < columnsMax; j++)
      layout2.push({ i: `a${i}-${j}`, x: i, y: j, w: 1, h: 1 });
  }
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
          xxs: layout,
        }}
        cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
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
            color: "white",
            borderRadius: "10px",
          }}
          className="flex items-center max-w-full space-x-6 rounded-3xl dark:bg-slate-700 px-8 "
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
            backgroundColor: "#6464C8",
            borderRadius: "10px",
          }}
          className="relative"
        >
          <div className="absolute top-[26%] left-[38%] translate-x-[50%] translate-y-[50%]">
            <ThemeToggle />
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
            backgroundColor: "#6464C8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,
            color: "white",
            borderRadius: "10px",
          }}
        >
          {layout[3].i}
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
          {layout[4].i}
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
      </ResponsiveReactGridLayout>
    </div>
  );
};
