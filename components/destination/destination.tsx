import { useSpaceContext } from "@/lib/store/context";
import { useState, useEffect, useRef } from "react";
import { useChangeSelection } from "@/lib/hooks";
import DestinationImage from "./destinationImage";
import TabSelections from "./tabbedSelections";
import TabContent from "./tabbedContent";


interface TargetDataset extends HTMLButtonElement {
  index: number
}

export interface EventButton extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
  target: TargetDataset
}

const Destination = () =>{
  const spaceContext = useSpaceContext();
  const destinationsData = spaceContext?.destinations;
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
    spaceContext?.destinations ? spaceContext.destinations.reduce((accu, cur) => accu.concat(cur.name), [] as string[]) : []
  )

  return (
    <div className="destination">
      {destinationsData && (
        <>
          <DestinationImage
            destination={destinationsData[dataIndex]}
            hasChanged={hasSelected}
            copyImage={destinationsData[copyIndex.current].images.webp} />
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
              destination={destinationsData[dataIndex]} 
              shouldFocus={focusOnContent}
            />
          </div>
        </>
      )} 
    </div>
  );
}


export default Destination;