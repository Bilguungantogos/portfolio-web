"use client";

import { getAuth } from "@/api/spotify";
import axios from "axios";
import React, {
  useEffect,
  useState,
  createContext,
  PropsWithChildren,
} from "react";

type ApiContextType = {
  tracks: any;
  setTracks: React.Dispatch<React.SetStateAction<any>>;
};

export const ApiContext = createContext<ApiContextType | null>({
  tracks: null,
  setTracks: () => {},
});

export const ApiProvider = ({ children }: PropsWithChildren) => {
  const [tracks, setTracks] = useState<any>({});

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
        setTracks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAudioFeatures_Track();
  }, []);

  return (
    <ApiContext.Provider value={{ tracks, setTracks }}>
      {children}
    </ApiContext.Provider>
  );
};
