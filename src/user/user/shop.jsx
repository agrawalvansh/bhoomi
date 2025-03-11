import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFilter, FiShoppingCart, FiHeart, FiX,  
  FiSearch, FiStar, FiAlertCircle, FiShoppingBag, 
  FiPlus, FiMinus, FiUser 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
// import { addToCart, selectCartItems } from '../redux/slices/cartSlice';
// import NavBar from '../pages/NavBar/NavBar';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopPage = () => {
  // Color palette
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3',
    error: '#FF6B6B'
  };

 // State management
 const [activeCategory, setActiveCategory] = useState('all');
 const [showFilters, setShowFilters] = useState(false);
 const [priceRange, setPriceRange] = useState([0, 10000]);
 const [sortBy, setSortBy] = useState('popular');
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedFilters, setSelectedFilters] = useState({
   plantType: [],
   maintenance: [],
   light: []
 });
 const [wishlist, setWishlist] = useState([]);
 const [showCart, setShowCart] = useState(false);
 const [loading, setLoading] = useState(true);
 const [quickViewProduct, setQuickViewProduct] = useState(null);
 const [user, setUser] = useState({
   id: '123',
   email: 'user@example.com',
   name: 'Test User'
 });
 const [orders, setOrders] = useState([]);
 const [isProcessing, setIsProcessing] = useState(false);
 const [recentlyViewed, setRecentlyViewed] = useState([]);
 const [compareProducts, setCompareProducts] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState([]);
 const [cartItems, setCartItems] = useState([]);

   // Sample product data
   const products = [
    {
      id: 1,
      name: 'Snake Plant',
      category: 'plants',
      price: 299,
      rating: 4.5,
      image: '/imgs/shopImg/Img-3.webp',
      tags: ['Low Maintenance', 'Air Purifying'],
      stock: 15,
      description: 'Perfect for beginners, the snake plant is known for its air-purifying qualities.',
      care: { water: 'Low', light: 'Low to Bright', humidity: 'Any' }
    },
    {
      id: 2,
      name: 'Peace Lily',
      category: 'plants',
      price: 249,
      rating: 4.8,
      image: '/imgs/shopImg/Img-1.webp',
      tags: ['Air Purifying', 'Aesthetic Appeal'],
      stock: 23,
      description: 'Purifies air, thrives on neglect, and adds timeless elegance.',
      dimensions: { width: '6 inches', height: '7 inches' }
    },
    {
      id: 3,
      name: 'ZZ Plant',
      category: 'plants',
      price: 199,
      rating: 4.7,
      image: '/imgs/shopImg/Img-2.webp',
      tags: ['Air Purifying', 'Aesthetic Appeal'],
      stock: 45,
      description: 'A unique and elegant plant that adds a touch of sophistication to any space.',
      features: ['Air Purifying', 'Aesthetic Appeal']
    }
  ];

 // Categories and filter options (same as before)
 const categories = [
   { id: 'all', name: 'All Products', icon: FiShoppingBag },
   { id: 'plants', name: 'Plants', icon: FiFilter },
   { id: 'pots', name: 'Pots & Planters', icon: FiFilter },
   { id: 'tools', name: 'Gardening Tools', icon: FiFilter }
 ];

 const filterOptions = {
   plantType: ['Indoor', 'Outdoor', 'Succulents', 'Herbs'],
   maintenance: ['Low', 'Medium', 'High'],
   light: ['Low Light', 'Bright Indirect', 'Full Sun']
 };

 // Load saved data on mount
 useEffect(() => {
   const loadSavedData = () => {
     try {
       const savedWishlist = localStorage.getItem('wishlist');
       if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

       const savedRecentlyViewed = localStorage.getItem('recentlyViewed');
       if (savedRecentlyViewed) setRecentlyViewed(JSON.parse(savedRecentlyViewed));

       setLoading(false);
     } catch (error) {
       console.error('Error loading saved data:', error);
       toast.error('Error loading your saved items');
       setLoading(false);
     }
   };

   loadSavedData();
 }, []);

 // Persist data to localStorage
 useEffect(() => {
   if (!loading) {
     localStorage.setItem('wishlist', JSON.stringify(wishlist));
     localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
   }
 }, [wishlist, recentlyViewed, loading]);

 // Enhanced product filtering
 const filterProducts = (product) => {
   const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
   const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.description.toLowerCase().includes(searchQuery.toLowerCase());
   const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
   const matchesFilters = Object.entries(selectedFilters).every(([key, values]) => 
     values.length === 0 || values.some(value => product.tags.includes(value))
   );

   return matchesCategory && matchesSearch && matchesPrice && matchesFilters;
 };

 // Product sorting
 const sortedProducts = [...filteredProducts].sort((a, b) => {
   switch (sortBy) {
     case 'price-low':
       return a.price - b.price;
     case 'price-high':
       return b.price - a.price;
     case 'rating':
       return b.rating - a.rating;
     default:
       return 0;
   }
 });

 // Cart functions
 const handleAddToCart = (product) => {
   setCartItems(prevItems => {
     const existingItem = prevItems.find(item => item.id === product.id);
     if (existingItem) {
       return prevItems.map(item =>
         item.id === product.id
           ? { ...item, quantity: item.quantity + 1 }
           : item
       );
     }
     return [...prevItems, { ...product, quantity: 1 }];
   });
   toast.success(`${product.name} added to cart!`);
 };

 const handleRemoveFromCart = (productId) => {
   setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
 };

 const handleUpdateCartQuantity = (productId, newQuantity) => {
   if (newQuantity < 1) {
     handleRemoveFromCart(productId);
     return;
   }
   setCartItems(prevItems =>
     prevItems.map(item =>
       item.id === productId
         ? { ...item, quantity: newQuantity }
         : item
     )
   );
 };

 const placeOrder = async () => {
   if (!user) {
     toast.error('Please login to place an order');
     return;
   }

   if (cartItems.length === 0) {
     toast.error('Your cart is empty');
     return;
   }

   setIsProcessing(true);
   try {
     const orderTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
     
     const orderData = {
       id: Math.random().toString(36).substr(2, 9),
       userId: user.id,
       userEmail: user.email,
       items: cartItems.map(item => ({
         id: item.id,
         name: item.name,
         price: item.price,
         quantity: item.quantity
       })),
       total: orderTotal,
       status: 'pending',
       createdAt: new Date().toISOString()
     };

     // Add order to local state
     setOrders(prevOrders => [...prevOrders, orderData]);
     
     // Clear cart
     setCartItems([]);
     setShowCart(false);
     toast.success('Order placed successfully!');
   } catch (error) {
     console.error('Error placing order:', error);
     toast.error('Failed to place order. Please try again.');
   } finally {
     setIsProcessing(false);
   }
 };

 // Filter functions
 const handleFilterChange = (category, value) => {
   setSelectedFilters(prev => ({
     ...prev,
     [category]: prev[category].includes(value)
       ? prev[category].filter(item => item !== value)
       : [...prev[category], value]
   }));
 };

 // Handle wishlist functionality
 const handleWishlistClick = (product) => {
   if (!product) return;
   const isInWishlist = wishlist.some(item => item.id === product.id);
   if (isInWishlist) {
     setWishlist(wishlist.filter(item => item.id !== product.id));
   } else {
     setWishlist([...wishlist, product]);
   }
 };

 // Handle sort functionality
 const handleSortChange = (value) => {
   setSortBy(value);
   let sortedProducts = [...filteredProducts];
   
   switch (value) {
     case 'price-low':
       sortedProducts.sort((a, b) => a.price - b.price);
       break;
     case 'price-high':
       sortedProducts.sort((a, b) => b.price - a.price);
       break;
     case 'rating':
       sortedProducts.sort((a, b) => b.rating - a.rating);
       break;
     case 'popular':
     default:
       // Assuming we have a popularity field, or using rating as a proxy
       sortedProducts.sort((a, b) => b.rating - a.rating);
       break;
   }
   setFilteredProducts(sortedProducts);
 };

 // Handle category change
 const handleCategoryChange = (category) => {
   setActiveCategory(category);
   let filtered = products;
   
   if (category !== 'all') {
     filtered = products.filter(product => product.category === category);
   }
   
   // Apply existing filters
   filtered = applyFilters(filtered);
   setFilteredProducts(filtered);
 };

 // Apply all filters
 const applyFilters = (products) => {
   let filtered = [...products];
   
   // Price range filter
   filtered = filtered.filter(product => 
     product.price >= priceRange[0] && product.price <= priceRange[1]
   );
   
   // Selected filters
   Object.entries(selectedFilters).forEach(([category, values]) => {
     if (values.length > 0) {
       filtered = filtered.filter(product => 
         product.tags?.some(tag => values.includes(tag))
       );
     }
   });
   
   // Search query
   if (searchQuery) {
     const query = searchQuery.toLowerCase();
     filtered = filtered.filter(product => 
       product.name.toLowerCase().includes(query) ||
       product.description?.toLowerCase().includes(query) ||
       product.tags?.some(tag => tag.toLowerCase().includes(query))
     );
   }
   
   return filtered;
 };

 // Effect to update filtered products when filters change
 useEffect(() => {
   const filtered = applyFilters(
     activeCategory === 'all' 
       ? products 
       : products.filter(product => product.category === activeCategory)
   );
   setFilteredProducts(filtered);
 }, [priceRange, selectedFilters, searchQuery, activeCategory]);

 // Add localStorage effect for cart persistence
 useEffect(() => {
   const savedCart = localStorage.getItem('cart');
   if (savedCart) {
     setCartItems(JSON.parse(savedCart));
   }
 }, []);

 useEffect(() => {
   localStorage.setItem('cart', JSON.stringify(cartItems));
 }, [cartItems]);

 // Cart Drawer component
 const CartDrawer = () => (
   <motion.div
     initial={{ x: '100%' }}
     animate={{ x: 0 }}
     exit={{ x: '100%' }}
     className="fixed right-0 top-0 h-full w-full md:w-96 z-1000 p-6 overflow-y-auto"
     style={{ backgroundColor: colors.background }}
     role="dialog"
     aria-labelledby="cart-heading"
   >
     <div className="flex justify-between items-center mb-6">
       <h2 id="cart-heading" className="text-xl font-bold" style={{ color: colors.deep }}>
         Shopping Cart ({cartItems.length})
       </h2>
       <button 
         onClick={() => setShowCart(false)}
         aria-label="Close cart"
       >
         <FiX size={24} style={{ color: colors.deep }} />
       </button>
     </div>
     {cartItems.length === 0 ? (
       <div className="text-center py-8" style={{ color: colors.deep }}>
         <FiShoppingCart size={48} className="mx-auto mb-4" />
         <p className="text-lg">Your cart is empty</p>
       </div>
     ) : (
       <>
         <div className="space-y-4 mb-6">
           {cartItems.map(item => (
             <motion.div 
               key={item.id}
               className="flex items-center gap-4 p-4 rounded-lg"
               style={{ backgroundColor: colors.accent }}
               layout
             >
               <img 
                 src={item.image}
                 alt={item.name}
                 className="w-20 h-20 object-cover rounded"
                 loading="lazy"
               />
               <div className="flex-1">
                 <h3 className="font-bold" style={{ color: colors.deep }}>{item.name}</h3>
                 <p style={{ color: colors.tertiary }}>₹{item.price}</p>
                 <div className="flex items-center gap-2 mt-2">
                   <button
                     className="p-2 rounded-lg"
                     style={{ backgroundColor: colors.tertiary, color: colors.background }}
                     onClick={() => handleRemoveFromCart(item.id)}
                     aria-label="Decrease quantity"
                   >
                     <FiMinus size={16} />
                   </button>
                   <span style={{ color: colors.deep }}>{item.quantity}</span>
                   <button
                     className="p-2 rounded-lg"
                     style={{ backgroundColor: colors.tertiary, color: colors.background }}
                     onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}
                     aria-label="Increase quantity"
                   >
                     <FiPlus size={16} />
                   </button>
                 </div>
               </div>
               <button
                 onClick={() => handleRemoveFromCart(item.id)}
                 className="p-2 rounded-full hover:bg-opacity-80 transition-colors"
                 style={{ backgroundColor: colors.warm }}
                 aria-label="Remove item"
               >
                 <FiX style={{ color: colors.deep }} />
               </button>
             </motion.div>
           ))}
         </div>
         <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: colors.highlight }}>
           <div className="space-y-2 mb-4">
             <div className="flex justify-between">
               <span style={{ color: colors.deep }}>Subtotal</span>
               <span style={{ color: colors.deep }}>
                 ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
               </span>
             </div>
             <div className="flex justify-between">
               <span style={{ color: colors.deep }}>Estimated Tax</span>
               <span style={{ color: colors.deep }}>₹0.00</span>
             </div>
             <div className="flex justify-between">
               <span style={{ color: colors.deep }}>Shipping</span>
               <span style={{ color: colors.deep }}>FREE</span>
             </div>
           </div>
           <div className="flex justify-between border-t pt-4 mb-4">
             <span className="font-bold" style={{ color: colors.deep }}>Total</span>
             <span className="font-bold" style={{ color: colors.deep }}>
               ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
             </span>
           </div>
           <Checkout />
         </div>
       </>
     )}
   </motion.div>
 );

 // Quick View Modal
 const QuickViewModal = () => {
   if (!quickViewProduct) return null;
   
   return (
     <AnimatePresence>
       {quickViewProduct && (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
           onClick={() => setQuickViewProduct(null)}
         >
           <motion.div
             initial={{ scale: 0.95 }}
             animate={{ scale: 1 }}
             className="relative bg-white rounded-xl max-w-2xl w-full p-6"
             style={{ backgroundColor: colors.background }}
             onClick={(e) => e.stopPropagation()}
           >
             <button
               className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm"
               onClick={() => setQuickViewProduct(null)}
               aria-label="Close quick view"
             >
               <FiX size={24} />
             </button>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="relative">
                 <img 
                   src={quickViewProduct?.image || ''}
                   alt={quickViewProduct?.name || 'Product Image'}
                   className="w-full h-64 object-cover rounded-xl"
                 />
                 {quickViewProduct?.stock < 5 && (
                   <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs"
                     style={{ backgroundColor: colors.error, color: colors.background }}
                   >
                     Low Stock: {quickViewProduct.stock} left
                   </div>
                 )}
               </div>
               <div className="space-y-4">
                 <h2 className="text-2xl font-bold" style={{ color: colors.deep }}>
                   {quickViewProduct?.name || 'Product Name'}
                 </h2>
                 <div className="flex items-center gap-2">
                   <FiStar style={{ color: colors.secondary }} />
                   <span style={{ color: colors.primary }}>{quickViewProduct?.rating || '0.0'}</span>
                   <span className="text-gray-500">({Math.floor(Math.random() * 100 + 50)} reviews)</span>
                 </div>
                 <p className="text-lg font-bold" style={{ color: colors.tertiary }}>
                   ₹{typeof quickViewProduct?.price === 'number' ? quickViewProduct.price.toFixed(2) : '0.00'}
                 </p>
                 <p style={{ color: colors.primary }}>
                   {quickViewProduct?.description || 'No description available'}
                 </p>
                 <button
                   onClick={() => {
                     if (quickViewProduct) {
                       handleAddToCart(quickViewProduct);
                       setQuickViewProduct(null);
                     }
                   }}
                   className="w-full py-3 rounded-lg font-medium transition-transform hover:scale-105"
                   style={{ backgroundColor: colors.tertiary, color: colors.background }}
                 >
                   Add to Cart
                 </button>
               </div>
             </div>
           </motion.div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 };

 // Checkout component
 const Checkout = () => {
   const navigate = useNavigate();

   return (
     <div className="p-4 border-t">
       <div className="flex justify-between mb-4">
         <span>Total:</span>
         <span className="font-bold">
           ₹{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
         </span>
       </div>
       <Button
         onClick={() => navigate('/home/checkout')}
         disabled={cartItems.length === 0}
         className="w-full"
       >
         Proceed to Checkout
       </Button>
     </div>
   );
 };

 return (
   <div className="flex min-h-screen" style={{ backgroundColor: colors.background }}>
     {/* <NavBar /> */}
     <div className="flex-1 p-8">
       {/* Main Shop Content */}
       <div className="flex-1">
         {/* Shop Header */}
         <div className="sticky top-0 z-40 border-b mb-8" style={{ backgroundColor: colors.background }}>
      {/* Announcement Bar */}
      <div className="w-full py-2 text-center text-sm" style={{ backgroundColor: colors.tertiary, color: colors.background }}>
        <p>Free Shipping on Orders Over ₹4999 • Easy Returns</p>
      </div>     
    </div>

         {/* Main Shop Section */}
         <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
           <div className="flex gap-8">
             {/* Filters Sidebar */}
             <AnimatePresence>
               {showFilters && (
                 <motion.div 
                   className="w-64 flex-shrink-0 hidden md:block"
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   exit={{ x: -20, opacity: 0 }}
                   transition={{ type: 'spring', stiffness: 300 }}
                 >
                   <div 
                     className="p-6 rounded-xl sticky top-32 space-y-6"
                     style={{ backgroundColor: colors.highlight, zIndex: 30 }}
                   >
                     <div className="flex justify-between items-center">
                       <h2 className="text-xl font-bold" style={{ color: colors.deep }}>Filters</h2>
                       <button 
                         onClick={() => setShowFilters(false)}
                         aria-label="Close filters"
                       >
                         <FiX style={{ color: colors.deep }} />
                       </button>
                     </div>

                     {/* Price Range */}
                     <div>
                       <h3 className="font-medium mb-4" style={{ color: colors.deep }}>Price Range</h3>
                       <div className="mb-4">
                         <input
                           type="range"
                           min="0"
                           max="10000"
                           value={priceRange[1]}
                           onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 0])}
                           className="w-full range-slider"
                           style={{
                             accentColor: colors.tertiary
                           }}
                         />
                       </div>
                       <div className="flex justify-between text-sm" style={{ color: colors.primary }}>
                         <span>₹{priceRange[0]}</span>
                         <span>₹{priceRange[1]}</span>
                       </div>
                     </div>

                     {/* Filter Sections */}
                     {Object.entries(filterOptions).map(([category, options]) => (
                       <div key={category} className="space-y-4">
                         <h3 className="font-medium" style={{ color: colors.deep }}>
                           {category.charAt(0).toUpperCase() + category.slice(1)}
                         </h3>
                         <div className="space-y-2">
                           {options.map(option => (
                             <label 
                               key={option} 
                               className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                             >
                               <input
                                 type="checkbox"
                                 checked={selectedFilters[category].includes(option)}
                                 onChange={() => handleFilterChange(category, option)}
                                 className="w-4 h-4 rounded border-gray-300 text-tertiary focus:ring-tertiary"
                               />
                               <span style={{ color: colors.primary }}>{option}</span>
                             </label>
                           ))}
                         </div>
                       </div>
                     ))}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>

             {/* Products Grid */}
             <div className="flex-1">
               {/* Sort Controls */}
               <div 
                 className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 p-4 rounded-xl"
                 style={{ backgroundColor: colors.accent }}
               >
                 <span className="text-sm md:text-base" style={{ color: colors.deep }}>
                   Showing {filteredProducts.length} of {products.length} products
                 </span>
                 <div className="flex items-center gap-4 w-full md:w-auto">
                   <button
                     className="md:hidden p-2 rounded-lg"
                     style={{ backgroundColor: colors.tertiary }}
                     onClick={() => setShowFilters(!showFilters)}
                   >
                     <FiFilter style={{ color: colors.background }} />
                   </button>
                   <select
                     value={sortBy}
                     onChange={(e) => handleSortChange(e.target.value)}
                     className="w-full md:w-48 p-2 rounded-lg text-sm md:text-base"
                     style={{ backgroundColor: colors.background, color: colors.deep }}
                   >
                     <option value="popular">Most Popular</option>
                     <option value="rating">Highest Rated</option>
                     <option value="price-low">Price: Low to High</option>
                     <option value="price-high">Price: High to Low</option>
                   </select>
                 </div>
               </div>

               {/* Products Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {loading ? (
                   [...Array(6)].map((_, i) => (
                     <div
                       key={i}
                       className="rounded-xl overflow-hidden animate-pulse"
                       style={{ backgroundColor: colors.accent }}
                     >
                       <div className="h-64 bg-gray-200"></div>
                       <div className="p-4 space-y-4">
                         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                       </div>
                     </div>
                   ))
                 ) : filteredProducts.length === 0 ? (
                   <div 
                     className="col-span-full text-center py-12"
                     style={{ color: colors.deep }}
                   >
                     <FiAlertCircle size={48} className="mx-auto mb-4" />
                     <h3 className="text-xl font-bold mb-2">No Products Found</h3>
                     <p>Try adjusting your filters or search terms</p>
                   </div>
                 ) : (
                   filteredProducts.map(product => (
                     <motion.div
                       key={product.id}
                       className="rounded-xl overflow-hidden shadow-lg"
                       style={{ backgroundColor: colors.background }}
                       whileHover={{ y: -5 }}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       <div className="relative">
                         <img 
                           src={product.image} 
                           alt={product.name}
                           className="w-full h-64 object-cover cursor-pointer"
                           onClick={() => setQuickViewProduct(product)}
                           loading="lazy"
                         />
                         <button
                           onClick={() => handleWishlistClick(product)}
                           className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
                             wishlist.some(item => item.id === product.id) ? 'text-red-500' : ''
                           }`}
                           style={{ backgroundColor: colors.background + '80' }}
                           aria-label="Add to wishlist"
                         >
                           <FiHeart className="w-5 h-5" />
                         </button>
                         {product.stock < 5 && (
                           <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs"
                             style={{ backgroundColor: colors.error, color: colors.background }}
                           >
                             Low Stock: {product.stock} left
                           </div>
                         )}
                       </div>
                       <div className="p-4" style={{ backgroundColor: colors.background }}>
                         <div className="flex justify-between items-start mb-2">
                           <div>
                             <h3 className="font-bold" style={{ color: colors.deep }}>
                               {product.name}
                             </h3>
                             <div className="flex items-center gap-1">
                               {[...Array(5)].map((_, i) => (
                                 <FiStar
                                   key={i}
                                   className={i < Math.floor(product.rating) ? 'fill-current' : ''}
                                   style={{ color: i < Math.floor(product.rating) ? colors.tertiary : colors.accent }}
                                 />
                               ))}
                               <span className="text-sm ml-1" style={{ color: colors.primary }}>
                                 ({product.rating})
                               </span>
                             </div>
                           </div>
                           <span className="font-bold" style={{ color: colors.tertiary }}>
                             ₹{typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
                           </span>
                         </div>
                         <div className="flex flex-wrap gap-2 mb-4">
                           {product.tags?.map((tag, index) => (
                             <span
                               key={index}
                               className="px-2 py-1 rounded-full text-xs"
                               style={{ backgroundColor: colors.accent, color: colors.deep }}
                             >
                               {tag}
                             </span>
                           ))}
                         </div>
                         <div className="flex gap-2">
                           <button
                             onClick={() => handleAddToCart(product)}
                             className="flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                             style={{ backgroundColor: colors.tertiary, color: colors.background }}
                             disabled={product.stock === 0}
                           >
                             {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                           </button>
                           <button
                             onClick={() => setQuickViewProduct(product)}
                             className="py-2 px-4 rounded-lg text-sm font-medium border transition-colors"
                             style={{ 
                               borderColor: colors.tertiary,
                               color: colors.tertiary,
                               backgroundColor: colors.background
                             }}
                           >
                             Quick View
                           </button>
                         </div>
                       </div>
                     </motion.div>
                   ))
                 )}
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* Cart Drawer */}
       <AnimatePresence>
         {showCart && <CartDrawer />}
       </AnimatePresence>

       {/* Quick View Modal */}
       <QuickViewModal />
     </div>

     {/* Toast container for notifications */}
     <ToastContainer
       position="bottom-right"
       autoClose={3000}
       hideProgressBar={false}
       newestOnTop
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
     />
   </div>
 );
};

export default ShopPage;