import Home from './Home';
import ServiceRouter from './Service';
import Profile from './Profile';
import Header from './Header';
import ServiceManagementPage from './ServiceManagement';
import { Routes, Route } from 'react-router-dom';

const Visitor = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="service/*" element={<ServiceRouter />} />
      <Route path="profile" element={<Profile />} />
      <Route path="service-management" element={<ServiceManagementPage />} />
    </Routes>
  );
}

export default Visitor;

// Export individual components for direct access if needed
export {
  Home,
  ServiceRouter,
  Profile,
  Header,
  ServiceManagementPage
};
