import { TechnologyPageProps } from "@/pages/technology";
import TechnologyHero from "@/components/technology";


const TechnologyPage = ({ technologyData }: TechnologyPageProps) =>{
  
  return (
    <TechnologyHero technologyData={technologyData}/>
  );
}


export default TechnologyPage;