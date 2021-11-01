import { useState, useEffect, useRef } from "react";
import { useSpaceContext } from "@/lib/store/context";
import { EventButton } from "../destination/destination";
import CrewImage from "./crewImage";
import CrewSelections from "./crewSelections";
import CrewContent from "./crewContent";


const Crew = () =>{
  const spaceContext = useSpaceContext();
  const crewData = spaceContext?.crew;
  const liveRegion = useRef<HTMLParagraphElement | null>(null)
  const [ crewSelectionIndex, setCrewSelectionIndex ] = useState(0);
  const [ hasSelected, setHasSelected ] = useState(false);


  useEffect(() =>{
    if ( hasSelected && liveRegion.current && crewData ) {
      setHasSelected(false);
      liveRegion.current.textContent = crewData[crewSelectionIndex].name +  " selected";

      const timeout = setTimeout(() =>{liveRegion.current? liveRegion.current.textContent ="" : ""}, 300);

      return () => clearTimeout(timeout);
    }
    
  }, [ hasSelected ])

  const handleChangeCrewIndex = ( event: EventButton ) =>{
    const { dataset } = event.target;
    
    if ( dataset.index && crewSelectionIndex!==parseInt(dataset.index)) {
      setCrewSelectionIndex(parseInt(dataset.index));
      setHasSelected(true);
    }
  }

  return (
    <div className="crew">
      {crewData && (
        <>
          <CrewImage source={crewData[crewSelectionIndex].images.webp}
          alt={crewData[crewSelectionIndex].name} />
          <CrewSelections crewDatas={crewData} 
            crewIndex={crewSelectionIndex}
            changeCrewIndex={handleChangeCrewIndex} />
          <CrewContent crewSingleData={crewData[crewSelectionIndex]}
            hasSelected={hasSelected}/>
          <p className="crew__live-region visually-hidden" 
            aria-live="polite"
            ref={liveRegion}></p>
        </>
      )}
      
    </div>
  );
}


export default Crew;