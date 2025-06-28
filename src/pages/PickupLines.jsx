import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiRefreshCw, FiCopy, FiCheck, FiFilter } = FiIcons;

const PickupLines = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pickupLines = [
    { id: 1, text: "Are you a magician? Because whenever I look at you, everyone else disappears.", category: "classic", rating: 4.5 },
    { id: 2, text: "Do you have a map? I keep getting lost in your eyes.", category: "classic", rating: 4.2 },
    { id: 3, text: "Are you WiFi? Because I'm really feeling a connection.", category: "tech", rating: 4.7 },
    { id: 4, text: "If you were a vegetable, you'd be a cute-cumber.", category: "funny", rating: 4.0 },
    { id: 5, text: "Are you made of copper and tellurium? Because you're Cu-Te.", category: "nerdy", rating: 4.3 },
    { id: 6, text: "Do you believe in love at first sight, or should I walk by again?", category: "classic", rating: 4.1 },
    { id: 7, text: "Are you a parking ticket? Because you've got 'FINE' written all over you.", category: "funny", rating: 3.9 },
    { id: 8, text: "If you were a triangle, you'd be acute one.", category: "nerdy", rating: 4.4 },
    { id: 9, text: "Are you my phone charger? Because without you, I'd die.", category: "tech", rating: 4.2 },
    { id: 10, text: "Do you have a Band-Aid? Because I just scraped my knee falling for you.", category: "classic", rating: 4.0 }
  ];

  const categories = [
    { value: 'all', label: 'All Lines' },
    { value: 'classic', label: 'Classic' },
    { value: 'funny', label: 'Funny' },
    { value: 'nerdy', label: 'Nerdy' },
    { value: 'tech', label: 'Tech' }
  ];

  const filteredLines = selectedCategory === 'all' 
    ? pickupLines 
    : pickupLines.filter(line => line.category === selectedCategory);

  const getRandomLine = () => {
    const randomIndex = Math.floor(Math.random() * filteredLines.length);
    setCurrentLine(randomIndex);
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  const toggleFavorite = (line) => {
    if (isFavorite(line.id)) {
      removeFromFavorites(line.id);
    } else {
      addToFavorites({ ...line, type: 'pickup-line' });
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pickup Lines
          </h1>
          <p className="text-xl text-gray-600">
            Charming lines to break the ice and start conversations
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600'
              } shadow-md`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Line */}
        <motion.div
          key={currentLine}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center mb-8 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            "{filteredLines[currentLine]?.text}"
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={getRandomLine}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2"
            >
              <SafeIcon icon={FiRefreshCw} className="h-5 w-5" />
              <span>Get Another</span>
            </button>
            <button
              onClick={() => copyToClipboard(filteredLines[currentLine]?.text, filteredLines[currentLine]?.id)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2"
            >
              <SafeIcon icon={copiedId === filteredLines[currentLine]?.id ? FiCheck : FiCopy} className="h-5 w-5" />
              <span>{copiedId === filteredLines[currentLine]?.id ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </motion.div>

        {/* All Lines Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredLines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  line.category === 'classic' ? 'bg-blue-100 text-blue-800' :
                  line.category === 'funny' ? 'bg-yellow-100 text-yellow-800' :
                  line.category === 'nerdy' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {line.category}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600">{line.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-800 mb-4 text-lg">
                "{line.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleFavorite(line)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorite(line.id)
                      ? 'text-pink-500 bg-pink-50'
                      : 'text-gray-400 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <SafeIcon icon={FiHeart} className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => copyToClipboard(line.text, line.id)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <SafeIcon icon={copiedId === line.id ? FiCheck : FiCopy} className="h-4 w-4" />
                  <span className="text-sm">{copiedId === line.id ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickupLines;