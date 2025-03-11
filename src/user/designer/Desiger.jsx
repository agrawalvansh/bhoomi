import DesignerHome from './Home';
import ProfilePage from './ProfilePage';
import BudgetPage from './BudgetPage';
import CustomizationInterface from './CustomizationInterface';
import DesignHub from './DesignHub';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

const Designer = () => {
  return (
    <Routes>
      <Route path="home" element={<DesignerHome />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="budget" element={<BudgetPage />} />
      <Route path="customization" element={<CustomizationInterface />} />
      <Route path="design-hub" element={<DesignHub />} />
    </Routes>
  );
}

export default Designer;

// Export individual components for direct access if needed
export {
  DesignerHome,
  ProfilePage,
  BudgetPage,
  CustomizationInterface,
  DesignHub,
  Navbar
};
