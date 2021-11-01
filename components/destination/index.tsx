import Destination from "./destination";


const DestinationHero = () =>{

  return (
    <section className="hero">
      <h1 className="hero__heading hero__heading--padded">
        <span className="hero__heading-number" 
          aria-hidden="true">01</span>
        Pick your destination
      </h1>
      <Destination />
    </section>
  );
}


export default DestinationHero;