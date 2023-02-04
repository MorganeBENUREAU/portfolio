import logo from "../../images/Logo_fond_transparent.png";
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
    <header className="bg-custom-pinkgrey fixed top-0 z-50 w-full shadow shadow-custom-pink">
      <nav
        id="main-nav"
        className="bg-custom-pinkgrey max-w-6xl mx-auto font-cormorantInfant p-2 flex items-center justify-between"
      >
        <Link
          to="/"
          className="flex"
        >
          <img className="w-16" src={logo} alt="logo martine angibaud" />
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
          className={`w-full absolute top-full left-0 -z-10 flex flex-col items-center md:static md:z-10 md:w-max md:transform-none md:flex-row 
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
              to="/apropos"
            >
              A Propos
            </NavLink>
          </li>
          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/lessoins"
            >
              Les Soins
            </NavLink>
          </li>
          <li className="py-6 md:py-0 md:mr-6">
            <NavLink
              className="text-2xl uppercase font-semibold w-full hover:underline underline-offset-4 md:text-lg lg:text-xl"
              to="/tarifsethoraires"
            >
              Tarifs et Horaires
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
