'use client';

import styles from './FilmGrain.module.css';

export default function FilmGrain() {
    return (
        <>
            {/* Film Grain Overlay */}
            <div className={styles.grain} />

            {/* Cinematic Letterboxing */}
            <div className={styles.letterboxTop} />
            <div className={styles.letterboxBottom} />
        </>
    );
}
