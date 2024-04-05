"use client";

import { getAuth } from "@/api/spotify";
import { DragFromOutsideLayout } from "@/components/grid/DropDrag";
import Header from "@/components/header";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="h-[300vh] w-full dark:bg-[#090c10] bg-[#F6F2F2] ">
      <Header />
      <div className="max-w-[1250px] mx-auto">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
// xl:px-40 lg:px-20 md:px-10 xs:px-20  sm:px-20 xxs:px-6
