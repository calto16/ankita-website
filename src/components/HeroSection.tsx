'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className={styles.hero}>
            <motion.div
                className={styles.background}
                style={{ y, scale }}
            />

            <div className={styles.overlay} />

            <motion.div
                className={styles.content}
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className={styles.preTitle}
                >
                    A Pride and Prejudice Tribute
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 2.4 }}
                    className={styles.title}
                >
                    For the Extraordinary
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 2.8 }}
                    className={styles.name}
                >
                    Ankita
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3.2 }}
                    className={styles.ornament}
                >
                    ❦
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.5 }}
                    className={styles.quote}
                >
                    &ldquo;She is tolerable, but not handsome enough to tempt me&rdquo;
                    <span className={styles.quoteNote}>— The most wrong statement ever made</span>
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                    className={styles.scrollIndicator}
                >
                    <span>Discover more</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={styles.arrow}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
