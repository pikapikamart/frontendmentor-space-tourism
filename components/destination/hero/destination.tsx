import { useSpaceContext } from "@/lib/store/context";
import { Destinations } from "@/lib/store/context";
import { useState, useEffect } from "react";

import TabSelections from "./tabbedSelections";
import TabContent from "./tabbedContent";

interface TargetDataset extends HTMLButtonElement {
  index: number
}

export interface DestinationButton extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
  target: TargetDataset
}


const Destination = () =>{
  const spaceContext = useSpaceContext();
  const [ destinationsData, setDestinationsData ] = useState<Destinations>();
  const [ tabindex, setTabindex ] = useState(0);

  useEffect(() =>{
    if ( spaceContext ) {
      setDestinationsData(spaceContext.destinations[tabindex]);
    }
  }, [spaceContext])

  useEffect(() =>{
    if ( spaceContext ) {
      setDestinationsData(spaceContext?.destinations[tabindex]);
    }
  }, [ tabindex ])

  const getDestinationsName = () =>(
    spaceContext?.destinations ? spaceContext.destinations.reduce((accu, cur) => accu.concat(cur.name), [] as string[]) : []
  )

  const changeDestinationIndex = (event: DestinationButton) =>{
    const { target } = event;
    
    if ( target.dataset.index ) {
      setTabindex(parseInt(target.dataset.index));
    }
  }

  return (
    <div className="destination">
      {destinationsData && (
        <>
          <div className="destination__image-holder">
            <img className="destination__image" 
              src={destinationsData.images.webp}
              alt={destinationsData.name} />
            <img className="destination__image" 
              src={destinationsData.images.webp}
              alt=""
              aria-hidden="true" />
          </div>
          {/* tabbed selections */}
          <TabSelections 
            tabindex={tabindex} 
            destinationNames={getDestinationsName()}
            changeIndex={changeDestinationIndex}/>
          {/* tabbed groupings with props */}
          <TabContent tabindex={tabindex} destination={destinationsData} />
        </>
      )}
      
      
    </div>
  );
}


export default Destination;