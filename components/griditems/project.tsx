"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

export const CinemaAppItem = () => {
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://i.redd.it/aq099c4j1wt91.jpg')`,
      }}
    >
      <img src="" className="origin-center rotate-45 ..." />
    </div>
  );
};

export const FoodDeliveryAppItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url('./foodback.jpg')`,
      }}
    >
      <div className="">
        <img
          src="./fooddelivery.png"
          style={{
            transform: "rotate(-28deg)",
            transformOrigin: "80% 40%",
            maxWidth: "350px",
            maxHeight: "200px",
            borderRadius: "32px",
            objectFit: "cover",
            overflow: "hidden",
            margin: "auto",
            display: "block",
          }}
          className=" max-w-[350px] max-h-[200px] max-[481px]:w-[50px] max-[481px]:h-[20px] object-cover rounded-[32px] overflow-hidden"
        />
      </div>
      <div className="absolute bottom-3 left-4 flex gap-2">
        <div className={` ${isHovered} ? "scale-x-100" : "" `}>
          <MdArrowOutward
            size={40}
            className={`p-2 w-22 h-10 bg-slate-200 text-black rounded-[32px] hover:scale-x-10 transition-transform ${
              isHovered ? "scale-x-100" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={(e) => {
              e.stopPropagation();
              window.open(
                "https://github.com/Bilguungantogos/food-delivery-app"
              );
            }}
          />
        </div>
        {isHovered && <button className="">to the GitHub source</button>}
      </div>
    </div>
  );
};
