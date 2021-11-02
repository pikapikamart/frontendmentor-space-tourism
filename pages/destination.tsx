import { NextPage, GetStaticProps } from "next";
import { Destination as DestinationMain} from "@/page-components/destination";
import { Destination } from "@/lib/typings";
import { fetchSpaceData } from "@/lib/utils";


export interface DestinationPageProps {
  destinationData: Destination[]
}

const DestinationPage: NextPage<DestinationPageProps> = ({destinationData}: DestinationPageProps) =>{
  
  return (
    <DestinationMain destinationData={destinationData} />
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const destinationData = await fetchSpaceData("destinations")
  
  return {
    props: { destinationData }
  }
}


export default DestinationPage;