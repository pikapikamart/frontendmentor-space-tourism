import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dummyVariant, opacityVariant } from "../motion";

interface TechImageCompProps {
  techIndex: number,
  source: string,
  name: string
}

const TechImageComp = ({ techIndex, source, name }: TechImageCompProps) =>{
  
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="technology__image-holder"
        key={techIndex}
        variants={dummyVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        <motion.img className="technology__image"
          src={source}
          alt={techIndex===0? "spacecraft launching":
              techIndex===1? "spaceport where spacecraft is docked":
              techIndex===2? "space capsules floating": "" 
            }
          variants={opacityVariant}
              />
      </motion.div>
    </AnimatePresence>
  );
}


export default memo(TechImageComp);