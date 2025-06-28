import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMessageCircle, FiBook, FiTarget, FiArrowRight, FiPlay } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiPlay,
      title: 'Get Started',
      description: 'Begin your flirting journey with our interactive guide',
      link: '/get-started',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiHeart,
      title: 'Pickup Lines',
      description: 'Discover clever and charming pickup lines for any situation',
      link: '/pickup-lines',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FiMessageCircle,
      title: 'Conversation Starters',
      description: 'Break the ice with engaging conversation topics',
      link: '/conversation-starters',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FiBook,
      title: 'Flirting Tips',
      description: 'Learn the art of flirting with expert advice',
      link: '/tips',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiTarget,
      title: 'Practice Mode',
      description: 'Practice your flirting skills in a safe environment',
      link: '/practice',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Master the Art of
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Flirting
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Build confidence, learn conversation skills, and discover the perfect lines to make meaningful connections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>Get Started</span>
                <SafeIcon icon={FiPlay} className="h-5 w-5" />
              </Link>
              <Link
                to="/pickup-lines"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors shadow-lg"
              >
                <span>Explore Lines</span>
                <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Flirt Like a Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From clever pickup lines to expert tips, we've got you covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={feature.link} className="block group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <SafeIcon icon={feature.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                      <span>Explore</span>
                      <SafeIcon icon={FiArrowRight} className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Pickup Lines</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-purple-100">Conversation Starters</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Expert Tips</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;