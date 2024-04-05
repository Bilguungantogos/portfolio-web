import React from "react";
import { motion } from "framer-motion";

const FigmaItem = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="dark:bg-slate-700 bg-[#F6F2F2] rounded-[20px]  max-[481px]:text-sm max-[481px]:w-[140px] max-[481px]:h-[80px] py-4 px-6 lg:text-xl shadow-lg"
      onMouseDown={(e: any) => {
        e.stopPropagation();
        window.open(
          "https://www.figma.com/proto/OOYYZWSg6qJ9vZxeOIVoAC/CV-Bilguun-Gantogos?node-id=1-9"
        );
      }}
    >
      Click to review my CV
    </motion.button>
  );
};

export default FigmaItem;
