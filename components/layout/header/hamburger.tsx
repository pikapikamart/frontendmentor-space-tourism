import React, { useState, useEffect } from "react";


const Hamburger = ({ currentPath }: { currentPath: string }) =>{
  const [ isExpanded, setIsExpanded ] = useState(false);

  const handleHamburgerExpand = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    setIsExpanded(previous => !previous);
  }

  useEffect(() =>{
    if ( isExpanded ) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [ isExpanded ])

  useEffect(() =>{
    setIsExpanded(false);
  }, [ currentPath ])

  return (
    <button className="header__hamburger"
      aria-expanded={isExpanded}
      onClick={handleHamburgerExpand}>
      <span className="visually-hidden">navigation dropdown menu</span>
    </button>
  )
}


export default Hamburger;