import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft, FiPlus, FiMinus, FiStar, FiTruck, FiPackage, FiRefreshCw } from 'react-icons/fi';
import { 
  colors, 
  getProductById, 
  getRelatedProducts,
  products 
} from './plantShopData';
import { addToCart, updateQuantity, removeFromCart } from '../redux/cartSlice';
import { AddToCartDetailButton } from './CartButtons';
import SlidingCart from './SlidingCart';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [relatedProductQuantities, setRelatedProductQuantities] = useState({});
  const [mainProductInCart, setMainProductInCart] = useState(false);
  const [mainProductCartQuantity, setMainProductCartQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProduct = getProductById(productId);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(getRelatedProducts(productId, 3));
          const recentProducts = products
            .filter(p => p.id !== productId)
            .slice(0, 4);
          setRecentlyViewed(recentProducts);
        }
        setLoading(false);
      }, 800);
    };
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (relatedProducts.length > 0) {
      const quantities = {};
      relatedProducts.forEach(product => {
        const cartItem = cartItems.find(item => item.id === product.id);
        quantities[product.id] = cartItem ? cartItem.quantity : 0;
      });
      setRelatedProductQuantities(quantities);
    }
  }, [relatedProducts, cartItems]);

  useEffect(() => {
    if (product) {
      const cartItem = cartItems.find(item => item.id === product.id);
      if (cartItem) {
        setMainProductInCart(true);
        setMainProductCartQuantity(cartItem.quantity);
      } else {
        setMainProductInCart(false);
        setMainProductCartQuantity(0);
      }
    }
  }, [product, cartItems]);

  const incrementQuantity = () => {
    if (quantity < (product?.stock || 10)) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleCartAction = (action, productId) => {
    const targetProduct = relatedProducts.find(p => p.id === productId);
    if (!targetProduct) return;
    
    switch(action) {
      case 'add':
        dispatch(addToCart({
          id: targetProduct.id,
          name: targetProduct.name,
          price: targetProduct.price,
          originalPrice: targetProduct.originalPrice,
          image: targetProduct.image,
          quantity: 1
        }));
        setRelatedProductQuantities(prev => ({
          ...prev,
          [productId]: 1
        }));
        break;
      case 'increase':
        const newIncreaseQuantity = (relatedProductQuantities[productId] || 0) + 1;
        dispatch(updateQuantity({ 
          id: targetProduct.id, 
          quantity: newIncreaseQuantity 
        }));
        setRelatedProductQuantities(prev => ({
          ...prev,
          [productId]: newIncreaseQuantity
        }));
        break;
      case 'decrease':
        const currentQuantity = relatedProductQuantities[productId] || 0;
        const newDecreaseQuantity = currentQuantity - 1;
        
        if (newDecreaseQuantity <= 0) {
          dispatch(removeFromCart(targetProduct.id));
          setRelatedProductQuantities(prev => ({
            ...prev,
            [productId]: 0
          }));
        } else {
          dispatch(updateQuantity({ 
            id: targetProduct.id, 
            quantity: newDecreaseQuantity 
          }));
          setRelatedProductQuantities(prev => ({
            ...prev,
            [productId]: newDecreaseQuantity
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleMainProductCartAction = (action) => {
    if (!product) return;
    
    switch(action) {
      case 'add':
        dispatch(addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          quantity: quantity
        }));
        setMainProductInCart(true);
        setMainProductCartQuantity(quantity);
        break;
      case 'increase':
        const newIncreaseQuantity = mainProductCartQuantity + 1;
        if (newIncreaseQuantity <= product.stock) {
          dispatch(updateQuantity({ 
            id: product.id, 
            quantity: newIncreaseQuantity 
          }));
          setMainProductCartQuantity(newIncreaseQuantity);
        }
        break;
      case 'decrease':
        const newDecreaseQuantity = mainProductCartQuantity - 1;
        if (newDecreaseQuantity <= 0) {
          dispatch(removeFromCart(product.id));
          setMainProductInCart(false);
          setMainProductCartQuantity(0);
        } else {
          dispatch(updateQuantity({ 
            id: product.id, 
            quantity: newDecreaseQuantity 
          }));
          setMainProductCartQuantity(newDecreaseQuantity);
        }
        break;
      default:
        break;
    }
  };

  const ProductSkeleton = () => (
    <div className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="aspect-square bg-gray-200 shimmer" />
        </div>
        <div className="md:w-1/2 p-8 space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4 shimmer" />
          <div className="h-4 bg-gray-200 rounded w-1/2 shimmer" />
          <div className="h-6 bg-gray-200 rounded w-1/4 shimmer" />
          <div className="space-y-3">
            {[1,2,3].map((_,i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-5/6 shimmer" />
            ))}
          </div>
          <div className="h-12 bg-gray-200 rounded-xl shimmer" />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 h-8 bg-gray-200 rounded w-24 shimmer" />
          <ProductSkeleton />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: colors.background }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 shimmer" />
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Plant Not Found</h2>
          <p className="mb-6 max-w-md mx-auto" style={{ color: colors.tertiary }}>
            The green friend you're looking for has wandered off. Let's find something similar!
          </p>
          <motion.button
            onClick={() => navigate('/user/shop/indoor-plants')}
            className="px-6 py-3 rounded-lg transition-all hover:scale-105 cursor-pointer"
            style={{ 
              backgroundColor: colors.tertiary,
              color: colors.background
            }}
            whileHover={{ y: -2 }}
          >
            Explore Our Garden
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4 py-8">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center mb-6 group cursor-pointer" 
          style={{ color: colors.primary }}
          whileHover={{ x: -5 }}
        >
          <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="border-b border-transparent group-hover:border-current">
            Back to Browse
          </span>
        </motion.button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                {product.discount && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white font-medium px-3 py-1 rounded-full text-sm">
                    {product.discount}% OFF
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                  loading="eager"
                />
              </motion.div>
            </div>

            <div className="md:w-1/2 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>
                  {product.name}
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={i < Math.floor(product.rating) ? "fill-current" : ""}
                        style={{ 
                          color: i < Math.floor(product.rating) ? colors.secondary : colors.accent,
                          width: '20px',
                          height: '20px'
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ color: colors.tertiary }}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <div className="text-3xl font-bold" style={{ color: colors.tertiary }}>
                    ₹{product.price}
                  </div>
                  {product.originalPrice && (
                    <div className="text-lg line-through text-gray-400">
                      ₹{product.originalPrice}
                    </div>
                  )}
                </div>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6 items-center">
                  <div className="flex-1 min-w-[150px]">
                    <label className="block text-sm mb-2 font-medium" style={{ color: colors.primary }}>
                      Quantity
                    </label>
                    <div className="flex flex-col">
                      {mainProductInCart ? (
                        <div className="flex items-center justify-between border rounded overflow-hidden transition-all" 
                          style={{ 
                            borderColor: '#f5f5f0',
                            backgroundColor: '#2d5a27'
                          }}>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="p-3 flex-1 flex items-center justify-center hover:bg-[#1B4D3E] transition-colors cursor-pointer"
                            onClick={() => handleMainProductCartAction('decrease')}
                            aria-label="Decrease quantity"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </motion.button>
                          <div className="flex-1 py-2 font-medium text-center text-[#f5f5f0]">
                            {mainProductCartQuantity}
                          </div>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="p-3 flex-1 flex items-center justify-center hover:bg-[#1B4D3E] transition-colors cursor-pointer"
                            onClick={() => handleMainProductCartAction('increase')}
                            aria-label="Increase quantity"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </motion.button>
                        </div>
                      ) : (
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-2 text-center rounded flex items-center justify-center transition-all cursor-pointer"
                          style={{ 
                            backgroundColor: '#2d5a27',
                            color: '#f5f5f0'
                          }}
                          onClick={() => handleMainProductCartAction('add')}
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Add to Cart
                        </motion.button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm font-medium mb-2" style={{ color: colors.primary }}>
                      Availability
                    </div>
                    <div className={`flex items-center ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      <span className="w-2 h-2 rounded-full mr-2 bg-current" />
                      {product.stock > 0 ? `${product.stock} Available` : 'Out of Stock'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: colors.accent + '30' }}>
            <div className="flex border-b overflow-x-auto" style={{ borderColor: colors.accent + '30' }}>
              {['description', 'specifications', 'care', 'reviews'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium relative cursor-pointer ${
                    activeTab === tab ? 'text-[#2d5a27]' : 'text-gray-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#2d5a27]"
                      layoutId="tabIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'description' && (
                    <div style={{ color: colors.primary }}>
                      <p className="mb-4">{product.description}</p>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 mr-3 mt-2 rounded-full" 
                                  style={{ backgroundColor: colors.tertiary }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications || {}).map(([key, value]) => (
                        <div key={key} className="border rounded-lg p-4" style={{ borderColor: colors.accent + '30' }}>
                          <h3 className="font-medium mb-2 capitalize">{key}</h3>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'care' && (
                    <div>
                      <p className="mb-6">{product.care}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { icon: <FiTruck />, title: "Free Shipping", text: "On orders above ₹999" },
                          { icon: <FiPackage />, title: "Secure Packaging", text: "Plants arrive healthy" },
                          { icon: <FiRefreshCw />, title: "30-Day Guarantee", text: "Happy plants or refund" }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-md transition-all"
                            style={{ borderColor: colors.accent + '30' }}
                            whileHover={{ y: -5 }}
                          >
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" 
                                 style={{ backgroundColor: colors.accent + '30' }}>
                              {React.cloneElement(item.icon, { style: { color: colors.tertiary } })}
                            </div>
                            <h3 className="font-medium mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold" style={{ color: colors.tertiary }}>{product.rating}</div>
                          <div className="flex justify-center my-2">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={i < Math.floor(product.rating) ? "fill-current" : ""}
                                style={{ 
                                  color: i < Math.floor(product.rating) ? colors.secondary : colors.accent,
                                  width: '24px',
                                  height: '24px'
                                }}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-gray-500">{product.reviews} reviews</div>
                        </div>
                      </div>

                      <div className="md:w-2/3 space-y-6">
                        {product.reviews > 0 ? (
                          <div className="space-y-4">
                            {/* Mock review data */}
                            {[
                              {
                                name: "Aarav Singh",
                                rating: 5,
                                date: "March 15, 2025",
                                comment: "This snake plant is absolutely thriving in my apartment! It arrived in perfect condition and has been so easy to care for. I'm very impressed with the size and health of the plant.",
                                verified: true
                              },
                              {
                                name: "Priya Patel",
                                rating: 4,
                                date: "February 28, 2025",
                                comment: "Beautiful plant and exactly as pictured. Shipping was fast and the packaging was excellent. I'm taking off one star because it was slightly smaller than I expected, but it's growing well!",
                                verified: true
                              },
                              {
                                name: "Rajan Kapoor",
                                rating: 5,
                                date: "January 19, 2025",
                                comment: "Perfect plant for beginners! I've had mine for a month now and it's doing great despite my less-than-perfect plant care skills. Would definitely recommend to anyone looking for a low-maintenance houseplant.",
                                verified: false
                              }
                            ].map((review, index) => (
                              <div key={index} className="border-b pb-6" style={{ borderColor: colors.accent + '20' }}>
                                <div className="flex items-center mb-2">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <FiStar
                                        key={i}
                                        className={i < review.rating ? "fill-current" : ""}
                                        style={{ 
                                          color: i < review.rating ? colors.secondary : colors.accent,
                                          width: '20px',
                                          height: '20px'
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs ml-2 text-gray-500">{review.date}</span>
                                  {review.verified && (
                                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Verified Purchase</span>
                                  )}
                                </div>
                                <p className="mt-2 text-sm">{review.comment}</p>
                                
                                <div className="flex gap-4 mt-3">
                                  <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer">Helpful</button>
                                  <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer">Report</button>
                                </div>
                              </div>
                            ))}
                            
                            <div className="mt-6 flex justify-center">
                              <button
                                className="px-6 py-2 text-center rounded border inline-flex items-center cursor-pointer"
                                style={{ 
                                  borderColor: colors.tertiary,
                                  color: colors.tertiary
                                }}
                              >
                                <span>Load More Reviews</span>
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">No reviews yet</p>
                            <motion.button
                              className="px-6 py-2 rounded border inline-flex items-center cursor-pointer"
                              style={{ 
                                borderColor: colors.tertiary,
                                color: colors.tertiary
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              Be the first to review
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
              Perfect Pairings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1" style={{ color: colors.primary }}>
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold mb-3" style={{ color: colors.tertiary }}>₹{product.price}</p>
                    {relatedProductQuantities[product.id] === 0 ? (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 text-center rounded flex items-center justify-center transition-all cursor-pointer"
                        style={{ 
                          backgroundColor: '#2d5a27',
                          color: '#f5f5f0'
                        }}
                        onClick={() => handleCartAction('add', product.id)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart
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
                          onClick={() => handleCartAction('decrease', product.id)}
                          aria-label="Decrease quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </motion.button>
                        <div className="flex-1 py-2 font-medium text-center text-[#f5f5f0]">
                          {relatedProductQuantities[product.id]}
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="p-3 flex-1 flex items-center justify-center hover:bg-[#1B4D3E] transition-colors cursor-pointer"
                          onClick={() => handleCartAction('increase', product.id)}
                          aria-label="Increase quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
            Your Recent Green Friends
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recentlyViewed.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                onClick={() => navigate(`/user/product/${product.id}`)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm truncate" style={{ color: colors.primary }}>
                    {product.name}
                  </h4>
                  <p className="text-sm font-bold mt-1" style={{ color: colors.tertiary }}>
                    ₹{product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
            Plant Parent Essentials
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How often should I water this plant?",
                answer: "Water when the top 1-2 inches of soil feels dry. Typically every 1-2 weeks."
              },
              {
                question: "Does this plant require special soil?",
                answer: "This plant does best in well-draining potting mix. We recommend using a standard indoor potting soil with some perlite or pumice added for better drainage."
              },
              {
                question: "Is this plant safe for pets?",
                answer: "This plant is considered mildly toxic to pets if ingested. We recommend keeping it out of reach of curious pets and children."
              },
              {
                question: "How big will this plant grow?",
                answer: "With proper care and conditions, this plant can grow to approximately 2-3 feet in height and 1-2 feet in width when kept indoors."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-lg group"
                style={{ borderColor: colors.accent + '30' }}
                whileHover={{ scale: 1.005 }}
              >
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center p-4 font-medium">
                    <span style={{ color: colors.primary }}>{faq.question}</span>
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         style={{ color: colors.tertiary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-4 pb-4 text-sm"
                    style={{ color: colors.tertiary }}
                  >
                    {faq.answer}
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* SlidingCart component - always at bottom of page */}
      <SlidingCart />
    </div>
  );
};

export default ProductDetails;

const shimmerStyles = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .shimmer {
    position: relative;
    overflow: hidden;
    background: #f5f5f5;
  }

  .shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.4),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = shimmerStyles;
  document.head.appendChild(styleElement);
}
