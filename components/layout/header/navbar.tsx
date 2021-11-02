import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import Hamburger from "./hamburger";
import Navlinks from "./navlinks";


const Navbar = () =>{
  const currentPath = useRouter().pathname;

  return (
    <>
      <div>
        <Link href="/">
          <a className="header__logo-link">
            <span className="visually-hidden">homepage</span>
            <img className="header__logo" 
              src="/assets/shared/logo.svg" 
              alt="space tourism" />
          </a>
        </Link>
      </div>
      <nav aria-label="primary">
        <Hamburger currentPath={currentPath.slice(1)} />
        <Navlinks currentPath={currentPath}/>
      </nav>
    </>
  );
}


export default Navbar;