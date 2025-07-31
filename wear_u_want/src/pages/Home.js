import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/sampleData';

const Home = () => {
  const featuredProducts = sampleProducts.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Men's Fashion
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover the latest trends in men's fashion. From casual wear to formal attire, find your perfect style.
            </p>
            <Link
              to="/shop"
              className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FEATURED CATEGORIES</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Casual Shirts */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Casual Shirts"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">CASUAL SHIRTS</h3>
                </div>
              </div>
            </div>

            {/* T-Shirts */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"
                  alt="T-Shirts"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">T-SHIRTS</h3>
                </div>
              </div>
            </div>

            {/* Jeans */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop"
                  alt="Jeans"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">JEANS</h3>
                </div>
              </div>
            </div>

            {/* Formal Shirts */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop"
                  alt="Formal Shirts"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">FORMAL SHIRTS</h3>
                </div>
              </div>
            </div>

            {/* Casual Trousers */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop"
                  alt="Casual Trousers"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">CASUAL TROUSERS</h3>
                </div>
              </div>
            </div>

            {/* Footwear */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop"
                  alt="Footwear"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">FOOTWEAR</h3>
                </div>
              </div>
            </div>

            {/* Blazers & Jackets */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
                  alt="Blazers & Jackets"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">BLAZERS & JACKETS</h3>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop"
                  alt="Accessories"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">ACCESSORIES</h3>
                </div>
              </div>
            </div>

            {/* Fragrances */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop"
                  alt="Fragrances"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">FRAGRANCES</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest men's fashion trends and exclusive offers.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;