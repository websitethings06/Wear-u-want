import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const categories = [
    { name: 'New In' },
    { name: 'Trending Now' },
    { name: 'Western Wear' },
    { name: 'Ethnic Wear' },
    { name: 'Footwear' },
    { name: 'Fragrances' },
    { name: 'Accessories' }
  ];

  const westernWearSubcategories = [
    'T-Shirts',
    'Casual Shirts',
    'Formal Shirts',
    'Jeans',
    'Trousers',
    'Shorts',
    'Blazers & Jackets'
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-white rounded-lg p-3 mr-4 shadow-md">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  W
                </span>
              </div>
              <div>
                <span className="text-3xl font-black text-white tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                  Wear U Want
                </span>
                <p className="text-sm text-white/80 -mt-1">Men's Fashion</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <form className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for men's fashion..."
                  className="w-full pl-12 pr-4 py-4 text-base border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/90 backdrop-blur-sm shadow-lg"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-6">
              {/* Wishlist */}
              <button className="text-white hover:text-yellow-300 transition-colors p-3 rounded-full hover:bg-white/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Cart */}
              <Link to="/cart" className="relative text-white hover:text-yellow-300 transition-colors p-3 rounded-full hover:bg-white/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0h14M12 17v4m-4-4v4m8-4v4" />
                </svg>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
                    {getCartItemsCount()}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative">
                {isAuthenticated ? (
                  <div>
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center space-x-3 text-white hover:text-yellow-300 transition-colors p-3 rounded-full hover:bg-white/20"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                        <span className="text-white text-base font-bold">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-base font-semibold">{user?.name}</span>
                    </button>
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-lg border border-gray-200">
                        <Link
                          to="/profile"
                          className="block px-4 py-3 text-base text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 rounded-t-lg transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 rounded-b-lg transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login" className="text-white hover:text-yellow-300 transition-colors font-semibold px-6 py-3 rounded-full hover:bg-white/20 text-base">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {categories.map((category) => (
                <div key={category.name} className="relative group">
                  <button
                    className="py-5 text-base font-semibold text-white hover:text-yellow-300 transition-colors flex items-center space-x-1 border-b-2 border-transparent hover:border-yellow-300"
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <span>{category.name}</span>
                    {category.name === 'Western Wear' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                  </button>

                  {/* Western Wear Dropdown */}
                  {category.name === 'Western Wear' && activeCategory === 'Western Wear' && (
                    <div 
                      className="absolute top-full left-0 w-80 bg-white shadow-xl border-t-2 border-purple-500 rounded-lg"
                      onMouseEnter={() => setActiveCategory('Western Wear')}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-3 text-purple-600 text-lg">Western Wear</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {westernWearSubcategories.map((item) => (
                            <Link 
                              key={item}
                              to={`/shop?category=${item.toLowerCase().replace(/\s+/g, '-').replace(/\|/g, '-')}`}
                              className="text-base text-gray-600 hover:text-purple-600 transition-colors py-2 hover:bg-purple-50 rounded px-2"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* View All */}
            <button className="py-5 text-base font-semibold text-white hover:text-yellow-300 transition-colors border-b-2 border-transparent hover:border-yellow-300">
              View All
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;