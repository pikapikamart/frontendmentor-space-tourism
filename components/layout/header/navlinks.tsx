import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const destinationNames = ["home", "destination", "crew", "technology"];

const Navlinks = ({ currentPath }: { currentPath: string }) =>{
  const [ currentPage, setCurrentPage ] = useState<HTMLAnchorElement | null>(null);
  const pageNamesRef = useRef<HTMLAnchorElement[]>([]);

  const addRef = ( element: HTMLAnchorElement ) =>{

    if ( pageNamesRef.current && !pageNamesRef.current.includes(element)) {
      pageNamesRef.current.push(element);
    }
  }

  const renderLinks = () =>{
    const processedLinks = destinationNames.map(( name, index ) =>(
      <li className="header__link-list" key={index}>
        <Link href={`${name==="home"? "/" : `/${name}`}`}>
          <a className="header__link" 
          ref={addRef}>
            <span className="header__link-number" aria-hidden="true">0{index}</span>
            {name}</a>
        </Link>
      </li>
    ))

    return processedLinks;
  }

  const setAriaCurrentPage = ( element: HTMLAnchorElement | null) =>{
    if ( null !== element) {
      element.setAttribute("aria-current", "page");
      setCurrentPage(element);
    }
  }
  
  useEffect(() =>{
    const currentLink = currentPath.slice(1)? currentPath.slice(1): "home";
    const currentLinkIndex = destinationNames.indexOf(currentLink);

    if ( currentPage ) {
      currentPage.removeAttribute("aria-current");
    }

    setAriaCurrentPage(pageNamesRef.current[currentLinkIndex]);
  }, [ currentPath ])
  
  return (
    <ul className="header__dropdown" data-currentpage={currentPath.slice(1)===""? "home": currentPath.slice(1)}>
      { renderLinks()}
    </ul>
  );
}


export default Navlinks;