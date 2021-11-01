import { Technology } from "@/lib/store/context";


interface TechContentProps {
  techSingleData: Technology
}

const TechContent = ({ techSingleData,  }: TechContentProps) =>{

  return (
    <article className="technology__article">
      <h2 className="crew__article-heading">
        <span>the terminology...</span>
        {techSingleData.name}
      </h2>
      <p className="technology__article-text text-15">{techSingleData.description}</p>
    </article>
  );
}


export default TechContent;