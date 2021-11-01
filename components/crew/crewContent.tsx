import { Crew } from "@/lib/store/context";


interface CrewContentProps {
  crewSingleData: Crew
}

const CrewContent = ({ crewSingleData }: CrewContentProps) =>{

  return (
    <article className="crew__article">
          <h2 className="crew__article-heading">
            <span>{crewSingleData.role}</span>
            {crewSingleData.name}
          </h2>
          <p className="crew__article-text text-15">{crewSingleData.bio}</p>
    </article>
  );
}


export default CrewContent;