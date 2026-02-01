'use client';

import { useState, RefObject } from 'react';
import { motion } from 'framer-motion';
import styles from './MusicPlayer.module.css';

interface MusicPlayerProps {
    audioRef: RefObject<HTMLAudioElement | null>;
}

export default function MusicPlayer({ audioRef }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(true); // Starts as playing since intro triggers it

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.volume = 0.4;
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                });
            }
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={styles.musicButton}
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
            <div className={`${styles.icon} ${isPlaying ? styles.playing : ''}`}>
                {isPlaying ? (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                )}
            </div>

            {isPlaying && (
                <div className={styles.waves}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </motion.button>
    );
}
