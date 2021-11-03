import { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { Technology as TechnologyMain } from "@/page-components/technology";
import { Technology } from "@/lib/typings";
import { fetchSpaceData, preloadImages } from "@/lib/utils";


export interface TechnologyPageProps {
  technologyData: Technology[]
}

const TechnologyPage: NextPage<TechnologyPageProps> = ({ technologyData }: TechnologyPageProps) =>{

  useEffect(() =>{
    preloadImages<Technology>(technologyData);
  }, [])
  return (
    <TechnologyMain technologyData={technologyData}/>
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const technologyData = await fetchSpaceData<Technology>("technology");

  return {
    props: { technologyData }
  }
}

export default TechnologyPage