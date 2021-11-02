import { EventButton, Technology } from "@/lib/typings";


interface TechSelectionsProps {
  techDatas: Technology[],
  techIndex: number,
  changeTechIndex: ( event: EventButton ) => void
}

const TechSelections = ({ techDatas, techIndex, changeTechIndex}: TechSelectionsProps) =>{

  const renderSelections = () =>{
    const processedSelections = techDatas.map( ( tech, index ) =>(
      <li className="technology__selection"
        key={index}>
          <button className="technology__selection-button"
            data-selected={index===techIndex}
            data-index={index}
            onClick={changeTechIndex}
          >
            <span aria-hidden="true">{index+1}</span>
            <span className="visually-hidden">{tech.name}</span>
            {index===techIndex && (
              <span className="visually-hidden">(Current Item)</span>
            )}
          </button>
      </li>
    ));

    return processedSelections;
  }

  return(
    <ul className="technology__selections"
      data-currenttech={techIndex}>
      {renderSelections()}
    </ul>
  );
}


export default TechSelections