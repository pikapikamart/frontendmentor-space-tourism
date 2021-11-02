import CrewHero from "@/components/crew";
import { CrewPageProps } from "@/pages/crew";


const CrewPage = ({ crewData }: CrewPageProps) =>{
  
  return (
    <CrewHero crewData={crewData} />
  );
}


export default CrewPage;