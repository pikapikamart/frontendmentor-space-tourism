import { useEffect } from "react";
import { CrewPageProps } from "@/pages/crew";
import { useChangeSelection } from "@/lib/hooks";
import CrewImage from "./crewImage";
import CrewSelections from "./crewSelections";
import CrewContent from "./crewContent";


const CrewHero = ({ crewData }: CrewPageProps) => {
  const { liveRegion, dataIndex, handleChangeDataIndex, setSiteData } = useChangeSelection();

  useEffect(() =>{
    setSiteData(crewData);
  }, [])

  return (
    <div className="hero hero__crew">
      <h1 className="hero__heading hero__heading--padded">
        <span className="hero__heading-number" 
          aria-hidden="true">02</span>
        Meet your crew
      </h1>
      <div className="crew">
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
      </div>
    </div>
  );
}


export default CrewHero;