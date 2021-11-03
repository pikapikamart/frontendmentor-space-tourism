import { motion, AnimatePresence } from "framer-motion";
import { Technology } from "@/lib/typings";
import { customSwipeVariant, dummyVariant } from "@/components/motion";


interface TechContentProps {
  techSingleData: Technology
}

const TechContent = ({ techSingleData,  }: TechContentProps) =>{

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="technology__article"
        key={`crew/${techSingleData.name}`}
        variants={dummyVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        <motion.h2 className="crew__article-heading"
          key={techSingleData.name}
          variants={customSwipeVariant(-25)}>
          <span>the terminology...</span>
          {techSingleData.name}
        </motion.h2>
        <motion.p className="technology__article-text text-15"
          key={techSingleData.description}
          variants={customSwipeVariant(-25, 1)}>
          {techSingleData.description}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}


export default TechContent;