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
      <div className="lg:px-16 md:px-12 sm:px-8 xs:px-4 dark:bg-[#090c10]">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
