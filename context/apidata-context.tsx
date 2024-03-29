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

  

  return (
    <ApiContext.Provider value={{ tracks, setTracks }}>
      {children}
    </ApiContext.Provider>
  );
};
