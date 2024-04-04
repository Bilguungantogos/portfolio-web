"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export const CinemaAppItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url('https://i.redd.it/aq099c4j1wt91.jpg')`,
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
          className=" max-w-[350px] max-h-[200px] max-[481px]:w-[220px] max-[481px]:h-[140px] object-cover rounded-[32px] overflow-hidden"
        />
      </div>
      <div className="absolute bottom-3 left-4 flex gap-2">
        <div className={` ${isHovered} ? "scale-x-100" : "" `}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
            <MdArrowOutward
              size={40}
              className={`p-2 w-22 h-10 bg-slate-200 text-black rounded-[32px] hover:scale-x-10 transition-transform ${
                isHovered ? "scale-x-100" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseDown={(e) => {
                e.stopPropagation();
                window.open("https://github.com/Leap-MERN-2023/cinema-app");
              }}
            />
          </motion.button>
        </div>
        {isHovered && <button className="">to the GitHub source</button>}
      </div>
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
          className=" max-w-[350px] max-h-[200px] max-[481px]:w-[220px] max-[481px]:h-[140px] object-cover rounded-[32px] overflow-hidden"
        />
      </div>
      <div className="absolute bottom-3 left-4 flex gap-2">
        <div className={` ${isHovered} ? "scale-x-100" : "" `}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=""
          >
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
          </motion.button>
        </div>
        {isHovered && <button className="">to the GitHub source</button>}
      </div>
    </div>
  );
};

export const BlankProject = () => {
  return (
    <div
      className="h-full w-full bg-no-repeat bg-cover flex justify-center items-center dark:text-white  text-[#0F1117]"
      style={{
        backgroundImage: `url('./blankprojback.jpg')`,
      }}
    >
      Project will be added here.
    </div>
  );
};
