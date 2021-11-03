import { motion, AnimatePresence } from "framer-motion";
import { Crew } from "@/lib/typings";
import { dummyVariant, customSwipeVariant } from "@/components/motion";


interface CrewContentProps {
  crewSingleData: Crew
}

const CrewContent = ({ crewSingleData }: CrewContentProps) =>{

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="crew__article"
        key={crewSingleData.role}
        variants={dummyVariant}
        initial="hidden"
        animate="visible"
        exit="exit">
        <motion.h2 className="crew__article-heading"
          key={crewSingleData.name}
          variants={customSwipeVariant(-25)}>
          <span>{crewSingleData.role}</span>
          {crewSingleData.name}
        </motion.h2>
        <motion.p className="crew__article-text text-15"
          key={crewSingleData.bio}
          variants={customSwipeVariant(-25, 1)}>
          {crewSingleData.bio}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}


export default CrewContent;