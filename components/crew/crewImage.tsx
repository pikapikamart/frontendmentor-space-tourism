import { motion, AnimatePresence } from "framer-motion";
import { dummyVariant, opacityVariant } from "@/components/motion";


interface CrewImageProps {
  source: string,
  alt: string
}

const CrewImage = ({ source, alt}: CrewImageProps) =>{

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="crew__image-holder"
        key={source}
        variants={dummyVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        <motion.img className="crew__image" 
          src={source} 
          alt={alt}
          variants={opacityVariant}  />
      </motion.div>
    </AnimatePresence>
  );
}


export default CrewImage;