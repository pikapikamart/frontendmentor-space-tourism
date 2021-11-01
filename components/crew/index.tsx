import Crew from "./crew";


const CrewHero = () => {
  
  return (
    <section className="hero hero__crew">
      <h1 className="hero__heading hero__heading--padded">
        <span className="hero__heading-number" 
          aria-hidden="true">02</span>
        Meet your crew
      </h1>
      <Crew />
    </section>
  );
}


export default CrewHero;