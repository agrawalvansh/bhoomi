import { Routes, Route } from 'react-router-dom';
import HomePage from './home';
import Profile from './profile';
import ShopPage from './shop';
import ServiceBooking from './service';
import CommunityPage from './community';
import OrderHistoryPage from './OrderHistory';
import Checkout from './Checkout/Checkout';
import OrderConfirmation from './Checkout/OrderConfirmation';
const User = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="service" element={<ServiceBooking />} />
      <Route path="community" element={<CommunityPage />} />
      <Route path="order-history" element={<OrderHistoryPage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  );
}

export default User;

// Export individual components for direct access if needed
export {
  HomePage,
  
};
