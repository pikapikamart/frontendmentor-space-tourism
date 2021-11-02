import { NextPage, GetStaticProps } from "next";
import { Crew as CrewMain } from "@/page-components/crew";
import { fetchSpaceData } from "@/lib/utils";
import { Crew } from "@/lib/typings";


export interface CrewPageProps {
  crewData: Crew[]
}

const CrewPage: NextPage<CrewPageProps> = ({ crewData }: CrewPageProps) =>{

  return (
    <CrewMain crewData={crewData} />
  );
}

export const getStaticProps: GetStaticProps = async () =>{
  const crewData = await fetchSpaceData("crew");

  return {
    props: { crewData }
  }
}


export default CrewPage;