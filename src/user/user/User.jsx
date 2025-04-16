import { Routes, Route } from 'react-router-dom';
import Profile from './profile';
import ServiceBooking from './service';
import CommunityPage from './CommunityPage';
import Checkout from './Checkout/Checkout';
import OrderConfirmation from './Checkout/OrderConfirmation';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

// Import the new components
import PlantShopPage from './PlantShopPage';
import Cart from './Cart';
import OrderHistory from './OrderHistory';
import ProductDetails from './ProductDetails';

// Layout wrapper to apply max-w-5xl to all user pages
const UserLayout = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {children}
    </div>
  );
};

const User = () => {
  return (
    <Provider store={store}>
      <UserLayout>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="shop/:categoryName" element={<PlantShopPage />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="service" element={<ServiceBooking />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="order-confirmation/:orderId" element={<OrderConfirmation />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </UserLayout>
    </Provider>
  );
}

export default User;

// Export individual components for direct access if needed
export {
  Profile,
  ServiceBooking,
  CommunityPage,
  OrderHistory,
  Checkout,
  OrderConfirmation
};
