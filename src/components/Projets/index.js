import node from "../../images/logo-nodeJS.png";
// import koa from '../../images/logo-koa.png';
import postgresql from "../../images/logo-postgresql.png";
import react from "../../images/logo-react.png";
import tailwind from "../../images/logo-tailwindcss.png";

function Projets() {
  return (
    <main className="font-quicksand flex flex-col justify-around items-center text-left flex-1-0-auto w-4/5 mt-28 mb-2 mx-auto sm:mt-20 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h1 className="font-cabin text-2xl uppercase mb-4">Projets</h1>
      <section className="p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">NotaBebe</h2>
        <div className="flex w-full justify-around items-center my-2">
          <img src={node} alt="" className="h-10 md:h-12" />
          <img src={postgresql} alt="" className="h-10 md:h-12" />
          <img src={react} alt="" className="h-10 md:h-12" />
        </div>
        <div className="shadow shadow-gray-500 indent-4">
          <p>
            Projet réalisé en groupe de 5 (3 personnes côté front, 2 côté back,
            dont moi-même). Ce projet a été fait dans le cadre de ma formation
            O'clock comme projet de fin d'études. C'est un site qui permet de
            faire le lien entre des parents et une structure d'accueil comme une
            crèche.
          </p>
          <p>
            <a className="hover:underline" href="https://notabebe.netlify.app/">
              Lien du projet.
            </a>
          </p>
        </div>
      </section>
      <section className="mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">Bibli'O</h2>
        <div className="flex w-full justify-around items-center my-2">
          <img src={node} alt="" className="h-10 md:h-12" />
          <img src={postgresql} alt="" className="h-10 md:h-12" />
        </div>
        <div className="shadow shadow-gray-500 indent-4">
          <p>
            Api de bibliothèque personnelle faite en NodeJS et PostgreSQL. Début
            de front en EJS, mon but est de faire le front en React.
          </p>
          <p>
            (en cours){" "}
            <a
              className="hover:underline"
              href="https://github.com/MorganeBENUREAU/bibliO"
            >
              Lien vers le github du projet.
            </a>
          </p>
        </div>
      </section>
      <section className="mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">
          Martine Angibaud
        </h2>
        <div className="flex w-full justify-around items-center my-2">
          <img src={react} alt="" className="h-10 md:h-12" />
          <img src={tailwind} alt="" className="h-8 md:h-10" />
        </div>
        <div className="shadow shadow-gray-500 indent-4">
          <p>
            Création d'un site vitrine pour particulier avec React.
            Apprentissage de leaflet afin de mettre une carte sur la page
            contact. Apprentissage de firebase pour héberger le site.
          </p>
          <p>
            <a href="https://martineangibaud.fr/">Lien du site.</a>
          </p>
        </div>
      </section>
      <section className="w-full mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">Projet à venir</h2>
      </section>
    </main>
  );
}

export default Projets;
