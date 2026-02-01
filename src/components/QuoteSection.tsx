'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from './QuoteSection.module.css';

interface QuoteSectionProps {
    quote: string;
    author: string;
    variant?: 'dark' | 'light';
}

export default function QuoteSection({ quote, author, variant = 'dark' }: QuoteSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

    return (
        <section ref={ref} className={`${styles.section} ${styles[variant]}`}>
            <motion.div className={styles.backgroundText} style={{ y }}>
                Pride & Prejudice
            </motion.div>

            <div className={styles.container}>
                <motion.div
                    className={styles.quoteWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.span
                        className={styles.quoteMarkLeft}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        &ldquo;
                    </motion.span>

                    <motion.blockquote
                        className={styles.quote}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {quote}
                    </motion.blockquote>

                    <motion.span
                        className={styles.quoteMarkRight}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        &rdquo;
                    </motion.span>
                </motion.div>

                <motion.div
                    className={styles.ornament}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    ❦
                </motion.div>

                <motion.cite
                    className={styles.author}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    — {author}
                </motion.cite>
            </div>
        </section>
    );
}
