import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import UserAuth from './UserAuth/UserAuth.jsx';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Pokedex from '../components/Pokedex/PokemonAPI.jsx';
import Contact from './Contact/Contact.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import Families from './FuzzyBunny/Families.jsx';
import Bunnies from './FuzzyBunny/Bunnies.jsx';
import ProtectedRoutes from './UserAuth/ProtectRoutes.jsx';

export default function Routes() {
  return (
    <RRoutes>
      <Route path="user/*" element={<UserAuth />} />
      <Route element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
            <Route index element={<Families />} />
            <Route path="bunnies" element={<Bunnies />} />
          </Route>
        </Route>

        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RRoutes>
  );
}
