import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemsCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm">
        <p>🎉 FREE SHIPPING on orders above ₹999 | Use code: FREESHIP</p>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  WearUWant
                </span>
                <p className="text-xs text-gray-500 -mt-1">Fashion Store</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center space-x-1">
                  <span>Categories</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                  <Link to="/shop?category=men" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-t-lg">
                    <span className="mr-3">👔</span>
                    Men's Fashion
                  </Link>
                  <Link to="/shop?category=women" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    <span className="mr-3">👗</span>
                    Women's Fashion
                  </Link>
                  <Link to="/shop?category=accessories" className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-b-lg">
                    <span className="mr-3">👜</span>
                    Accessories
                  </Link>
                </div>
              </div>
              <Link to="/shop" className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group">
                All Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* User Menu */}
              <div className="relative">
                {isAuthenticated ? (
                  <div>
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="hidden md:block font-medium">{user?.name}</span>
                    </button>
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border">
                        <Link
                          to="/profile"
                          className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-t-lg"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-b-lg"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="hidden md:block font-medium">Login</span>
                  </Link>
                )}
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0h14M12 17v4m-4-4v4m8-4v4" />
                </svg>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                    {getCartItemsCount()}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-gray-700 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white">
              <div className="mb-4 px-4">
                <form onSubmit={handleSearch} className="flex">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-r-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
              <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/shop" className="block py-2 px-4 text-gray-700 hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>
                All Products
              </Link>
              <Link to="/shop?category=men" className="block py-2 px-4 text-gray-700 hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>
                👔 Men's Fashion
              </Link>
              <Link to="/shop?category=women" className="block py-2 px-4 text-gray-700 hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>
                👗 Women's Fashion
              </Link>
              <Link to="/shop?category=accessories" className="block py-2 px-4 text-gray-700 hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>
                👜 Accessories
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;