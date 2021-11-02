import { NextPage, GetStaticProps } from "next";
import { Technology as TechnologyMain } from "@/page-components/technology";
import { fetchSpaceData } from "@/lib/utils";
import { Technology } from "@/lib/typings";


export interface TechnologyPageProps {
  technologyData: Technology[]
}

const TechnologyPage: NextPage<TechnologyPageProps> = ({ technologyData }: TechnologyPageProps) =>{

  return (
    <TechnologyMain technologyData={technologyData}/>
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const technologyData = await fetchSpaceData("technology");

  return {
    props: { technologyData }
  }
}

export default TechnologyPage