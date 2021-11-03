import { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { Destination as DestinationMain} from "@/page-components/destination";
import { Destination } from "@/lib/typings";
import { fetchSpaceData, preloadImages } from "@/lib/utils";


export interface DestinationPageProps {
  destinationData: Destination[]
}

const DestinationPage: NextPage<DestinationPageProps> = ({destinationData}: DestinationPageProps) =>{
  
  useEffect(() =>{
    preloadImages<Destination>(destinationData);
  }, [])

  return (
    <DestinationMain destinationData={destinationData} />
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const destinationData = await fetchSpaceData<Destination>("destinations")
  
  return {
    props: { destinationData }
  }
}


export default DestinationPage;