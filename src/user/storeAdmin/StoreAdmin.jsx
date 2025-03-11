import HomePage from './home';
import OrdersPage from './orders';
import ProductsPage from './products';
import UserPage from './user';
import TeamManagementPage from './teamMangement';
import SuppliesPage from './supplies';
import SettingsPage from './settings';
import MessagesPage from './messages';
import AnalyticsPage from './analytics';
import CommunityPage from './communityPage';
import AdminSidebar from './navBar';
import { Routes, Route } from 'react-router-dom';

const StoreAdmin = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="users" element={<UserPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="community" element={<CommunityPage />} />
      <Route path="analytics" element={<AnalyticsPage />} />
      <Route path="messages" element={<MessagesPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="team" element={<TeamManagementPage />} />
      <Route path="supplies" element={<SuppliesPage />} />
    </Routes>
  );
}

export default StoreAdmin;

// Export individual components for direct access if needed
export {
  HomePage,
  UserPage,
  ProductsPage,
  OrdersPage,
  CommunityPage,
  AnalyticsPage,
  MessagesPage,
  SettingsPage,
  TeamManagementPage,
  SuppliesPage,
  AdminSidebar
};
