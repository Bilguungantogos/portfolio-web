import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DragFromOutsideLayout } from "@/components/DropDrag";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className="w-full lg:px-12 md:px-8 sm:px-4 xs:px-2 bg-slate-300">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
