import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import CartProvider from './CartProvider';
import PlantShopPage from './PlantShopPage';
import ProductDetails from './ProductDetails';

const CartIntegrationExample = () => {
  return (
    <Provider store={store}>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/user/shop/:categoryName" element={<PlantShopPage />} />
            <Route path="/user/product/:productId" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </Router>
    </Provider>
  );
};

export default CartIntegrationExample;