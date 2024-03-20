import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      <div className="flex-1 h-full p-6">
        <div className="flex flex-col items-center max-w-md h-full space-y-6 rounded-md dark:bg-emerald-700 p-6 ">
          <Image
            alt="avatar"
            src="/IMG_8615.jpeg"
            width={"120"}
            height={"120"}
            priority
            loading="eager"
          />
          <div>
            <div className="text-xl font-semibold text-primary ">
              {siteConfig.title}
            </div>
            <div className="text-4xl font-bold mt-2">{siteConfig.creator}</div>
            <div>{siteConfig.bio}</div>
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
