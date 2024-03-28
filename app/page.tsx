"use client";

import { getAudioFeatures_Track, getAuth } from "@/api/spotify";
import { DragFromOutsideLayout } from "@/components/grid/DropDrag";
import Header from "@/components/header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getAudioFeatures_Track();
  }, []);
  return (
    <main className="h-full">
      <Header />
      <div className="xl:px-40 lg:px-20 md:px-10 xs:px-20  sm:px-20 xxs:px-6  dark:bg-[#090c10]">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
