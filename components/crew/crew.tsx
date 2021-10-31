import { useState, useEffect, useRef } from "react";
import { useSpaceContext } from "@/lib/store/context";
import { EventButton } from "../destination/hero/destination";
import CrewSelections from "./crewSelections";
import CrewContent from "./crewContent";


const Crew = () =>{
  const spaceContext = useSpaceContext();
  const crewData = spaceContext?.crew;
  const liveRegion = useRef<HTMLParagraphElement | null>(null)
  const [ crewSelectionIndex, setCrewSelectionIndex ] = useState(0);
  
  // const radioIndex 

  const handleChangeCrewIndex = ( event: EventButton ) =>{
    const { dataset } = event.target;
    
    if ( dataset.index && crewSelectionIndex!==parseInt(dataset.index)) {
      setCrewSelectionIndex(parseInt(dataset.index));
    }
  }

  return (
    <div className="crew">
      {crewData && (
        <>
          <div className="crew__image-holder">
            <img className="crew__image" 
              src={crewData[crewSelectionIndex].images.webp} 
              alt={crewData[crewSelectionIndex].name}  />
          </div>
          <CrewSelections crewDatas={crewData} 
            crewIndex={crewSelectionIndex}
            changeCrewIndex={handleChangeCrewIndex} />
          <CrewContent crewSingleData={crewData[crewSelectionIndex]}/>
          <p className="crew__live-region visually-hidden" 
            aria-live="polite"
            ref={liveRegion}></p>
        </>
      )}
      
    </div>
  );
}


export default Crew;