import Link from "next/link";
import { useState, useRef, useEffect } from "react";


const Navlinks = ({ currentPath }: { currentPath: string }) =>{
  const [ currentPage, setCurrentPage ] = useState<HTMLAnchorElement | null>(null);
  const home = useRef(null);
  const destination = useRef(null);
  const crew = useRef(null);
  const technology = useRef(null);

  const setAriaCurrentPage = ( element: HTMLAnchorElement | null) =>{
    if ( null !== element) {
      element.setAttribute("aria-current", "page");
      setCurrentPage(element);
    }
  }
  
  useEffect(() =>{
    const currentLink = currentPath.slice(1);

    if ( currentPage ) {
      currentPage.removeAttribute("aria-current");
    }

    switch( currentLink ) {
      case "destination":
        setAriaCurrentPage(destination.current)
        break;
      case "crew":
        setAriaCurrentPage(crew.current);
        break;
      case "technology":
        setAriaCurrentPage(technology.current);
        break;
      default:
        setAriaCurrentPage(home.current);
        break;
    }
  }, [ currentPath ])
  
  return (
    <ul className="header__dropdown" data-currentpage={currentPath.slice(1)===""? "home": currentPath.slice(1)}>
      <li className="header__link-list">
        <Link href="/">
          <a className="header__link" 
          data-number="01"
          ref={home}>home</a>
        </Link>
      </li>
      <li className="header__link-list">
        <Link href="/destination">
          <a className="header__link" 
          data-number="02"
          ref={destination}>destination</a>
        </Link>
      </li>
      <li className="header__link-list">
        <Link href="/crew">
          <a className="header__link" 
          data-number="03"
          ref={crew}>crew</a>
        </Link>
      </li>
      <li className="header__link-list">
        <Link href="/technology">
          <a className="header__link" 
          data-number="04"
          ref={technology}>technology</a>
        </Link>
      </li>
    </ul>
  );
}


export default Navlinks;