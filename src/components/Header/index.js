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
    <header className="bg-gray-200 fixed top-0 z-50 w-full shadow shadow-custom-grey">
      <nav
        id="main-nav"
        className="bg-gray-200 max-w-6xl mx-auto p-2 flex items-center justify-between"
      >
        <Link to="/">
          <h1 className="font-josefinslab text-custom-blue text-4xl font-bold">
            Morgane Benureau
          </h1>
        </Link>

        <button
          id="menu-btn"
          className="cursor-pointer w-10 md:w-12 lg:hidden"
          onClick={toggleNav}
          aria-label="toggle navigation"
        >
          <img src={isActive ? cross : menu} alt="" className="logo" />
        </button>

        <ul
          id="toggled-menu"
          className={`w-full absolute top-full left-0 -z-10 flex flex-col items-center justify-center lg:static lg:z-10 lg:w-max lg:transform-none lg:flex-row 
            ${
              isActive
                ? "bg-gray-200 h-screen -mt-22 lg:h-auto lg:mt-0"
                : "-translate-y-full "
            }`}
          onClick={toggleNav}
        >
          <li className="pb-6 lg:py-0 lg:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 lg:text-xl"
              to="/"
            >
              Accueil
            </NavLink>
          </li>

          <li className="py-6 lg:py-0 lg:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 lg:text-xl"
              to="/formations"
            >
              Formations
            </NavLink>
          </li>
          <li className="py-6 lg:py-0 lg:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 lg:text-xl"
              to="/experiences"
            >
              Expériences
            </NavLink>
          </li>
          <li className="py-6 lg:py-0 lg:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 lg:text-xl"
              to="/projets"
            >
              Projets
            </NavLink>
          </li>
          <li className="py-6 lg:py-0 lg:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 lg:text-xl"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="py-6 lg:py-0 lg:mr-6">
            <a
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 lg:text-xl"
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
