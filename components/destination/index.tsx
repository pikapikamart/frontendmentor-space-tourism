import { useState, useRef, useEffect } from "react";
import { DestinationPageProps } from "@/pages/destination";
import { useChangeSelection } from "@/lib/hooks";
import DestinationImage from "./destinationImage";
import TabSelections from "./tabbedSelections";
import TabContent from "./tabbedContent";


const DestinationHero = ({ destinationData }: DestinationPageProps) =>{
  const [ focusOnContent, setFocusOnContent ] = useState(false);
  const { dataIndex, handleChangeDataIndex, hasSelected, setHasSelected } = useChangeSelection();
  const copyIndex = useRef(0);

  useEffect(() =>{

    const timeout = setTimeout(()=>{
      copyIndex.current = dataIndex;
      setHasSelected(false);
    }, 1100)

    return () => clearTimeout(timeout);

  }, [ dataIndex ])

  const getDestinationsName = () =>(
    destinationData.reduce((accu, cur) => accu.concat(cur.name), [] as string[])
  )

  return (
    <div className="hero">
      <h1 className="hero__heading hero__heading--padded">
        <span className="hero__heading-number" 
          aria-hidden="true">01</span>
        Pick your destination
      </h1>
      <div className="destination">
        <DestinationImage
          destination={destinationData[dataIndex]}
          hasChanged={hasSelected}
          copyImage={destinationData[copyIndex.current].images.webp} />
        <div className="tabs">
          <TabSelections 
            tabindex={dataIndex} 
            destinationNames={getDestinationsName()}
            changeIndex={handleChangeDataIndex}
            focusContent={focusOnContent}
            setFocusContent={setFocusOnContent}
          />
          <TabContent 
            tabindex={dataIndex} 
            destination={destinationData[dataIndex]} 
            shouldFocus={focusOnContent}
          />
        </div>
      </div>
    </div>
  );
}


export default DestinationHero;