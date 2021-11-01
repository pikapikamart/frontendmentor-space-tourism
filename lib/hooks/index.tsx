import { useState, useEffect, useRef } from "react";
import { EventButton } from "@/components/destination/destination";
import { Crew, Technology, Destinations } from "../store/context";


export const useChangeSelection = () =>{
  const liveRegion = useRef<HTMLParagraphElement | null>(null);
  const [ siteData, setSiteData ] = useState<Crew[] | Technology[] | Destinations[] | null>(null);
  const [ dataIndex, setDataIndex ] = useState(0);
  const [ hasSelected, setHasSelected ] = useState(false);

  const handleChangeDataIndex = (event: EventButton) =>{
    const { dataset } = event.target;

    if ( dataset.index && parseInt(dataset.index)!==dataIndex) {
      setDataIndex(parseInt(dataset.index));
      setHasSelected(true);
    }
  } 

  useEffect(() =>{
    if ( hasSelected && liveRegion.current && siteData ) {
      setHasSelected(false);
      
      liveRegion.current.textContent = siteData[dataIndex].name + " selected"
      
      const timeout = setTimeout(() =>{
        if ( liveRegion.current ) {
          liveRegion.current.textContent = ""
        }
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [ hasSelected ])

  return { liveRegion, dataIndex, handleChangeDataIndex, setSiteData, hasSelected, setHasSelected }
}

