function Formations() {
    return (
      <main className="font-quicksand flex flex-col justify-around items-center text-left indent-4 flex-1-0-auto w-4/5 mt-28 mb-2 mx-auto sm:mt-20 sm:w-4/5 md:w-3/5 lg:w-2/5">
        <h1 className="font-cabin text-2xl uppercase mb-4">Formations</h1>
        <div>
          <section className="p-2 shadow shadow-custom-blue">
            <h2 className="font-cabin text-xl mb-2">Titre Professionnel Développeur Web et Web Mobile - Niveau 5</h2>
            <p className="mb-1">De mars 2021 à Septembre 2021 - 798 h intensives</p>
            <p className="mb-2">École O’clock - Formation en Téléprésentiel - Labellisée Grande École du Numérique</p>
            <div className="shadow shadow-gray-500">
              <ul>
                <li>-&gt; 3 mois de Socle : HTML5, CSS3, Javascript, NodeJS, PostgresQL, Express, Sequelize, Git</li>
                <li>-&gt; 1 mois de spécialisation : data/API</li>
                <li>-&gt; 1 mois de projet : (NotaBebe) - en groupe from scratch en méthode agile. Nous étions cinq à collaborer sur ce projet : trois en front et deux en back (dont j'ai fait partie)</li>
              </ul>
            </div>
          </section>
          <section className="mt-6 p-4 shadow shadow-custom-blue">
            <h2 className="font-cabin text-xl">BAC STG CFE (comptabilité et finances des entreprises)</h2>
            <p>Juin 2010</p>
          </section>
        </div>
      </main>
    );
  }

export default Formations;