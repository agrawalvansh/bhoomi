import PlantExpertHome from './PlantExpertHome';
import PlantExpertProfile from './PlantExpertProfile';
import PlantSelection from './PlantSelection';
import PlantUpload from './PlantUpload';
import QualityAssurance from './QualityAssurance';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

const PlantExpert = () => {
  return (
    <Routes>
      <Route path="home" element={<PlantExpertHome />} />
      <Route path="profile" element={<PlantExpertProfile />} />
      <Route path="plant-selection" element={<PlantSelection />} />
      <Route path="plant-upload" element={<PlantUpload />} />
      <Route path="quality-check" element={<QualityAssurance />} />
    </Routes>
  );
}

export default PlantExpert;

// Export individual components for direct access if needed
export {
  PlantExpertHome,
  PlantExpertProfile,
  PlantSelection,
  PlantUpload,
  QualityAssurance,
  Navbar
};
