/* eslint-disable max-len */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import About from './About/About.jsx';
import PokemonAPI from './Pokedex/PokemonAPI.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';
import Families from './FuzzyBunny/Families.jsx';
import Bunnies from './FuzzyBunny/Bunnies.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <Toaster />
      <FuzzyBunnyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="pokemonapiagainforsomereason" element={<PokemonAPI />} />
            <Route path="fuzzybunnies" element={<FuzzyBunny />}>
              <Route index element={<Families />} />
              <Route path="bunnies" element={<Bunnies />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </FuzzyBunnyProvider>
    </Router>
  );
}
