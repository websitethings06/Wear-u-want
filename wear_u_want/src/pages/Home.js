import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      title: "New Collection 2024",
      subtitle: "Discover the latest trends in men's fashion",
      cta: "Shop Now"
    },
    {
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=600&fit=crop",
      title: "Casual Elegance",
      subtitle: "Perfect blend of comfort and style",
      cta: "Explore"
    },
    {
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&h=600&fit=crop",
      title: "Formal Excellence",
      subtitle: "Professional attire for every occasion",
      cta: "View Collection"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer, Bangalore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "The quality of their casual shirts is amazing. Perfect fit and reasonable prices too!"
    },
    {
      name: "Amit Patel",
      role: "Marketing Manager, Mumbai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "I shop here for all my formal wear. The customer service is excellent!"
    },
    {
      name: "Vikram Singh",
      role: "Business Analyst, Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Great variety and reasonable prices. Highly recommended!"
    }
  ];

  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999"
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30-day return policy"
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "100% secure payment gateway"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Customer support always available"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <section className="relative h-96 md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
                <Link
                  to="/shop"
                  className="bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FEATURED COLLECTIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Summer Collection */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop"
                  alt="Summer Collection"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Summer Collection</h3>
                  <p className="text-white/90 mb-4">Light and breathable fabrics for the warm season</p>
                  <Link
                    to="/shop?collection=summer"
                    className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Office Wear */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop"
                  alt="Office Wear"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Office Wear</h3>
                  <p className="text-white/90 mb-4">Professional attire for the modern workplace</p>
                  <Link
                    to="/shop?collection=office"
                    className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Casual Essentials */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"
                  alt="Casual Essentials"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Casual Essentials</h3>
                  <p className="text-white/90 mb-4">Comfortable and stylish everyday wear</p>
                  <Link
                    to="/shop?collection=casual"
                    className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
                  >
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
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
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop"
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
                  src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop"
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

            {/* Blazers & Jackets */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"
                  alt="Blazers & Jackets"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">BLAZERS & JACKETS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Wear U Want</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are India's leading men's fashion brand. Our mission is to provide quality clothing at affordable prices. 
                We constantly innovate to give our customers the best shopping experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 10+ years of experience, we understand Indian men's fashion needs and provide 
                the perfect blend of style, comfort, and affordability.
              </p>
              <Link
                to="/about"
                className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">WHAT OUR CUSTOMERS SAY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Size Guide</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Not sure about your size? Check our comprehensive size guide to find the perfect fit.
          </p>
          <button
            onClick={() => setShowSizeGuide(true)}
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            View Size Guide
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
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
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Size Guide</h3>
              <button
                onClick={() => setShowSizeGuide(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Shirts Size Chart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Chest (inches)</th>
                        <th className="text-left py-2">Length (inches)</th>
                        <th className="text-left py-2">Shoulder (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">S</td>
                        <td className="py-2">36-38</td>
                        <td className="py-2">26-27</td>
                        <td className="py-2">16-17</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">M</td>
                        <td className="py-2">38-40</td>
                        <td className="py-2">27-28</td>
                        <td className="py-2">17-18</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">L</td>
                        <td className="py-2">40-42</td>
                        <td className="py-2">28-29</td>
                        <td className="py-2">18-19</td>
                      </tr>
                      <tr>
                        <td className="py-2">XL</td>
                        <td className="py-2">42-44</td>
                        <td className="py-2">29-30</td>
                        <td className="py-2">19-20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Trousers Size Chart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Waist (inches)</th>
                        <th className="text-left py-2">Length (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">30</td>
                        <td className="py-2">30-32</td>
                        <td className="py-2">32-34</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">32</td>
                        <td className="py-2">32-34</td>
                        <td className="py-2">32-34</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">34</td>
                        <td className="py-2">34-36</td>
                        <td className="py-2">32-34</td>
                      </tr>
                      <tr>
                        <td className="py-2">36</td>
                        <td className="py-2">36-38</td>
                        <td className="py-2">32-34</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;