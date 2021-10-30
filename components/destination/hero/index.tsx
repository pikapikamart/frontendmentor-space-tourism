import Destination from "./destination";


const DestinationHero = () =>{

  return (
    <section className="hero">
      <h1 className="hero__heading hero__heading--padded" data-pagenumber="01">
        Pick your destination
      </h1>
      <Destination />
    </section>
  );
}


export default DestinationHero;