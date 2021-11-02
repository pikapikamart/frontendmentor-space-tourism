import DestinationHero from "@/components/destination";
import { DestinationPageProps } from "@/pages/destination";


const DestinationPage = ({ destinationData }: DestinationPageProps) =>{
  return (
    <DestinationHero destinationData={destinationData}/>
  );
}


export default DestinationPage;