
import React from 'react';

const LevelSelector = ({ game, onSelectLevel, onBack }) => {
    return (
        <div className="level-selector">
            <button className="btn btn-accent" onClick={onBack}>⬅ Back</button>

            <div style={{ marginTop: '2rem' }}>
                <h1 className="drifting">{game.icon} {game.title}</h1>
                <h2 style={{ color: 'var(--color-dark)', opacity: 0.8 }}>How brave is your spirit today?</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '3rem auto' }}>
                    <button
                        className="btn"
                        style={{ borderBottom: '6px solid var(--v-green)', background: 'var(--v-lime)' }}
                        onClick={() => onSelectLevel('easy')}
                    >
                        Gentle Breeze (Easy) 🌸
                    </button>
                    <button
                        className="btn"
                        style={{ borderBottom: '6px solid var(--v-orange)', background: 'var(--v-yellow)', color: 'var(--color-dark)' }}
                        onClick={() => onSelectLevel('medium')}
                    >
                        Sparkling Stream (Medium) ✨
                    </button>
                    <button
                        className="btn"
                        style={{ borderBottom: '6px solid var(--v-red)', background: 'var(--v-pink)' }}
                        onClick={() => onSelectLevel('hard')}
                    >
                        Enchanted Peak (Hard) 🏔️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LevelSelector;
