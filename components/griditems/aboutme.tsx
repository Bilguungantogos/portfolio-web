import { siteConfig } from "@/config/site-config";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex items-center space-x-6">
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
        <div className="max-sm:flex max-sm:items-center max-sm:gap-2">
          <div className="sm:text-xl font-semibold text-primary select-none">
            {siteConfig.title}
          </div>
          <h1 className="sm:text-4xl font-bold my-2 text-white select-none">
            {siteConfig.creator}
          </h1>
        </div>
        <p className="sm:text-2xl text-neutral-300 font-light select-none">
          {siteConfig.bio}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
