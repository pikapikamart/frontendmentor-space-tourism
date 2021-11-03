import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import TechImageComp from "./techImageComp";


export interface TechImageProps {
  images: {
    portrait: string,
    landscape: string
  }
  techIndex: number,
  name: string
}

const TechImage = ({ images, techIndex, name }: TechImageProps) =>{
  const [ imageToShow, setImageToShow ] = useState("portrait");
  const [ width, setWidth ] = useState(0);

  const changeImage = ( event: UIEvent ) => setWidth(window.innerWidth);

  useEffect(() =>{
    
    if ( window.innerWidth < 1000 ) setImageToShow("landscape");
    if ( window.innerWidth >= 1000) setImageToShow("portrait");

    window.addEventListener("resize", changeImage);
    setWidth(window.innerWidth);

    return () => window.removeEventListener("resize", changeImage);
  }, [])

  useEffect(() =>{
    if ( width >= 1000 && imageToShow==="landscape") {
      setImageToShow("portrait");
    }if ( width < 1000 && imageToShow==="portrait") {
      setImageToShow("landscape")
    }
  }, [ width ])

  return (
    // <AnimatePresence exitBeforeEnter>
      <TechImageComp techIndex={techIndex}
        // key={techIndex}
        source={imageToShow==="portrait"? images.portrait: images.landscape}
        name={name}/>
    // </AnimatePresence>
  );
}


export default TechImage;