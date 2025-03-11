import ProductManagerProfile from './ProductManagerProfile';
import StockOverview from './StockOverview';
import OrderPrep from './OrderPrep';
import ReorderPage from './ReorderPage';
import SuppliersPage from './SuppliersPage';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';

const ProductManager = () => {
  return (
    <Routes>
      <Route path="stock-overview" element={<StockOverview />} />
      <Route path="profile" element={<ProductManagerProfile />} />
      <Route path="order-prep" element={<OrderPrep />} />
      <Route path="reorder" element={<ReorderPage />} />
      <Route path="suppliers" element={<SuppliersPage />} />
    </Routes>
  );
}

export default ProductManager;

// Export individual components for direct access if needed
export {
  ProductManagerProfile,
  StockOverview,
  OrderPrep,
  ReorderPage,
  SuppliersPage,
  NavBar
};
