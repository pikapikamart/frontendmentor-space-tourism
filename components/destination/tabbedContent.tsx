import { Destinations } from "@/lib/store/context";


interface TabContentProps {
  tabindex: number,
  destination: Destinations
}

const TabContent = ({ tabindex, destination } : TabContentProps) =>{

  return (
    <div className="tabs__content"
      id="destination-choice"
      role="tabpanel"
      aria-labelledby={`destinationTab-${tabindex+1}`}
    >
      <h2 className="tabs__content-heading">{destination.name}</h2>
      <p className="text-15">{destination.description}</p>
      <ul className="tabs__content-information">
        <li className="tabs__content-info">
          <p>
            <span className="visually-hidden">Average</span>
            <span aria-hidden="true">avg. </span>
            distance
          </p>
          <p>{destination.distance}</p>
        </li>
        <li className="tabs__content-info">
          <p>
            <span className="visually-hidden">Estimated</span>
            <span aria-hidden="true">est. </span>
             travel time
          </p>
          <p>{destination.travel}</p>
        </li>
      </ul>
    </div>
  );
}


export default TabContent;