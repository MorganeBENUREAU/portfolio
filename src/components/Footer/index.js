import mail from "../../images/logo-mail-noir.png";
import github from "../../images/logo-github-noir.png";
import linkedin from "../../images/logo-linkedin-noir.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 font-josefinslab shrink-0 text-sm text-center shadow-inner shadow-custom-grey flex flex-col items-center sm:text-base md:text-lg">
      <div className="flex pt-1 px-1 ">
        <a href="mail:morgane.benureau@gmail.com">
          <img
            src={mail}
            alt="logo pour envoyer un mail"
            className="w-6 mr-12"
          />
        </a>
        <a href="https://www.linkedin.com/in/morganebenureau/">
          <img
            src={linkedin}
            alt="logo pour téléphoner"
            className="w-6 mr-12"
          />
        </a>
        <a href="https://github.com/MorganeBENUREAU">
          <img src={github} alt="logo pour téléphoner" className="w-6" />
        </a>
      </div>
      <p className="m-1">
        @2022 par
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/morganebenureau/"
        >
          Morgane Benureau
        </a>
        - tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
