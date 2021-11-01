
interface CrewImageProps {
  source: string,
  alt: string
}

const CrewImage = ({ source, alt}: CrewImageProps) =>{

  return (
    <div className="crew__image-holder">
       <img className="crew__image" 
         src={source} 
         alt={alt}  />
     </div>
  );
}


export default CrewImage;