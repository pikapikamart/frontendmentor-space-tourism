import { useEffect } from "react";
import { useSpaceContext } from "@/lib/store/context";
import { useChangeSelection } from "@/lib/hooks";
import TechImage from "./techImage";
import TechSelections from "./techSelection";
import TechContent from "./techContent";


const Technology = () =>{
  const spaceContext = useSpaceContext();
  const technologyData = spaceContext?.technology;
  const { liveRegion, dataIndex, handleChangeDataIndex, setSiteData} = useChangeSelection();

  useEffect(() =>{
    if ( technologyData ) setSiteData(technologyData);
  }, [ technologyData ])

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
            changeTechIndex={handleChangeDataIndex} />
          <TechContent techSingleData={technologyData[dataIndex]} />
          <p className="technology__live-region visually-hidden"
            aria-live="polite"
            ref={liveRegion} />
        </>
      )}
    </div>
  );
}


export default Technology;