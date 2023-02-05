import menu from "../../images/menu.svg";
import cross from "../../images/cross.svg";
import tel from "../../images/logo-tel.png";
import mail from "../../images/logo-mail.png";
import github from "../../images/logo-github-noir.png";
import linkedin from "../../images/logo-linkedin-noir.png";

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
        <div className="flex flex-col">
          <Link to="/">
            <h1 className="font-josefinslab text-custom-blue text-4xl font-bold">Morgane Benureau</h1>
          </Link>
          <div className="flex">
            <a href="tel:+33677432457">
              <img src={tel} alt="logo pour téléphoner" className="w-6"/>
            </a>
            <a href="mail:morgane.benureau@gmail.com">
              <img src={mail} alt="logo pour envoyer un mail" className="w-6"/>
            </a>
            <a href="https://www.linkedin.com/in/morganebenureau/">
              <img src={linkedin} alt="logo pour téléphoner" className="w-6"/>
            </a>
            <a href="https://github.com/MorganeBENUREAU">
              <img src={github} alt="logo pour téléphoner" className="w-6"/>
            </a>
          </div>
        </div>

        <button
          id="menu-btn"
          className="cursor-pointer w-10 md:w-12 lg:hidden"
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
          className={`w-full absolute top-full left-0 -z-10 flex flex-col items-center lg:static lg:z-10 lg:w-max lg:transform-none lg:flex-row 
            ${isActive ? "bg-gray-200 h-screen justify-center -mt-22 lg:h-auto lg:mt-0" : "-translate-y-full "}`}
          onClick={toggleNav}
        >
          <li className="pb-6 md:py-0 md:mr-6">
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
