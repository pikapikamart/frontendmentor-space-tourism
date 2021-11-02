import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { Destination } from "@/lib/typings";
import { dummyVariant, customSwipeVariant } from "@/components/motion";


interface TabContentProps {
  tabindex: number,
  destination: Destination,
  shouldFocus: boolean
}

const TabContent = ({ tabindex, destination, shouldFocus } : TabContentProps) =>{
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() =>{
    if ( shouldFocus && contentRef.current ) {
      contentRef.current.focus();
    }
  }, [ shouldFocus ])

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="tabs__content"
        ref={contentRef}
        key={tabindex}
        variants={dummyVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        id="destination-choice"
        role="tabpanel"
        aria-labelledby={`destinationTab-${tabindex+1}`}
        tabIndex={-1}>
        <motion.h2 className="tabs__content-heading"
          key={destination.name}
          variants={customSwipeVariant(25)}>
            {destination.name}
        </motion.h2>
        <motion.p className="text-15"
          key={destination.description}
          variants={customSwipeVariant(25, 1)}> 
            {destination.description}
        </motion.p>
        <ul className="tabs__content-information">
          <motion.li className="tabs__content-info"
            key={destination.distance}
            variants={customSwipeVariant(25, 2)}> 
              <p>
                <span className="visually-hidden">Average</span>
                <span aria-hidden="true">avg. </span>
                distance
              </p>
              <p>{destination.distance}</p>
          </motion.li>
          <motion.li className="tabs__content-info"
            key={destination.travel}
            variants={customSwipeVariant(25, 3)}> 
            <p>
              <span className="visually-hidden">Estimated</span>
              <span aria-hidden="true">est. </span>
               travel time
            </p>
            <p>{destination.travel}</p>
          </motion.li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}


export default TabContent;