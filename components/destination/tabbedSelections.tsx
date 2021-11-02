import { useRef,  Dispatch, SetStateAction } from "react";
import { EventButton } from "@/lib/typings";


interface TabSelectionsProps {
  tabindex: number,
  destinationNames: string[],
  changeIndex:  ( event: EventButton) => void,
  focusContent: boolean,
  setFocusContent: Dispatch<SetStateAction<boolean>>
}

const TabSelections = ({ tabindex, destinationNames, changeIndex, focusContent, setFocusContent }: TabSelectionsProps) =>{
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const length = destinationNames.length;
  const destinationTabindex = useRef(0);

  const addRef = ( element: HTMLButtonElement | null) =>{
    if ( element && !tabRefs.current.includes(element) ) {
      tabRefs.current.push(element);
    }
  }

  const renderTabChoices = () =>{
    const processedData = destinationNames.map(( name, index ) =>(
      <button key={index} 
        ref={ addRef}
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
        destinationTabindex.current--;
        destinationTabindex.current = destinationTabindex.current < 0? length-1: destinationTabindex.current;
      } else {
        destinationTabindex.current++;
        destinationTabindex.current = destinationTabindex.current > length-1 ? 0: destinationTabindex.current;
      }

      tabRefs.current[destinationTabindex.current].focus();
      if ( focusContent ) {
        setFocusContent(false);
      }
    }
    if ( key ==="ArrowDown" ) {
      destinationTabindex.current = tabindex;
      setFocusContent(true);
    }
  }

  return (
      <div className="tabs__selections"
        role="tablist"
        aria-label="destination selection tabs"
        onKeyDown={handleChangeTabFocus}>
        {renderTabChoices()}
      </div>
  );
}


export default TabSelections;