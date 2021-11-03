import { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { Crew as CrewMain } from "@/page-components/crew";
import { Crew } from "@/lib/typings";
import { fetchSpaceData, preloadImages } from "@/lib/utils";


export interface CrewPageProps {
  crewData: Crew[]
}

const CrewPage: NextPage<CrewPageProps> = ({ crewData }: CrewPageProps) =>{

  useEffect(() =>{
    preloadImages<Crew>(crewData);
  }, [])

  return (
    <CrewMain crewData={crewData} />
  );
}

export const getStaticProps: GetStaticProps = async () =>{
  const crewData = await fetchSpaceData<Crew>("crew");

  return {
    props: { crewData }
  }
}


export default CrewPage;