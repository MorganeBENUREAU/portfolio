import node from '../../images/logo-nodeJS.png';
import koa from '../../images/logo-koa.png';
import postgresql from '../../images/logo-postgresql.png';
import react from '../../images/logo-react.png';
import tailwind from '../../images/logo-tailwindcss.png';


function Projets() {
  return (
    <main className="font-quicksand flex flex-col justify-around items-center text-left indent-4 flex-1-0-auto w-4/5 mt-28 mb-2 mx-auto sm:mt-20 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h1 className="font-cabin text-2xl uppercase mb-4">Projets</h1>
      <section className="p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">NotaBebe</h2>
        <div>
          <img src="" alt="" />
        </div>
        <p>
          Projet réalisé en groupe de 5 (3 personnes côté front, 2 côté back, dont moi-même). Ce projet a été fait dans le cadre de ma formation O'clock comme projet de fin d'études. C'est un site qui permet de faire le lien entre des parents et une structure d'accueil comme une crèche. <a href="https://notabebe.netlify.app/">Lien du projet.</a>
        </p>
      </section>
      <section className="mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">Bibli'O</h2>
        <div>
          <img src="" alt="" />
        </div>
         nodeJSpostgresQL 
        <p>
          Api de bibliothèque personnelle faite en NodeJS
          et PostgreSQL. Début de front en EJS, mon but est de faire le front en
          React. (en cours) Lien vers le github du projet.
        </p>
      </section>
      {/*  <section className="w-full mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">Générateur titre de film disney</h2> 

        <div>
          <img src="" alt="" />
        </div>
        nodeJSpostgresQLpostgresQL 
        <p>
          Apprentissage
          de Koa et typescript Lien vers le github du projet.
        </p>
      </section> */}
      <section className="mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">Martine Angibaud</h2>
        <div>
          <img src="" alt="" />
        </div>
        <p>
          Création site vitrine pour particulier react Apprentissage de leaflet
          pour ajouter une carte et firebase pour héberger le site. Lien du site.
        </p>
      </section>
      <section className="mt-6 p-2 shadow shadow-custom-blue">Projet à venir</section>
    </main>
  );
}

export default Projets;
