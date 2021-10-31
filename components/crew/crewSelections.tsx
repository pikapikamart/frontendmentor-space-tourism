import { Crew } from "@/lib/store/context";
import { EventButton } from "../destination/hero/destination";


interface CrewSelectionProps {
  crewDatas: Crew[],
  crewIndex: number,
  changeCrewIndex: ( event: EventButton )=> void
}

const CrewSelections = ({ crewDatas, crewIndex, changeCrewIndex }: CrewSelectionProps) =>{

  const renderSelections = () =>{
    const processedSelections = crewDatas.map((crew, index) =>(
      <li className="crew__selection"
        key={index}>
          <button className="crew__selection-button"
            aria-selected={index===crewIndex}
            data-index={index}
            onClick={changeCrewIndex}>
              <span className="visually-hidden">{crew.name}</span>
          </button>
      </li>
    ));


    return processedSelections;
  }

  return (
    <ul className="crew__selections">
      {renderSelections()}
    </ul>
  );
}


export default CrewSelections;