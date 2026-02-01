'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './LoveLetter.module.css';

interface LoveLetterProps {
    id: string;
    title: string;
    content: string;
    variant?: 'left' | 'right';
}

export default function LoveLetter({ id, title, content, variant = 'left' }: LoveLetterProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const paragraphs = content.split('\n\n').filter(p => p.trim());

    return (
        <section id={id} ref={ref} className={`${styles.section} ${styles[variant]}`}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, x: variant === 'left' ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className={styles.paper}>
                    <div className={styles.paperEdge} />

                    <motion.div
                        className={styles.ornamentTop}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        ❦
                    </motion.div>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {title}
                    </motion.h2>

                    <div className={styles.content}>
                        {paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                            >
                                {paragraph.trim()}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        className={styles.signature}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Forever Yours
                    </motion.div>

                    <motion.div
                        className={styles.ornamentBottom}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        ❦
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
