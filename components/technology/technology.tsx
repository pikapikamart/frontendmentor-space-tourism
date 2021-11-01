import { useSpaceContext } from "@/lib/store/context";
import { useState, useEffect, useRef } from "react";
import { EventButton } from "../destination/destination";
import { useChangeSelection } from "@/lib/hooks";
import TechImage from "./techImage";
import TechSelections from "./techSelection";
import TechContent from "./techContent";


const Technology = () =>{
  const spaceContext = useSpaceContext();
  const technologyData = spaceContext?.technology;
  const { liveRegion, dataIndex, handleChangeTechIndex} = useChangeSelection(null)
  // const liveRegion = useRef<HTMLParagraphElement | null>(null);
  // const [ techIndex, setTechIndex ] = useState(0);
  // const [ hasSelected, setHasSelected ] = useState(false);

  // const handleChangeTechIndex = ( event: EventButton ) =>{
  //   const { dataset } = event.target;

  //   if ( dataset.index && parseInt(dataset.index)!==techIndex ) {
  //     setTechIndex(parseInt(dataset.index));
  //     setHasSelected(true);
  //   }
  // }

  // useEffect(() =>{
  //   if ( hasSelected && liveRegion.current && technologyData ) {
  //     setHasSelected(false);
  //     liveRegion.current.textContent = technologyData[techIndex].name +  " selected";

  //     const timeout = setTimeout(() =>{liveRegion.current? liveRegion.current.textContent ="" : ""}, 300);

  //     return () => clearTimeout(timeout);
  //   }
    
  // }, [ hasSelected ])


  return (
    <div className="technology">
      {technologyData && (
        <>
          <TechImage 
            images={technologyData[dataIndex].images} 
            techIndex={dataIndex} />
          <TechSelections 
            techDatas={technologyData} 
            techIndex={dataIndex} 
            changeTechIndex={handleChangeTechIndex} />
          <TechContent 
            techSingleData={technologyData[dataIndex]} />
          <p className="technology__live-region visually-hidden"
            aria-live="polite"
            ref={liveRegion} />
        </>
      )}
    </div>
  );
}


export default Technology;