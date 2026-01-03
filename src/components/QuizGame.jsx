
import React, { useState, useEffect } from 'react';

const QuizGame = ({ questions, title, onFinish, onQuit, category }) => {
    // Shuffling logic: If we have more than 10, pick 10 random ones. 
    // This ensures variety on every game start.
    const [shuffledQuestions] = useState(() => {
        const pool = [...questions];
        // Fisher-Yates shuffle for questions
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        // Pick top 10 and shuffle their options
        return pool.slice(0, 10).map(q => {
            const shuffledOptions = [...q.options];
            for (let i = shuffledOptions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
            }
            return { ...q, options: shuffledOptions };
        });
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null); // null, true, false
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isPlayingSound, setIsPlayingSound] = useState(null); // track which sound is playing

    // Safeguard
    if (!shuffledQuestions || shuffledQuestions.length === 0) {
        return <div className="card">Magical error: No quest found! <button className="btn btn-accent" onClick={onQuit}>Go Back</button></div>;
    }

    const currentQuestion = shuffledQuestions[currentIndex];
    const progress = ((currentIndex) / shuffledQuestions.length) * 100;

    const [voices, setVoices] = useState([]);

    // Load voices on mount
    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    const playSound = (text, idx = null) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop playing anything else

            const utterance = new window.SpeechSynthesisUtterance(text);

            // Voice selection logic: Prioritize Google or Natural sounding voices
            const preferredVoice = voices.find(v =>
                (v.name.includes('Google') || v.name.includes('Natural')) && v.lang.startsWith('en')
            ) || voices.find(v => v.lang.startsWith('en')) || voices[0];

            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }

            // Clarity fine-tuning: Bit slower and clearer pitch for students
            utterance.rate = 0.85;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;

            if (idx !== null) {
                setIsPlayingSound(idx);
                utterance.onend = () => setIsPlayingSound(null);
            }

            window.speechSynthesis.speak(utterance);
        }
    };

    const handleOptionSelect = (option) => {
        if (showResult) return;

        // If it's a sound-match, clicking the button selects it.
        // We'll also play the sound to confirm.
        if (currentQuestion.type === 'sound-match') {
            playSound(option);
        }

        setSelectedOption(option);
    };

    const checkAnswer = () => {
        if (!selectedOption || showResult) return;

        const correct = selectedOption === currentQuestion.answer;
        setIsCorrect(correct);
        setShowResult(true);

        if (correct) {
            setScore(s => s + 10);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 < shuffledQuestions.length) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowResult(false);
            setIsPlayingSound(null);
        } else {
            onFinish(score);
        }
    };

    return (
        <div className="quiz-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', position: 'relative' }}>
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
                <button className="btn btn-accent" style={{ padding: '0.6rem 1.2rem', fontSize: '1rem' }} onClick={onQuit}>Exit 🏰</button>
                <div style={{ fontWeight: 'bold', color: 'var(--color-dark)', background: 'rgba(255,255,255,0.5)', padding: '0.5rem 1rem', borderRadius: '20px' }}>
                    Quest {currentIndex + 1} of {shuffledQuestions.length}
                </div>
                <div className="card" style={{ padding: '0.5rem 1rem', borderRadius: '15px', color: 'var(--color-dark)' }}>✨ {score}</div>
            </div>

            {/* Progress Bar */}
            <div style={{ background: 'rgba(255,255,255,0.3)', height: '14px', borderRadius: '10px', marginBottom: '2rem', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.5)' }}>
                <div style={{ background: 'var(--grad-main)', width: `${progress}%`, height: '100%', transition: 'width 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}></div>
            </div>

            <div className="card floating" style={{ padding: '3rem', minHeight: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Question Area */}
                {currentQuestion.type === 'sound-match' ? (
                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        <div className="drifting" style={{ fontSize: '8rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))' }}>{currentQuestion.image}</div>
                        <h2 className="rainbow-text" style={{ fontSize: '2.5rem' }}>Who makes this sound?</h2>
                        <p style={{ color: 'var(--color-dark)', opacity: 0.9, fontWeight: '600' }}>Listen to the options below!</p>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2.8rem', color: 'var(--theme-color-early-learners)', lineHeight: '1.2', fontWeight: '800' }}>{currentQuestion.question}</h2>
                        <button
                            className="btn btn-accent"
                            style={{ padding: '0.5rem 1rem', fontSize: '1rem', marginTop: '1rem' }}
                            onClick={() => playSound(currentQuestion.question)}
                        >
                            🔊 Hear Question
                        </button>
                    </div>
                )}

                {/* Options Grid */}
                <div className="options-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: currentQuestion.type === 'sound-match' ? 'repeat(2, 1fr)' : '1fr',
                    gap: '1.2rem',
                    width: '100%',
                    marginTop: '1rem'
                }}>
                    {currentQuestion.options.map((opt, idx) => {
                        const isSelected = selectedOption === opt;
                        let borderColor = isSelected ? 'var(--color-primary)' : 'rgba(255,255,255,0.8)';
                        let bgColor = 'rgba(255, 255, 255, 0.4)';

                        if (showResult) {
                            if (opt === currentQuestion.answer) {
                                bgColor = 'var(--v-green)';
                                borderColor = 'var(--v-green)';
                            } else if (isSelected) {
                                bgColor = 'var(--v-red)';
                                borderColor = 'var(--v-red)';
                            }
                        } else if (isSelected) {
                            bgColor = 'var(--card-bg)';
                            borderColor = 'var(--v-orange)';
                        }

                        return (
                            <button
                                key={idx}
                                className={`btn ${isSelected ? 'pulse-glow' : ''}`}
                                style={{
                                    background: bgColor,
                                    border: `4px solid ${borderColor}`,
                                    color: 'var(--color-dark)',
                                    padding: '1.5rem',
                                    fontSize: '1.4rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    minHeight: '120px',
                                    transform: isSelected && !showResult ? 'scale(1.05)' : 'none',
                                    transition: 'all 0.3s'
                                }}
                                onClick={() => handleOptionSelect(opt)}
                                disabled={showResult}
                            >
                                {currentQuestion.type === 'sound-match' ? (
                                    <>
                                        <div
                                            onClick={(e) => { e.stopPropagation(); playSound(opt, idx); }}
                                            style={{
                                                fontSize: '3rem',
                                                background: isPlayingSound === idx ? 'var(--color-primary)' : 'white',
                                                borderRadius: '50%',
                                                width: '60px',
                                                height: '60px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {isPlayingSound === idx ? '🎶' : '🔊'}
                                        </div>
                                        <span style={{ fontSize: '1rem', opacity: 0.6 }}>{isSelected ? 'Selected' : 'Click Speaker to Hear'}</span>
                                    </>
                                ) : (
                                    <span>{opt}</span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Confirm Button (Only if sound match and not answered) */}
                {!showResult && selectedOption && (
                    <button
                        className="btn btn-primary floating"
                        style={{ marginTop: '2rem', padding: '1rem 3rem' }}
                        onClick={checkAnswer}
                    >
                        Check Magic Result! ✨
                    </button>
                )}

                {/* Result Message */}
                {showResult && (
                    <div style={{ marginTop: '2rem', textAlign: 'center', animation: 'popIn 0.5s', width: '100%' }}>
                        <div className="card" style={{ background: isCorrect ? 'var(--color-secondary)' : '#FFF9F9', border: 'none' }}>
                            <h2 style={{ color: isCorrect ? '#4CAF50' : '#E57373', fontSize: '2rem', margin: '0' }}>
                                {isCorrect ? "🌟 Magical Success! 🌟" : `Not quite... It was ${currentQuestion.answer} 🍬`}
                            </h2>
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ marginTop: '1.5rem', padding: '1.2rem 4rem' }}
                            onClick={() => {
                                if (currentIndex < shuffledQuestions.length - 1) {
                                    handleNext();
                                } else {
                                    onFinish(score + (isCorrect ? 10 : 0));
                                }
                            }}
                        >
                            {currentIndex < shuffledQuestions.length - 1 ? "Next Magic Quest ✨" : "Claim Your Treasure! 🏆"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizGame;
