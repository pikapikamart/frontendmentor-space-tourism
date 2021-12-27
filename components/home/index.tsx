import { motion } from "framer-motion";


const HomeHero = () =>{
  
  return (
    <div className="home">
      <div className="home__block">
        <h1 className="home__heading hero__heading">
          So, you want to travel to <span className="home__heading--largest">Space</span>
        </h1>
        <p className="home__text-content text-15">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="home__block">
        <motion.button className="home__explore"
          whileTap={{scale: .95}}>Explore 
          <span className="visually-hidden"> frontendmentor space tourism</span>
        </motion.button>
      </div>
    </div>
  );
}


export default HomeHero;