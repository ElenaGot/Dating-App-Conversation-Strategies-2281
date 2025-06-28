import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiPlay, FiRefreshCw, FiCheck, FiX, FiAward, FiTrendingUp } = FiIcons;

const Practice = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completedScenarios, setCompletedScenarios] = useState(0);

  const scenarios = [
    {
      id: 1,
      situation: "Coffee Shop",
      context: "You're in line at a coffee shop and notice someone reading a book you love.",
      options: [
        {
          text: "Excuse me, is that [book title]? I love that book!",
          feedback: "Great opener! Shows genuine interest and creates an immediate connection.",
          score: 10,
          correct: true
        },
        {
          text: "Hey, you're really pretty. Can I buy you a coffee?",
          feedback: "Too direct and focused only on appearance. Try connecting over shared interests first.",
          score: 3,
          correct: false
        },
        {
          text: "Are you single?",
          feedback: "Way too forward for a first interaction. Start with casual conversation.",
          score: 1,
          correct: false
        },
        {
          text: "Just smile and say nothing",
          feedback: "A smile is nice, but you're missing an opportunity to start a conversation.",
          score: 5,
          correct: false
        }
      ]
    },
    {
      id: 2,
      situation: "Party",
      context: "You're at a friend's party and see someone standing alone looking at their phone.",
      options: [
        {
          text: "Hey, are you having fun? This party is pretty cool!",
          feedback: "Good approach! Friendly and opens up conversation about the current situation.",
          score: 9,
          correct: true
        },
        {
          text: "You look bored. Want to dance?",
          feedback: "Assumes their mood and jumps too quickly to physical activity. Try conversation first.",
          score: 4,
          correct: false
        },
        {
          text: "Nice phone! What kind is it?",
          feedback: "Not the best opener. Focus on more interesting topics that reveal personality.",
          score: 3,
          correct: false
        },
        {
          text: "Do you know where the bathroom is?",
          feedback: "Practical but doesn't lead to meaningful conversation. Try something more engaging.",
          score: 2,
          correct: false
        }
      ]
    },
    {
      id: 3,
      situation: "Gym",
      context: "You often see the same person at the gym and want to start a conversation.",
      options: [
        {
          text: "I've seen you here a few times. What's your favorite workout?",
          feedback: "Perfect! Acknowledges familiarity and asks about their interests in a relevant context.",
          score: 10,
          correct: true
        },
        {
          text: "You're really strong! Are you single?",
          feedback: "Compliment is nice but jumping to relationship status is too fast.",
          score: 4,
          correct: false
        },
        {
          text: "Want to work out together?",
          feedback: "Might be too forward for a first conversation. Build rapport first.",
          score: 6,
          correct: false
        },
        {
          text: "This gym is so crowded, right?",
          feedback: "Safe but not very engaging. Try to find something more personal to discuss.",
          score: 5,
          correct: false
        }
      ]
    },
    {
      id: 4,
      situation: "Bookstore",
      context: "You're browsing books and someone asks for your recommendation in your favorite genre.",
      options: [
        {
          text: "Oh, I love this genre! What kind of themes do you usually enjoy?",
          feedback: "Excellent! Shows enthusiasm and asks about their preferences to personalize your recommendation.",
          score: 10,
          correct: true
        },
        {
          text: "You should read this one, it's amazing!",
          feedback: "Good intention but doesn't consider their tastes. Ask about their preferences first.",
          score: 6,
          correct: false
        },
        {
          text: "Are you new to this genre?",
          feedback: "Could come across as condescending. Focus on their interests instead.",
          score: 4,
          correct: false
        },
        {
          text: "I don't really read much.",
          feedback: "Missed opportunity! They approached you about books, so engage with the topic.",
          score: 2,
          correct: false
        }
      ]
    },
    {
      id: 5,
      situation: "Dog Park",
      context: "Your dogs start playing together at the dog park.",
      options: [
        {
          text: "They seem to get along great! How old is your dog?",
          feedback: "Perfect natural opener! Uses the situation and shows interest in something important to them.",
          score: 10,
          correct: true
        },
        {
          text: "Your dog is so cute! Just like you.",
          feedback: "The compliment about the dog is good, but the personal comment might be too much too soon.",
          score: 5,
          correct: false
        },
        {
          text: "Is your dog friendly with people?",
          feedback: "Practical question but doesn't lead to personal conversation as easily.",
          score: 6,
          correct: false
        },
        {
          text: "Do you come here often?",
          feedback: "Classic line but a bit cliché. The dog interaction gives you better conversation starters.",
          score: 4,
          correct: false
        }
      ]
    }
  ];

  const handleOptionSelect = (option, index) => {
    setSelectedOption(index);
    setShowResult(true);
    if (option.correct) {
      setScore(score + option.score);
    }
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowResult(false);
      setCompletedScenarios(completedScenarios + 1);
    }
  };

  const resetPractice = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setCompletedScenarios(0);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return 'Excellent! You\'re a natural flirt!';
    if (score >= 60) return 'Good job! Keep practicing to improve.';
    if (score >= 40) return 'Not bad! Focus on being more genuine and interested.';
    return 'Keep practicing! Remember to be authentic and respectful.';
  };

  const currentScenarioData = scenarios[currentScenario];
  const isLastScenario = currentScenario === scenarios.length - 1;
  const totalPossibleScore = scenarios.reduce((sum, scenario) => {
    return sum + Math.max(...scenario.options.map(option => option.score));
  }, 0);
  const scorePercentage = Math.round((score / totalPossibleScore) * 100);

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
            Practice Mode
          </h1>
          <p className="text-xl text-gray-600">
            Practice your flirting skills in realistic scenarios
          </p>
        </motion.div>

        {/* Progress and Score */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <SafeIcon icon={FiTarget} className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-semibold">
                Scenario {currentScenario + 1} of {scenarios.length}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <SafeIcon icon={FiAward} className="h-6 w-6 text-yellow-500" />
              <span className={`text-lg font-bold ${getScoreColor(scorePercentage)}`}>
                Score: {score}/{totalPossibleScore}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentScenario + (showResult ? 1 : 0)) / scenarios.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Scenario */}
        <motion.div
          key={currentScenario}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8"
        >
          <h2 className="text-2xl font-bold mb-2">{currentScenarioData.situation}</h2>
          <p className="text-lg text-blue-100">{currentScenarioData.context}</p>
        </motion.div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {currentScenarioData.options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => !showResult && handleOptionSelect(option, index)}
              disabled={showResult}
              className={`w-full text-left p-6 rounded-xl transition-all ${
                showResult
                  ? selectedOption === index
                    ? option.correct
                      ? 'bg-green-100 border-2 border-green-500 text-green-800'
                      : 'bg-red-100 border-2 border-red-500 text-red-800'
                    : option.correct && selectedOption !== index
                    ? 'bg-green-50 border border-green-300 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                  : 'bg-white hover:bg-purple-50 hover:border-purple-300 border border-gray-200 text-gray-800'
              } shadow-md hover:shadow-lg`}
            >
              <div className="flex items-center space-x-3">
                {showResult && (
                  <SafeIcon 
                    icon={
                      selectedOption === index
                        ? option.correct ? FiCheck : FiX
                        : option.correct ? FiCheck : null
                    } 
                    className={`h-5 w-5 ${
                      selectedOption === index
                        ? option.correct ? 'text-green-500' : 'text-red-500'
                        : option.correct ? 'text-green-500' : ''
                    }`}
                  />
                )}
                <span className="text-lg">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Feedback */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <h3 className="text-xl font-bold mb-3">Feedback</h3>
            <p className="text-gray-700 mb-4">
              {currentScenarioData.options[selectedOption].feedback}
            </p>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiTrendingUp} className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">
                Points earned: {currentScenarioData.options[selectedOption].score}/10
              </span>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          {showResult && !isLastScenario && (
            <button
              onClick={nextScenario}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Next Scenario</span>
              <SafeIcon icon={FiPlay} className="h-5 w-5" />
            </button>
          )}
          
          {showResult && isLastScenario && (
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                <h3 className="text-2xl font-bold mb-4">Practice Complete!</h3>
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(scorePercentage)}`}>
                  {scorePercentage}%
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  {getScoreMessage(scorePercentage)}
                </p>
                <p className="text-gray-600">
                  You scored {score} out of {totalPossibleScore} possible points.
                </p>
              </div>
              <button
                onClick={resetPractice}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all shadow-lg flex items-center space-x-2 mx-auto"
              >
                <SafeIcon icon={FiRefreshCw} className="h-5 w-5" />
                <span>Practice Again</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practice;