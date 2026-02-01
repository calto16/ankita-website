'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <footer ref={ref} className={styles.footer}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className={styles.hearts}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: 'spring', damping: 10 }}
                >
                    ♥
                </motion.div>

                <h2 className={styles.title}>
                    For the Most Extraordinary Person
                </h2>

                <div className={styles.ornament}>❦</div>

                <p className={styles.message}>
                    May your story be as beautiful as any Austen novel.
                </p>

                <p className={styles.dedication}>
                    For Ankita — A Modern-Day Elizabeth Bennet
                </p>

                <div className={styles.divider} />

                <p className={styles.quote}>
                    &ldquo;My good opinion once lost, is lost forever.&rdquo;
                    <br />
                    <small>(But you&apos;ll never lose anyone&apos;s good opinion, Ankita!)</small>
                </p>

                <p className={styles.attribution}>
                    — Mr. Darcy, Pride and Prejudice
                </p>

                <motion.div
                    className={styles.finalHearts}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    ♥ ♥ ♥
                </motion.div>
            </motion.div>

            <div className={styles.copyright}>
                <p>Made with ♥ | Inspired by Pride and Prejudice</p>
            </div>
        </footer>
    );
}
