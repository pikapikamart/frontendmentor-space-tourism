import { Destinations } from "@/lib/store/context";


interface DestinationImageProps {
  destination: Destinations,
  hasChanged: boolean,
  copyImage: string
}

const DestinationImage = ({ destination, hasChanged, copyImage }: DestinationImageProps) =>{

  return (
    <div className="destination__image-holder">
      <img className="destination__image"  
        src={destination.images.webp}
        alt={destination.name}
      />
      <img className={`destination__image ${hasChanged? "change": ""}`}
        src={copyImage}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}


export default DestinationImage;