import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { sampleProducts } from '../data/sampleData';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
    alert('Product added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="flex mt-4 space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${
                  selectedImage === index ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Size:</label>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size 
                      ? 'bg-blue-600 text-white' 
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span className="px-4 py-1 border rounded">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;