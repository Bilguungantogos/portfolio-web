import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DragFromOutsideLayout } from "@/components/grid/DropDrag";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="h-full">
      <Header />
      <div className="lg:px-16 md:px-12 sm:px-8 xs:px-4 bg-slate-300">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
