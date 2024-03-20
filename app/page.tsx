import Image from "next/image";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      <div className="flex-1 h-full p-6">
        <div className="flex flex-col max-w-full h-[360px] space-y-6 rounded-3xl dark:bg-slate-700 px-8 py-6 ">
          <div className="flex justify-between">
            <Image
              alt="avatar"
              src="/IMG_8615.jpeg"
              width={"120"}
              height={"120"}
              className="object-cover rounded-full"
              priority
              loading="eager"
            />
            <ThemeToggle />
          </div>
          <div>
            <div className="text-xl font-semibold text-primary ">
              {siteConfig.title}
            </div>
            <h1 className="text-4xl font-bold my-2 text-white">
              {siteConfig.creator}
            </h1>
            <p className="text-2xl text-neutral-300 font-light">
              {siteConfig.bio}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full p-6">
        <div className="flex items-center justify-center h-full rounded-md dark:bg-emerald-700">
          Right Side
        </div>
      </div>
    </main>
  );
}
