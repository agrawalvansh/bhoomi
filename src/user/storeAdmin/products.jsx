import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AdminSidebar from './navBar';
import { 
  FiHome, 
  FiUsers, 
  FiBox, 
  FiShoppingBag, 
  FiMessageSquare, 
  FiBarChart2, 
  FiMail, 
  FiTool,
  FiEdit2, 
  FiTrash2, 
  FiSearch, 
  FiFilter, 
  FiChevronDown,
  FiPlus,
  FiDownload,
  FiUpload,
  FiPackage,
  FiAlertCircle
} from 'react-icons/fi';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const categories = [
    { id: 'plants', name: 'Plants', subcategories: ['Indoor', 'Outdoor'] },
    { id: 'diy', name: 'DIY Kits', subcategories: [] },
    { id: 'tools', name: 'Tools & Equipment', subcategories: [] },
    { id: 'pots', name: 'Pots & Planters', subcategories: [] },
    { id: 'fertilizers', name: 'Fertilizers & Soil', subcategories: [] },
    { id: 'maintenance', name: 'Maintenance Supplies', subcategories: [] }
  ];

  // Sample products data
  const products = [
    {
      id: "PRD001",
      name: "Snake Plant",
      category: "Plants",
      subcategory: "Indoor",
      price: 29.99,
      stock: 45,
      supplier: "Green Gardens Inc.",
      seasonal: false,
      status: "In Stock",
      lastUpdated: "2024-02-01"
    },
    {
      id: "PRD002",
      name: "Beginner's Garden Kit",
      category: "DIY Kits",
      price: 49.99,
      stock: 15,
      supplier: "DIY Garden Co.",
      seasonal: true,
      status: "Low Stock",
      lastUpdated: "2024-02-01"
    }
  ];

  return (
    <div className="flex" style={{ backgroundColor: colors.background }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>Products</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
                <FiUpload className="w-4 h-4" />
                Import
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
                <FiDownload className="w-4 h-4" />
                Export
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: colors.tertiary }}
              >
                <FiPlus className="w-4 h-4" />
                Add Product
              </button>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            <button
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                activeCategory === 'all' 
                  ? 'bg-white shadow' 
                  : 'hover:bg-white/50'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-white shadow' 
                    : 'hover:bg-white/50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <button className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <FiFilter />
              Filter
              <FiChevronDown className="ml-2" />
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Product Management</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Product</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Category</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Stock</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Supplier</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-4 py-3 text-sm">{product.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">{product.name}</td>
                        <td className="px-4 py-3 text-sm">
                          {product.subcategory 
                            ? `${product.category} - ${product.subcategory}`
                            : product.category
                          }
                        </td>
                        <td className="px-4 py-3 text-sm">${product.price}</td>
                        <td className="px-4 py-3 text-sm">{product.stock}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.status === 'In Stock' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{product.supplier}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex gap-2">
                            <button
                              className="p-1 hover:bg-gray-100 rounded"
                              onClick={() => {
                                setSelectedProduct(product);
                                setShowProductDetails(true);
                              }}
                            >
                              <FiPackage className="h-4 w-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <FiEdit2 className="h-4 w-4" />
                            </button>
                            {product.stock <= 15 && (
                              <button className="p-1 hover:bg-gray-100 rounded text-yellow-500">
                                <FiAlertCircle className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Modal */}
        {showProductDetails && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Product Details</h3>
                <button 
                  onClick={() => setShowProductDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <p>{selectedProduct.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <p>{selectedProduct.category}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <p>${selectedProduct.price}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Stock Level</label>
                  <p>{selectedProduct.stock} units</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Supplier</label>
                  <p>{selectedProduct.supplier}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Last Updated</label>
                  <p>{selectedProduct.lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;