
import React from 'react';

const Home = ({ categories, onSelectCategory }) => {
    return (
        <div className="home-container" style={{ padding: '2rem 0' }}>
            <h1 className="rainbow-text floating" style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>Magical Fairyland 🏰</h1>
            <p style={{ fontSize: '1.4rem', marginBottom: '3rem', color: 'var(--color-dark)', opacity: 0.9, fontWeight: 'bold' }}>Welcome, little explorer! Choose your realm to begin the magic.</p>

            <div className="grid">
                {Object.entries(categories).map(([key, cat]) => {
                    const colorVar = key === 'early-learners' ? 'var(--v-pink)' :
                        key === 'primary-school' ? 'var(--v-teal)' :
                            'var(--v-purple)';
                    const darkColorVar = key === 'early-learners' ? 'var(--n-neon-pink)' :
                        key === 'primary-school' ? 'var(--n-cyan)' :
                            'var(--n-magenta-soft)';

                    return (
                        <div
                            key={key}
                            className="card"
                            style={{ borderTop: `12px solid ${colorVar}` }}
                            onClick={() => onSelectCategory(key)}
                        >
                            <h2 style={{
                                color: `var(--theme-color-${key})`,
                                fontSize: '2.5rem',
                                fontWeight: '900'
                            }} className="category-title">
                                {cat.label}
                            </h2>
                            <div style={{ fontSize: '6rem', margin: '1rem 0' }}>
                                {key === 'early-learners' ? '🦄' : key === 'primary-school' ? '🎒' : '🧪'}
                            </div>
                            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{cat.games.length} Fun Games Inside!</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
