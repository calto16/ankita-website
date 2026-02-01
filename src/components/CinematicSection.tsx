'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './CinematicSection.module.css';

interface CinematicSectionProps {
    id: string;
    backgroundImage: string;
    ankitaMedia?: {
        type: 'image' | 'video';
        src: string;
    };
    title: string;
    subtitle?: string;
    quote?: string;
    quoteAuthor?: string;
    overlayPosition?: 'left' | 'right' | 'center';
    theme?: 'dark' | 'light';
    videoLandscape?: boolean;
    photoLandscape?: boolean;
}

export default function CinematicSection({
    id,
    backgroundImage,
    ankitaMedia,
    title,
    subtitle,
    quote,
    quoteAuthor,
    overlayPosition = 'center',
    theme = 'dark',
    videoLandscape = false,
    photoLandscape = false,
}: CinematicSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    const sectionClasses = [
        styles.section,
        styles[theme],
        styles[overlayPosition],
        videoLandscape ? styles.landscape : '',
        photoLandscape ? styles.landscapePhoto : ''
    ].filter(Boolean).join(' ');

    return (
        <section ref={ref} id={id} className={sectionClasses}>
            {/* P&P Background with Parallax & Scale */}
            <motion.div className={styles.background} style={{ y, scale }}>
                <Image
                    src={backgroundImage}
                    alt="Pride and Prejudice themed background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={95}
                />
                <div className={styles.backgroundOverlay} />
            </motion.div>

            <motion.div className={styles.content} style={{ opacity }}>
                {/* Ankita's Photo/Video with Themed Frame */}
                {ankitaMedia && (
                    <motion.div
                        className={styles.mediaContainer}
                        initial={{ opacity: 0, scale: 0.85, y: 60 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <div className={styles.mediaFrame}>
                            <div className={styles.frameOrnament}>❦</div>
                            {ankitaMedia.type === 'video' ? (
                                <video
                                    src={ankitaMedia.src}
                                    className={styles.media}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <Image
                                    src={ankitaMedia.src}
                                    alt="Ankita"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={styles.media}
                                    quality={90}
                                />
                            )}
                            <div className={styles.frameOrnamentBottom}>❦</div>
                        </div>
                    </motion.div>
                )}

                {/* Text Content */}
                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {title}
                    </motion.h2>

                    {subtitle && (
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        className={styles.ornament}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        ❦
                    </motion.div>

                    {quote && (
                        <motion.blockquote
                            className={styles.quote}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            &ldquo;{quote}&rdquo;
                            {quoteAuthor && (
                                <cite className={styles.quoteAuthor}>— {quoteAuthor}</cite>
                            )}
                        </motion.blockquote>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
}
