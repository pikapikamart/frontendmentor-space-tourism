import { useEffect } from "react";
import { TechnologyPageProps } from "@/pages/technology";
import { useChangeSelection } from "@/lib/hooks";
import TechImage from "./techImage";
import TechSelections from "./techSelection";
import TechContent from "./techContent";


const TechnologyHero = ({ technologyData }: TechnologyPageProps) =>{
  const { liveRegion, dataIndex, handleChangeDataIndex, setSiteData} = useChangeSelection();

  useEffect(() =>{
    setSiteData(technologyData);
  }, [])

  return (
    <div className="hero hero__technology">
      <h1 className="hero__heading hero__heading--padded hero__heading-crew">
        <span className="hero__heading-number" 
          aria-hidden="true">03</span>
        Space launch 101
      </h1>
      <div className="technology">
        <TechImage 
          images={technologyData[dataIndex].images} 
          techIndex={dataIndex}
          name={technologyData[dataIndex].name} />
        <TechSelections 
          techDatas={technologyData} 
          techIndex={dataIndex} 
          changeTechIndex={handleChangeDataIndex} />
        <TechContent techSingleData={technologyData[dataIndex]} />
        <p className="technology__live-region visually-hidden"
          aria-live="polite"
          ref={liveRegion} />
      </div>
    </div>
  );
}


export default TechnologyHero;