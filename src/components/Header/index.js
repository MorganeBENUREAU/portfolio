import menu from "../../images/menu.svg";
import cross from "../../images/cross.svg";

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleNav = () => {
    setIsActive(!isActive);
  };
    
  return (
    <header className="bg-custom-blue text-white fixed top-0 z-50 w-full shadow shadow-custom-grey">
      <nav
        id="main-nav"
        className="bg-custom-pinkgrey max-w-6xl mx-auto font-cormorantInfant p-2 flex items-center justify-between"
      >
        <Link to="/">
          <h1 className="font-josefinslab text-3xl font-bold">Morgane Benureau</h1>
        </Link>

        <button
          id="menu-btn"
          className="cursor-pointer w-10 md:hidden"
          onClick={toggleNav}
          aria-label="toggle navigation"
        >
          <img 
          src={isActive ? cross : menu} 
          alt="" 
          className="logo" />
        </button>

        <ul
          id="toggled-menu"
          className={` border border-solid border-green-700 w-full absolute top-full left-0 -z-10 flex flex-col items-center md:static md:z-10 md:w-max md:transform-none md:flex-row 
            ${isActive ? "bg-custom-pinkgrey h-screen justify-center -mt-20 md:h-auto md:mt-0" : "-translate-y-full "}`}
          onClick={toggleNav}
        >
          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/"
            >
              Accueil
            </NavLink>
          </li>

          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/formations"
            >
              Formations
            </NavLink>
          </li>
          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/experience"
            >
              Expériences
            </NavLink>
          </li>
          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/projets"
            >
              Projets
            </NavLink>
          </li>
          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="py-6 md:py-0 md:mr-6">
            <a
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              href="/CV.pdf" target="_blank" rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
