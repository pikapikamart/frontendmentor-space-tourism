import { useSpaceContext } from "@/lib/store/context";
import { useState, useEffect, useRef } from "react";
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
  const destinationsData = spaceContext?.destinations;
  const [ tabindex, setTabindex ] = useState(0);
  const [ firstLoad, setFirstLoad ] = useState(true);
  const [ hasChanged, setHasChanged ] = useState(false);
  const destImageOne = useRef<HTMLImageElement | null>(null);
  const destImageTwo = useRef<HTMLImageElement | null>(null);
  const copyIndex = useRef(0);

  useEffect(() =>{
    if ( firstLoad ) return;

    const timeout = setTimeout(()=>{
      copyIndex.current = tabindex;
      setHasChanged(false);
    }, 1510)

    return () => clearTimeout(timeout);

  }, [ tabindex ])

  // preload images
  useEffect(() =>{
    if ( destinationsData ) {
      destinationsData.forEach(destination =>{
        const image = new Image();
        image.src = destination.images.webp;
      })
      setFirstLoad(false);
    }
  }, [ destinationsData ])

  const getDestinationsName = () =>(
    spaceContext?.destinations ? spaceContext.destinations.reduce((accu, cur) => accu.concat(cur.name), [] as string[]) : []
  )

  const changeDestinationIndex = (event: DestinationButton) =>{
    const { target } = event;
    
    if ( target.dataset.index && tabindex!==parseInt(target.dataset.index) ) {
      setTabindex(parseInt(target.dataset.index));
      setHasChanged(true);
    }
  }


  return (
    <div className="destination">
      {destinationsData && (
        <>
          <div className="destination__image-holder">
            <img className={`destination__image ${hasChanged? "change": ""}`} 
              src={destinationsData[tabindex].images.webp}
              alt={destinationsData[tabindex].name}
              ref={destImageOne} />
            <img className={`destination__image ${hasChanged? "change": ""}`}
              src={destinationsData[copyIndex.current].images.webp}
              alt=""
              aria-hidden="true"
              ref={destImageTwo} />
          </div>
          <div className="tabs">
            <TabSelections 
              tabindex={tabindex} 
              destinationNames={getDestinationsName()}
              changeIndex={changeDestinationIndex}
            />
            <TabContent 
              tabindex={tabindex} 
              destination={destinationsData[tabindex]} 
            />
          </div>
        </>
      )} 
    </div>
  );
}


export default Destination;