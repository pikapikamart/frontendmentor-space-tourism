import Technology from "./technology";


const TechnologyHero = () =>{
  
  return (
    <section className="hero hero__technology">
      <h1 className="hero__heading hero__heading--padded hero__heading-crew">
        <span className="hero__heading-number" 
          aria-hidden="true">03</span>
        Space launch 101
      </h1>
      <Technology />
    </section>
  );
}


export default TechnologyHero;