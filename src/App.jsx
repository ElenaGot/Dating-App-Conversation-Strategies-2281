import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import GetStartedPage from './pages/GetStarted';
import PickupLines from './pages/PickupLines';
import ConversationStarters from './pages/ConversationStarters';
import FlirtingTips from './pages/FlirtingTips';
import Practice from './pages/Practice';
import { questConfig } from './config/questConfig';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites(prev => {
      if (!prev.find(fav => fav.id === item.id)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route
              path="/pickup-lines"
              element={
                <PickupLines
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="/conversation-starters"
              element={
                <ConversationStarters
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route path="/tips" element={<FlirtingTips />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </div>
      </Router>
    </QuestProvider>
  );
}

export default App;