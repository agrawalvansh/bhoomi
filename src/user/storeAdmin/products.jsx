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
  FiAlertCircle,
  FiX
} from 'react-icons/fi';

const ProductsPage = () => {
  // State management
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

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
  const [products, setProducts] = useState([
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
  ]);

  // Handler functions
  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.xlsx';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`Selected file: ${file.name}. Import functionality would process this file.`);
      }
    };
    input.click();
  };

  const handleExport = () => {
    const data = JSON.stringify(products, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products-export.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || 
                          product.category.toLowerCase() === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Modal for Add Product
  const AddProductModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Add New Product</h3>
          <button 
            onClick={() => setShowAddProduct(false)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <FiX />
          </button>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full p-2 border rounded">
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input type="number" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Stock</label>
              <input type="number" className="w-full p-2 border rounded" />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => setShowAddProduct(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded"
              style={{ backgroundColor: colors.tertiary }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="flex" style={{ backgroundColor: colors.background }}>
      <AdminSidebar />

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>Products</h2>
            <div className="flex gap-3">
              <button 
                onClick={handleImport}
                className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
              >
                <FiUpload className="w-4 h-4" />
                Import
              </button>
              <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
              >
                <FiDownload className="w-4 h-4" />
                Export
              </button>
              <button 
                onClick={handleAddProduct}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: colors.tertiary }}
              >
                <FiPlus className="w-4 h-4" />
                Add Product
              </button>
            </div>
          </div>

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
          
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FiFilter />
              Filter
              <FiChevronDown className="ml-2" />
            </button>
          </div>

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
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
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
                            <button 
                              className="p-1 hover:bg-gray-100 rounded"
                              onClick={() => {
                                setSelectedProduct(product);
                                setShowAddProduct(true);
                              }}
                            >
                              <FiEdit2 className="h-4 w-4" />
                            </button>
                            {product.stock <= 15 && (
                              <button 
                                className="p-1 hover:bg-gray-100 rounded text-yellow-500"
                                title="Low Stock Alert"
                              >
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Product Details</h3>
                <button 
                  onClick={() => setShowProductDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <FiX />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <p className="mt-1">{selectedProduct.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <p className="mt-1">{selectedProduct.category}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Price</label>
                  <p className="mt-1">${selectedProduct.price}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Stock Level</label>
                  <p className="mt-1">{selectedProduct.stock} units</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Supplier</label>
                  <p className="mt-1">{selectedProduct.supplier}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Last Updated</label>
                  <p className="mt-1">{selectedProduct.lastUpdated}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <p className="mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedProduct.status === 'In Stock' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedProduct.status}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Seasonal Item</label>
                  <p className="mt-1">{selectedProduct.seasonal ? 'Yes' : 'No'}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedProduct(selectedProduct);
                    setShowAddProduct(true);
                    setShowProductDetails(false);
                  }}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Edit Product
                </button>
                <button
                  onClick={() => setShowProductDetails(false)}
                  className="px-4 py-2 text-white rounded-lg"
                  style={{ backgroundColor: colors.tertiary }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Product Modal */}
        {showAddProduct && <AddProductModal />}
      </div>
    </div>
  );
};

export default ProductsPage;