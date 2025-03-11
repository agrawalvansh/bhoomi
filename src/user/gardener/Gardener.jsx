import GardenerHome from './GardenerHome';
import GardenerServiceRouter from './Service';
import GardenerProfile from './Profile';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';

const Gardener = () => {
  return (
    <Routes>
      <Route path="home" element={<GardenerHome />} />
      <Route path="service/*" element={<GardenerServiceRouter />} />
      <Route path="profile" element={<GardenerProfile />} />
    </Routes>
  );
}

export default Gardener;
