function Experiences() {
  return (
    <main className="font-quicksand flex flex-col justify-around items-center text-left indent-4 flex-1-0-auto w-4/5 mt-28 mb-2 mx-auto sm:mt-20 sm:w-4/5 md:w-3/5 lg:w-2/5">
      <h1 className="font-cabin text-2xl uppercase mb-4">Expériences</h1>

      <section className="p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">2021</h2>
        <h3 className="font-cabin text-xl mb-2 text-center">
          DEVELOPPEUSE BACK-END JAVASCRIPT (O’clock)
        </h3>
        <p className="mb-2 text-center">Du 11 août au 8 septembre</p>
        <ul className="shadow shadow-gray-500">
          <li>
            -&gt; Développement front et back en équipe de 5 d’un projet visant
            à mettre en lien les parents et les employés d’une crèche
          </li>
          <li>-&gt; Mise en situation professionnelle, méthode agile</li>
          <li>-&gt; Rôle de git master</li>
        </ul>
      </section>
      <section className="w-full mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">2017 - 2020</h2> 
        <h3 className="font-cabin text-xl mb-2 text-center">EMPLOYÉE ADMINISTRATIVE (Atib)</h3>
        <p className="mb-2 text-center">Du 3 avril 2017 au 28 octobre 2020 (CDI / Congé parental)</p>
        <ul className="shadow shadow-gray-500">
          <li>-&gt; Gestion de la base de données de l’ERP</li>
          <li>-&gt; Gestion du courrier et des boîtes mails</li>
          <li>-&gt; Gestion du standard et de l’accueil</li>
          <li>-&gt; Participation à la création du catalogue</li>
          <li>-&gt; Saisies des factures fournisseurs</li>
        </ul>
      </section>
      <section className="w-full mt-6 p-2 shadow shadow-custom-blue">
        <h2 className="font-cabin text-xl mb-2 text-center">2010 - 2015</h2> 
        <h3 className="font-cabin text-xl mb-2 text-center">DIVERS CONTRATS D’ADMINISTRATIF EN INTÉRIM</h3>
      </section>
    </main>
  );
}

export default Experiences;
