import Accueil from '../Accueil';
import Formations from '../Formation';
import Experiences from '../Experiences';
import Projets from '../Projets';
import Contact from '../Contact';
import Page404 from '../Page404';
import Header from '../Header';
import Footer from '../Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-custom-grey text-black">
      <Header />

        <Routes>

            <Route path='/' exact element={<Accueil />} />

            <Route path='/formations' exact element={<Formations />} />
            <Route path='/experiences' exact element={<Experiences />} />
            <Route path='/projets' exact element={<Projets />} />
            <Route path='/contact' exact element={<Contact />} />

            <Route path='*' element={<Page404 />} />

        </Routes>

      <Footer />
    </div>
  );
}

export default App;
