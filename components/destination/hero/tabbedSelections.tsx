import { useRef } from "react";

import { DestinationButton } from "./destination";


interface TabSelectionsProps {
  tabindex: number,
  destinationNames: string[],
  changeIndex:  ( event: DestinationButton) => void
}

const TabSelections = ({ tabindex, destinationNames, changeIndex }: TabSelectionsProps) =>{
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const length = destinationNames.length;
  let destinationTabindex = tabindex;

  const renderTabChoices = () =>{
    const processedData = destinationNames.map(( name, index ) =>(
      <button key={index} 
        ref={ element => element? tabRefs.current.push(element) : null}
        className="tabs__choice"
        role="tab"
        aria-controls="destination-choice"
        aria-selected={tabindex===index}
        id={`destinationTab-${index+1}`}
        tabIndex={tabindex===index? 0: -1}
        data-index={index}
        onClick={changeIndex}>
        {name}
      </button>
    ));

    return processedData;
  }

  const handleChangeTabFocus = ( event: React.KeyboardEvent<HTMLDivElement> ) =>{
    const { key } = event;
  
    if ( key==="ArrowLeft" || key==="ArrowRight") {
      
      if ( key==="ArrowLeft") {
        destinationTabindex--;
        destinationTabindex = destinationTabindex < 0? length-1: destinationTabindex;
      } else {
        destinationTabindex++;
        destinationTabindex = destinationTabindex > length-1 ? 0: destinationTabindex;
      }
      tabRefs.current[destinationTabindex].focus();
    }
  }

  return (
    <div className="tabs"
      role="tablist"
      aria-label="destination selection tabs"
      onKeyDown={handleChangeTabFocus}
    >
      <div className="tabs__selections">
        {renderTabChoices()}
      </div>
    </div>
  );
}


export default TabSelections;