import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import Hamburger from "./hamburger";


const Navbar = () =>{
  
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
      <nav>
        <Hamburger />
        <ul className="header__dropdown">
          <li className="header__link-list">
            <Link href="/">
              <a className="header__link">home</a>
            </Link>
          </li>
          <li className="header__link-list">
            <Link href="/destination">
              <a className="header__link">destination</a>
            </Link>
          </li>
          <li className="header__link-list">
            <Link href="/crew">
              <a className="header__link">crew</a>
            </Link>
          </li>
          <li className="header__link-list">
            <Link href="/technology">
              <a className="header__link">technology</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}


export default Navbar;