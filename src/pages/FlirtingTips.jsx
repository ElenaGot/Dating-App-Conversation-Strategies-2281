import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiStar, FiCheck, FiArrowRight, FiUser, FiHeart, FiMessageSquare } = FiIcons;

const FlirtingTips = () => {
  const [activeCategory, setActiveCategory] = useState('basics');

  const tipCategories = {
    basics: {
      title: 'Flirting Basics',
      icon: FiBook,
      tips: [
        {
          title: 'Make Eye Contact',
          description: 'Maintain natural eye contact to show interest and confidence. Look into their eyes when speaking, but don\'t stare.',
          importance: 'high'
        },
        {
          title: 'Smile Genuinely',
          description: 'A genuine smile is one of the most attractive things you can do. It shows warmth and approachability.',
          importance: 'high'
        },
        {
          title: 'Use Open Body Language',
          description: 'Keep your arms uncrossed, face them directly, and maintain good posture to appear confident and interested.',
          importance: 'medium'
        },
        {
          title: 'Listen Actively',
          description: 'Show genuine interest in what they\'re saying. Ask follow-up questions and remember details.',
          importance: 'high'
        }
      ]
    },
    conversation: {
      title: 'Conversation Skills',
      icon: FiMessageSquare,
      tips: [
        {
          title: 'Ask Open-Ended Questions',
          description: 'Instead of yes/no questions, ask questions that encourage them to share stories and opinions.',
          importance: 'high'
        },
        {
          title: 'Use Playful Teasing',
          description: 'Light, playful teasing can create chemistry, but always keep it positive and never hurtful.',
          importance: 'medium'
        },
        {
          title: 'Share Personal Stories',
          description: 'Open up about yourself to create a deeper connection. Vulnerability can be attractive.',
          importance: 'medium'
        },
        {
          title: 'Find Common Ground',
          description: 'Look for shared interests, experiences, or values to build a stronger connection.',
          importance: 'high'
        }
      ]
    },
    confidence: {
      title: 'Building Confidence',
      icon: FiUser,
      tips: [
        {
          title: 'Practice Self-Care',
          description: 'When you feel good about yourself, it shows. Take care of your physical and mental health.',
          importance: 'high'
        },
        {
          title: 'Embrace Rejection',
          description: 'Not everyone will be interested, and that\'s okay. Rejection is part of the process, not a reflection of your worth.',
          importance: 'medium'
        },
        {
          title: 'Be Authentic',
          description: 'Don\'t try to be someone you\'re not. Authenticity is more attractive than a false persona.',
          importance: 'high'
        },
        {
          title: 'Practice Makes Perfect',
          description: 'The more you practice social interactions, the more natural and confident you\'ll become.',
          importance: 'medium'
        }
      ]
    },
    advanced: {
      title: 'Advanced Techniques',
      icon: FiStar,
      tips: [
        {
          title: 'Mirror Their Energy',
          description: 'Subtly match their energy level and communication style to create rapport and connection.',
          importance: 'medium'
        },
        {
          title: 'Create Shared Experiences',
          description: 'Suggest activities you can do together to build memories and deepen your connection.',
          importance: 'high'
        },
        {
          title: 'Use Compliments Wisely',
          description: 'Give genuine, specific compliments rather than generic ones. Focus on personality traits and choices.',
          importance: 'medium'
        },
        {
          title: 'Know When to Escalate',
          description: 'Pay attention to their responses and body language to know when to take things to the next level.',
          importance: 'high'
        }
      ]
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flirting Tips & Advice
          </h1>
          <p className="text-xl text-gray-600">
            Master the art of flirting with expert tips and techniques
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(tipCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 shadow-md'
              }`}
            >
              <SafeIcon icon={category.icon} className="h-5 w-5" />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Tips Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {tipCategories[activeCategory].tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(tip.importance)}`}>
                    {tip.importance}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Remember: Practice Makes Perfect</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <SafeIcon icon={FiHeart} className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Be Genuine</h3>
              <p className="text-green-100">Authenticity is more attractive than any technique</p>
            </div>
            <div>
              <SafeIcon icon={FiCheck} className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stay Confident</h3>
              <p className="text-green-100">Confidence comes from practice and self-acceptance</p>
            </div>
            <div>
              <SafeIcon icon={FiArrowRight} className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Take Action</h3>
              <p className="text-green-100">The best advice means nothing without practice</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Reference Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference: Do's and Don'ts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-3">✅ Do's</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Be yourself and stay authentic</li>
                <li>• Listen more than you speak</li>
                <li>• Respect boundaries and consent</li>
                <li>• Use humor appropriately</li>
                <li>• Show genuine interest in them</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-3">❌ Don'ts</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Be overly aggressive or pushy</li>
                <li>• Use offensive or inappropriate humor</li>
                <li>• Pretend to be someone you're not</li>
                <li>• Ignore signs of disinterest</li>
                <li>• Make it all about yourself</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlirtingTips;