import { useState, useEffect } from "react";


interface TechImageProps {
  images: {
    portrait: string,
    landscape: string
  }
  techIndex: number
}

const TechImage = ({ images, techIndex }: TechImageProps) =>{
  const [ imageToShow, setImageToShow ] = useState("portrait");

  const changeImage = ( event: UIEvent ) =>{

    if ( window.innerWidth >= 1000 && imageToShow==="landscape") {
      setImageToShow("portrait");
    }if ( window.innerWidth < 1000 && imageToShow==="portrait") {
      setImageToShow("landscape")
    }
  }

  useEffect(() =>{
    
    if ( window.innerWidth < 1000 ) setImageToShow("landscape");
    if ( window.innerWidth >= 1000) setImageToShow("portrait");

    window.addEventListener("resize", changeImage);

    return () => window.removeEventListener("resize", changeImage);
  }, [])

  return (
    <div className="technology__image-holder">
      <img className="technology__image" 
        src={imageToShow==="portrait"? images.portrait: images.landscape}
        alt={techIndex===0? "spacecraft launching":
            techIndex===1? "spaceport where spacecraft is docked":
            techIndex===2? "space capsules floating": "" 
          }
             />
    </div>
  );
}


export default TechImage;