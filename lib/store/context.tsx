import { createContext, useContext, useEffect, useState } from "react";
import {ReactNode} from "react"


export interface Destinations {
  name: string,
  images: {
    png: string,
    webp: string
  },
  description: string,
  distance: string,
  travel: string
}

export interface Crew {
  name: string,
  images: {
    pgn: string,
    webp: string
  },
  role: string,
  bio: string
}

export interface Technology {
  name: string,
  images: {
    portrait: string,
    landscape: string
  },
  description: string
}

interface SpaceDataShape {
  destinations: Destinations[],
  crew: Crew[],
  technology: Technology[]
}

interface ContextChildren {
  children: ReactNode
}

const SpaceDataContext = createContext<SpaceDataShape | null>(null);


export const ContextWrapper = ( {children} : ContextChildren) =>{
  const [ spaceData, setSpaceData ] = useState<SpaceDataShape | null>(null);

  useEffect(() =>{
    const fetchSpaceData = async () =>{
      const promiseSpaceData = await fetch("https://my-json-server.typicode.com/pikamart/jsonserver/db");
      const jsonSpaceData = await promiseSpaceData.json();

      setSpaceData(jsonSpaceData);
    };
    fetchSpaceData();
  }, []);

// Preload all images
  useEffect(() =>{
    if ( spaceData ) {
      Object.keys(spaceData).forEach(( spaceKey: String ) => {
        spaceData[spaceKey as keyof typeof spaceData].map((data) =>{
          Object.keys(data.images).forEach((imagesKey: string) =>{
            const image = new Image();
            image.src = data.images[imagesKey as keyof typeof data.images]
          })
        })
      })
    }
  }, [ spaceData ])

  return (
    <SpaceDataContext.Provider value={spaceData}>
      {children}
    </SpaceDataContext.Provider>
  )
}


export const useSpaceContext = () =>{
  return useContext(SpaceDataContext);
}