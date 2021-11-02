import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useSpaceContext } from "@/lib/store/context";
import { useChangeSelection } from "@/lib/hooks";
import CrewImage from "./crewImage";
import CrewSelections from "./crewSelections";
import CrewContent from "./crewContent";


const Crew = () =>{
  const spaceContext = useSpaceContext();
  const crewData = spaceContext?.crew;
  const { liveRegion, dataIndex, handleChangeDataIndex, setSiteData } = useChangeSelection();

  useEffect(() =>{
    if ( crewData ) setSiteData(crewData);
  }, [ crewData ])

  return (
    <div className="crew">
      {crewData && (
        <>
          <CrewImage 
            source={crewData[dataIndex].images.webp}
            alt={crewData[dataIndex].name} />
          <CrewSelections 
            crewDatas={crewData} 
            crewIndex={dataIndex}
            changeCrewIndex={handleChangeDataIndex} />
          <CrewContent crewSingleData={crewData[dataIndex]}/>
          <p className="crew__live-region visually-hidden" 
            aria-live="polite"
            ref={liveRegion}></p>
        </>
      )}
      
    </div>
  );
}


export default Crew;