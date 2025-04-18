import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../../redux/cartSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  colors, 
  categories, 
  getProductsByCategory, 
  getCategoryBySlug 
} from './plantShopData';
import SlidingCart from './SlidingCart';

// Enhanced Cart Button with better accessibility and feedback
const CartButton = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleCartAction = (action) => {
    switch (action) {
      case 'add':
        dispatch(addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }));
        break;
      case 'increase':
        dispatch(updateQuantity({
          id: product.id,
          quantity: quantity + 1
        }));
        break;
      case 'decrease':
        if (quantity > 1) {
          dispatch(updateQuantity({
            id: product.id,
            quantity: quantity - 1
          }));
        } else {
          dispatch(removeFromCart(product.id));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative group">
      {quantity === 0 ? (
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 text-center rounded flex items-center justify-center transition-all cursor-pointer"
          style={{ 
            backgroundColor: '#f5f5f0',
            color: '#2d5a27'
          }}
          onClick={() => handleCartAction('add')}
          aria-label={`Add ${product.name} to cart`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Cart
        </motion.button>
      ) : (
        <div className="flex items-center justify-between border rounded overflow-hidden transition-all" 
          style={{ 
            borderColor: '#f5f5f0',
            backgroundColor: '#2d5a27'
          }}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-3 flex-1 flex items-center justify-center hover:bg-[#1B4D3E] transition-colors cursor-pointer"
            onClick={() => handleCartAction('decrease')}
            aria-label="Decrease quantity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </motion.button>
          
          <div className="flex-1 py-2 font-medium text-center text-[#f5f5f0]">
            {quantity}
          </div>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-3 flex-1 flex items-center justify-center hover:bg-[#1B4D3E] transition-colors cursor-pointer"
            onClick={() => handleCartAction('increase')}
            aria-label="Increase quantity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
};

const PlantShopPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryName || 'indoor-plants');
  const [categoryData, setCategoryData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    // Simulate API request delay
    setLoading(true);
    
    setTimeout(() => {
      const category = getCategoryBySlug(activeCategory);
      const categoryProducts = getProductsByCategory(activeCategory);
      
      setCategoryData({
        name: category ? category.name : activeCategory.replace(/-/g, ' '),
        image: category ? category.image : '/imgs/landingPage/Categories/1.jpeg',
        totalItems: categoryProducts.length
      });
      
      setProducts(categoryProducts);
      setLoading(false);

      // Close sidebar automatically on mobile after category selection
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    }, 1000);
  }, [activeCategory]);
  
  const handleCategoryChange = (slug) => {
    setActiveCategory(slug);
    setLoading(true);
    // Update URL without full page reload
    navigate(`/user/shop/${slug}`, { replace: true });
  };

  const getCategoryDisplayName = () => {
    return categoryData ? categoryData.name : activeCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getTotalItems = () => {
    return categoryData ? categoryData.totalItems : 0;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Enhanced Skeleton Loader with shimmer effect
  const ProductSkeleton = ({ delay }) => (
    <motion.div 
      className="bg-white rounded-lg shadow-sm overflow-hidden h-full relative"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="aspect-square bg-gray-200 animate-pulse"></div>
      <div className="p-4 flex flex-col h-[180px]">
        <div className="h-3 bg-gray-200 rounded mb-2 w-1/5 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded mb-4 w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/4 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded animate-pulse mt-auto"></div>
      </div>
      <div className="shimmer-overlay"></div>
    </motion.div>
  );

  return (
    <div className="flex overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Left Sidebar with Categories */}
      <div className="w-20 md:w-64 bg-white shadow-sm overflow-auto sticky top-0 h-screen z-30 transition-all duration-300">
        <div className="p-2 md:p-4 min-h-screen">
          <h2 className="text-xs md:text-xl font-bold mb-2 md:mb-6 border-b-2 pb-2 flex-wrap" style={{ color: colors.primary, borderColor: colors.secondary }}>
            BHOOMI
          </h2>
          
          <div className="grid grid-cols-1 gap-1 md:gap-2">
            {loading ? (
              Array(6).fill(0).map((_, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-3 space-y-2 rounded-md"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                </motion.div>
              ))
            ) : (
              categories.map((category) => (
                <motion.div
                  key={category.slug}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`group flex flex-col items-center p-1 md:p-2 rounded-md cursor-pointer transition-all duration-200 relative
                    ${activeCategory === category.slug ? 'bg-[#e8f4e5] scale-[1.02]' : 'hover:bg-gray-50'}`}
                >
                  {activeCategory === category.slug && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2d5a27]"></div>
                  )}
                  
                  <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-md mb-1 md:mb-2`}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  <span className="font-medium text-[10px] md:text-sm text-center text-[#2d5a27] leading-tight md:leading-normal">
                    {category.name.split(' ').map(word => word.slice(0, 8)).join(' ')}
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          {/* Enhanced Header with better mobile handling */}
          <div className="flex items-center mb-6 sticky top-0 bg-white z-10 p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <button 
                className="flex items-center mr-3 hover:scale-105 transition-transform cursor-pointer"
                style={{ color: colors.primary }}
                onClick={() => navigate('/')}
                aria-label="Go back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center">
              {loading ? (
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-md animate-pulse mr-2 md:mr-3"></div>
              ) : (
                <img 
                  src={categoryData?.image || "/api/placeholder/40/40"} 
                  alt="Category Icon" 
                  className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-md mr-2 md:mr-3"
                />
              )}
              <div>
                {loading ? (
                  <>
                    <div className="h-5 md:h-6 bg-gray-200 rounded w-24 md:w-32 animate-pulse"></div>
                    <div className="h-3 md:h-4 bg-gray-200 rounded w-12 md:w-16 mt-1 animate-pulse"></div>
                  </>
                ) : (
                  <>
                    <h1 className="text-lg md:text-xl font-bold" style={{ color: colors.primary }}>
                      {getCategoryDisplayName()}
                    </h1>
                    <p className="text-xs md:text-sm" style={{ color: colors.tertiary }}>
                      {`${getTotalItems()} items`}
                    </p>
                  </>
                )}
              </div>
            </div>
            
            {/* Enhanced Cart Indicator with micro-interactions */}
            <div className="ml-auto flex items-center gap-2 md:gap-4">
              <button 
                className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                style={{ color: colors.primary }}
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button 
                className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors relative cursor-pointer"
                style={{ color: colors.primary }}
                onClick={() => navigate('/user/cart')}
                aria-label={`View cart containing ${totalCartItems} items`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <AnimatePresence initial={false}>
                  {totalCartItems > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      key={totalCartItems}
                      aria-live="polite"
                    >
                      {totalCartItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
          
          {loading ? (
            <div>
              {/* Category Header Skeleton */}
              <motion.div 
                className="mb-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 bg-gray-200 rounded w-64 animate-pulse"></div>
              </motion.div>
              
              {/* Products Grid Skeleton - 2 items per row on mobile, 3 on larger screens */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <ProductSkeleton key={index} delay={index} />
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Enhanced Category Header with progress indicator */}
              <div className="mb-4 md:mb-6 relative">
                <h2 className="text-base md:text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                  {`${products.length} items in ${getCategoryDisplayName()}`}
                </h2>
              </div>
              
              {/* Enhanced Products Grid with better card layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all h-full flex flex-col group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    aria-labelledby={`product-${product.id}-title`}
                  >
                    {/* Product Image */}
                    <div className="relative">
                      {product.featured && (
                        <div className="absolute top-1 right-1 md:top-2 md:right-2 z-10 bg-pink-500 text-white font-medium text-xs px-1 py-0.5 md:px-2 md:py-1 rounded">
                          {product.featured}
                        </div>
                      )}
                      <div 
                        className="aspect-square overflow-hidden cursor-pointer" 
                        onClick={() => navigate(`/user/product/${product.id}`)}
                        role="button"
                        aria-label={`View ${product.name} details`}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    <div className="p-3 md:p-4 bg-[#2d5a27] flex flex-col flex-grow">
                      {/* Product Info */}
                      <div className="flex justify-between items-center mb-1">
                        {product.stockStatus && (
                          <div className="text-xs font-medium text-[#f5f5f0]">
                            {product.stockStatus}
                          </div>
                        )}
                      </div>

                      <h3 
                        className="font-medium mb-1 cursor-pointer hover:underline transition-colors text-[#f5f5f0] text-sm md:text-base h-11 overflow-hidden"
                        onClick={() => navigate(`/user/product/${product.id}`)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm mb-2 h-10 overflow-y-auto text-[#F3E5AB]">
                        {product.shortDescription || product.description}
                      </p>
                      
                      {/* Enhanced Price Display */}
                      <div className="flex items-center justify-around w-full mb-2 md:mb-3">
                        <div className="font-semibold text-lg md:text-xl text-[#f5f5f0]">
                          ₹{product.price}
                        </div>
                        {product.originalPrice && 
                          <div className="text-sm line-through text-gray-400"> 
                            ₹{product.originalPrice}
                          </div>
                        }
                      </div>

                      
                      {/* Enhanced Options/Cart Button */}
                      <div className="mt-auto">
                        {product.options ? (
                          <button 
                            onClick={() => navigate(`/user/product/${product.id}`)}
                            className="w-full py-2 text-center rounded flex items-center justify-center transition-colors hover:bg-[#1B4D3E] cursor-pointer"
                            style={{ 
                              backgroundColor: '#f5f5f0',
                              color: '#2d5a27'
                            }}
                            aria-label={`View ${product.options} options for ${product.name}`}
                          >
                            <span className="font-medium">View Options</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        ) : (
                          <CartButton product={product} />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <SlidingCart />
    </div>
  );
};

export default PlantShopPage;
