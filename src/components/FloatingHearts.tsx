'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingHearts.module.css';

interface Particle {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    symbol: string;
    type: string;
}

const allSymbols = ['♥', '♡', '❤', '✦', '✧', '⋆', '✿', '❀', '★', '☆'];

export default function FloatingHearts() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles: Particle[] = [];

        for (let i = 0; i < 40; i++) {
            const symbolIndex = Math.floor(Math.random() * allSymbols.length);
            const isHeart = symbolIndex < 4;
            const isSparkle = symbolIndex >= 4 && symbolIndex < 7;

            newParticles.push({
                id: i,
                left: Math.random() * 100,
                size: Math.random() * 14 + 10,
                duration: Math.random() * 12 + 8,
                delay: Math.random() * 10,
                symbol: allSymbols[symbolIndex],
                type: isHeart ? 'heart' : isSparkle ? 'sparkle' : 'star',
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className={styles.container}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={`${styles.particle} ${styles[p.type]}`}
                    style={{
                        left: `${p.left}%`,
                        fontSize: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                >
                    {p.symbol}
                </div>
            ))}
        </div>
    );
}
