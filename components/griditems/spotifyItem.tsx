"use client";

import { getAuth } from "@/api/spotify";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import { motion } from "framer-motion";

const SpotifyItem = () => {
  const [tracks, setTracks] = useState<any>({});
  const [artist, setArtist] = useState<any>({});
  useEffect(() => {
    const getAudioFeatures_Track = async () => {
      const access_token = await getAuth();

      const api_url = `https://api.spotify.com/v1/tracks?ids=4N2qNs5FhQHZh4YtdIWy2v`;

      try {
        const response = await axios.get(api_url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        console.log(response.data);
        setTracks(response.data.tracks[0]);
        setArtist(response.data.tracks[0].artists[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getAudioFeatures_Track();
  }, []);

  return (
    <div className="sm:p-3 lg:p-8 md:p-8 xl:p-8 p-3 h-full flex flex-col justify-between">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseDown={(e: any) => {
          e.stopPropagation();
          window.open(
            "https://open.spotify.com/playlist/5B53KpbxKXlM8DPeVEqAhr"
          );
        }}
        className="cursor-pointer max-sm:size-[35px] size-[50px]"
      >
        <FaSpotify size={"full"} />
      </motion.button>
      <div>
        <div className="flex items-center select-none">
          <UseAnimations
            animation={activity}
            size={30}
            fillColor={"green"}
            strokeColor="green"
          />
          <p className="sm:text-lg text-sm">Now Playing...</p>
        </div>
        <p className="sm:text-lg text-sm mt-1 select-none">{tracks?.name}</p>
        <p className="sm:text-2xl text-lg text-bold select-none">
          {artist?.name}
        </p>
      </div>
    </div>
  );
};

export default SpotifyItem;
