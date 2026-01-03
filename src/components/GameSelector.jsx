
import React from 'react';

const GameSelector = ({ category, onSelectGame, onBack }) => {
    return (
        <div className="game-selector">
            <button className="btn btn-accent" onClick={onBack} style={{ marginBottom: '2rem' }}>⬅ Back</button>

            <h1 className="rainbow-text" style={{ fontSize: '3.5rem' }}>{category.label}</h1>
            <h2 style={{ color: 'var(--color-dark)', opacity: 0.9, fontWeight: '700' }}>Which magical quest will you go on today?</h2>

            <div className="grid">
                {category.games.map((game) => (
                    <div
                        key={game.id}
                        className="card"
                        onClick={() => onSelectGame(game)}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{game.icon}</div>
                        <h3>{game.title}</h3>
                        <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Play</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameSelector;
