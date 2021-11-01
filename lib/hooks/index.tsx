import { useState, useEffect, useRef } from "react";
import { EventButton } from "@/components/destination/destination";
import { Crew, Technology } from "../store/context";


interface UseChangeSelectionProps {
  data: Crew | Technology | null
}

export const useChangeSelection = (object: Crew | Technology | null) =>{
  const liveRegion = useRef<HTMLParagraphElement | null>(null);
  const [ dataIndex, setDataIndex ] = useState(0);
  const [ hasSelected, setHasSelected ] = useState(false);

  const handleChangeTechIndex = (event: EventButton) =>{
    const { dataset } = event.target;

    if ( dataset.index && parseInt(dataset.index)!==dataIndex) {
      setDataIndex(parseInt(dataset.index));
      setHasSelected(true);
    }
  } 

  useEffect(() =>{
    if ( hasSelected && liveRegion.current && object ) {
      setHasSelected(false);
      liveRegion.current.textContent = object.name + " selected"

      const timeout = setTimeout(() =>{liveRegion.current? liveRegion.current.textContent ="" : ""}, 300);

      return () => clearTimeout(timeout);
    }
  }, [ hasSelected ])

  return { liveRegion, dataIndex, handleChangeTechIndex }
}

