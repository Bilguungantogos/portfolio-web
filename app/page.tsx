"use client";

import { getAuth } from "@/api/spotify";
import { DragFromOutsideLayout } from "@/components/grid/DropDrag";
import Header from "@/components/header";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="h-[300vh] dark:bg-[#090c10] bg-[#F6F2F2]">
      <Header />
      <div className="xl:px-40 lg:px-20 md:px-10 xs:px-20  sm:px-20 xxs:px-6">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
