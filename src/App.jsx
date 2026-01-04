
import React, { useState, useEffect } from 'react';
import { content } from './data/content';
import Home from './components/Home';
import GameSelector from './components/GameSelector';
import LevelSelector from './components/LevelSelector';
import QuizGame from './components/QuizGame';

import SparkleEffect from './components/SparkleEffect';

function App() {
  const [view, setView] = useState('home'); // home, games, levels, playing, result
  const [theme, setTheme] = useState('light'); // light, dark
  const [totalScore, setTotalScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [sessionScore, setSessionScore] = useState(0);

  // Load score and theme from local storage
  useEffect(() => {
    const savedScore = localStorage.getItem('kidAppScore');
    if (savedScore) setTotalScore(parseInt(savedScore, 10));

    const savedTheme = localStorage.getItem('kidAppTheme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Update body attribute when theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('kidAppTheme', newTheme);
  };

  const addScore = (points) => {
    const newScore = totalScore + points;
    setTotalScore(newScore);
    localStorage.setItem('kidAppScore', newScore.toString());
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(content[catId]);
    setView('games');
  };

  const handleSelectGame = (game) => {
    setSelectedGame(game);
    setView('levels');
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    setView('playing');
  };

  const handleGameFinish = (score) => {
    setSessionScore(score);
    addScore(score);
    setView('result');
  };

  const goHome = () => {
    setView('home');
    setSelectedCategory(null);
    setSelectedGame(null);
    setSelectedLevel(null);
  };

  return (
    <div className="app-container">
      <SparkleEffect />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="floating"
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 2000,
          background: 'var(--card-bg)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '1.8rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-card)',
          backdropFilter: 'blur(5px)'
        }}
        title={theme === 'light' ? 'Switch to Moonlit Mode' : 'Switch to Sunlit Mode'}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Background Decorations */}
      <div className="magic-background">
        <div className="cloud drifting" style={{ top: '10%', left: '5%', width: '300px', height: '150px' }}></div>
        <div className="cloud drifting" style={{ top: '60%', right: '5%', width: '400px', height: '200px', animationDelay: '-2s' }}></div>
        <div className="cloud drifting" style={{ top: '30%', left: '40%', width: '250px', height: '120px', animationDelay: '-4s' }}></div>

        <div className="lantern floating" style={{ top: '20%', left: '15%' }}></div>
        <div className="lantern floating" style={{ top: '45%', right: '10%', animationDelay: '-1s' }}></div>
        <div className="lantern floating" style={{ bottom: '15%', left: '25%', animationDelay: '-3s' }}></div>
        <div className="lantern floating" style={{ top: '10%', right: '20%', animationDelay: '-5s' }}></div>
      </div>

      <div className="score-badge">
        <span>✨ Magic Points:</span>
        <span style={{ color: 'var(--v-pink)', fontWeight: 'bold' }}>{totalScore}</span>
      </div>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {view === 'home' && (
          <Home categories={content} onSelectCategory={handleSelectCategory} />
        )}

        {view === 'games' && selectedCategory && (
          <GameSelector
            category={selectedCategory}
            onSelectGame={handleSelectGame}
            onBack={goHome}
          />
        )}

        {view === 'levels' && selectedGame && (
          <LevelSelector
            game={selectedGame}
            onSelectLevel={handleSelectLevel}
            onBack={() => setView('games')}
          />
        )}

        {view === 'playing' && selectedGame && selectedLevel && (
          <QuizGame
            questions={selectedGame.levels[selectedLevel]}
            title={selectedGame.title}
            category={selectedCategory}
            onFinish={handleGameFinish}
            onQuit={() => setView('levels')}
          />
        )}

        {view === 'result' && (
          <div className="card floating" style={{ maxWidth: '500px', margin: '4rem auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '5rem', margin: '0' }}>🦄</h1>
            <h2 style={{ color: 'var(--color-primary)' }}>Magical Victory!</h2>
            <p style={{ fontSize: '1.8rem' }}>You earned: <strong>{sessionScore}</strong> sparkle points</p>
            <p style={{ color: 'var(--color-dark)', opacity: 0.8 }}>Total Magic Points: {totalScore}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn btn-primary" onClick={() => setView('levels')}>Play Again ✨</button>
              <button className="btn btn-accent" onClick={goHome}>Home 🏰</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
