import { memo } from "react";
import { motion } from "framer-motion";
import { dummyVariant, opacityVariant } from "../motion";

interface TechImageCompProps {
  techIndex: number,
  source: string,
  name: string
}

const TechImageComp = ({ techIndex, source, name }: TechImageCompProps) =>{
  
  return (
    <motion.div className="technology__image-holder"
      variants={dummyVariant}
      initial="hidden"
      animate="visible"
      exit="exit">
      <img className="technology__image-hidden" 
        src={source} alt="" 
        aria-hidden="true" />
      <motion.img className="technology__image"
        src={source}
        alt={techIndex===0? "spacecraft launching":
            techIndex===1? "spaceport where spacecraft is docked":
            techIndex===2? "space capsules floating": "" 
          }
        key={name} 
        variants={opacityVariant}
            />
    </motion.div>
  );
}


export default memo(TechImageComp);