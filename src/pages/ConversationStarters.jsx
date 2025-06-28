import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiRefreshCw, FiCopy, FiCheck, FiHeart } = FiIcons;

const ConversationStarters = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [selectedSituation, setSelectedSituation] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const conversationStarters = [
    { id: 1, text: "What's the most interesting thing that happened to you this week?", situation: "general", difficulty: "easy" },
    { id: 2, text: "If you could have dinner with anyone, dead or alive, who would it be?", situation: "general", difficulty: "medium" },
    { id: 3, text: "What's your favorite way to spend a weekend?", situation: "casual", difficulty: "easy" },
    { id: 4, text: "What's the best piece of advice you've ever received?", situation: "deep", difficulty: "medium" },
    { id: 5, text: "If you could travel anywhere right now, where would you go?", situation: "casual", difficulty: "easy" },
    { id: 6, text: "What's something you're passionate about that most people don't know?", situation: "deep", difficulty: "hard" },
    { id: 7, text: "What's your go-to karaoke song?", situation: "party", difficulty: "easy" },
    { id: 8, text: "If you could master any skill instantly, what would it be?", situation: "general", difficulty: "medium" },
    { id: 9, text: "What's the most spontaneous thing you've ever done?", situation: "party", difficulty: "medium" },
    { id: 10, text: "What's your biggest dream or goal right now?", situation: "deep", difficulty: "hard" },
    { id: 11, text: "What's your favorite memory from childhood?", situation: "deep", difficulty: "medium" },
    { id: 12, text: "If you could only eat one cuisine for the rest of your life, what would it be?", situation: "casual", difficulty: "easy" }
  ];

  const situations = [
    { value: 'all', label: 'All Situations' },
    { value: 'general', label: 'General' },
    { value: 'casual', label: 'Casual' },
    { value: 'deep', label: 'Deep' },
    { value: 'party', label: 'Party/Social' }
  ];

  const filteredStarters = selectedSituation === 'all' 
    ? conversationStarters 
    : conversationStarters.filter(starter => starter.situation === selectedSituation);

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

  const toggleFavorite = (starter) => {
    if (isFavorite(starter.id)) {
      removeFromFavorites(starter.id);
    } else {
      addToFavorites({ ...starter, type: 'conversation-starter' });
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSituationColor = (situation) => {
    switch (situation) {
      case 'general': return 'bg-blue-100 text-blue-800';
      case 'casual': return 'bg-green-100 text-green-800';
      case 'deep': return 'bg-purple-100 text-purple-800';
      case 'party': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
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
            Conversation Starters
          </h1>
          <p className="text-xl text-gray-600">
            Break the ice with engaging questions and topics
          </p>
        </motion.div>

        {/* Situation Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {situations.map(situation => (
            <button
              key={situation.value}
              onClick={() => setSelectedSituation(situation.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSituation === situation.value
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              } shadow-md`}
            >
              {situation.label}
            </button>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-8 text-white"
        >
          <h3 className="text-xl font-bold mb-3">💡 Pro Tips for Great Conversations</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>• Listen actively and show genuine interest</div>
            <div>• Ask follow-up questions based on their answers</div>
            <div>• Share your own experiences too</div>
          </div>
        </motion.div>

        {/* Conversation Starters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStarters.map((starter, index) => (
            <motion.div
              key={starter.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSituationColor(starter.situation)}`}>
                    {starter.situation}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(starter.difficulty)}`}>
                    {starter.difficulty}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                "{starter.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleFavorite(starter)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorite(starter.id)
                      ? 'text-pink-500 bg-pink-50'
                      : 'text-gray-400 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                >
                  <SafeIcon icon={FiHeart} className="h-5 w-5" />
                </button>
                
                <button
                  onClick={() => copyToClipboard(starter.text, starter.id)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <SafeIcon icon={copiedId === starter.id ? FiCheck : FiCopy} className="h-4 w-4" />
                  <span className="text-sm">{copiedId === starter.id ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Random Starter Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const randomIndex = Math.floor(Math.random() * filteredStarters.length);
              const randomStarter = filteredStarters[randomIndex];
              copyToClipboard(randomStarter.text, randomStarter.id);
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiRefreshCw} className="h-5 w-5" />
            <span>Get Random Starter</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConversationStarters;