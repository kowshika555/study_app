import React, { useEffect, useState } from 'react';

const SparkleEffect = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (Math.random() > 0.8) {
                const newSparkle = {
                    id: Date.now(),
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 10 + 5,
                    color: ['#FFB7D5', '#D1C4E9', '#B8E4D3', '#FFF9C4'][Math.floor(Math.random() * 4)]
                };
                setSparkles(prev => [...prev.slice(-20), newSparkle]);
            }
        };

        const handleClick = (e) => {
            const burst = Array.from({ length: 8 }).map((_, i) => ({
                id: Date.now() + i,
                x: e.clientX,
                y: e.clientY,
                isBurst: true,
                angle: (i / 8) * Math.PI * 2,
                size: Math.random() * 15 + 10,
                color: '#FFF9C4'
            }));
            setSparkles(prev => [...prev, ...burst]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setSparkles(prev => prev.filter(s => Date.now() - s.id < 1000));
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
            {
                sparkles.map(s => (
                    <div
                        key={s.id}
                        style={{
                            position: 'absolute',
                            left: s.x,
                            top: s.y,
                            width: s.size,
                            height: s.size,
                            backgroundColor: 'var(--sparkle-color)',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px var(--sparkle-color)',
                            pointerEvents: 'none',
                            animation: 'fairy-dust 1s forwards',
                            transform: s.isBurst ? `translate(${Math.cos(s.angle) * 50}px, ${Math.sin(s.angle) * 50}px)` : 'none'
                        }}
                    />
                ))
            }
        </div >
    );
};

export default SparkleEffect;
