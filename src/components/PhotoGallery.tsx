'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './PhotoGallery.module.css';

// Pride and Prejudice themed photos
const photos = [
    { id: 1, src: '/photos/ballroom.png', caption: 'Where elegant dances and stolen glances begin' },
    { id: 2, src: '/photos/garden.png', caption: 'A path through roses, like your journey through life' },
    { id: 3, src: '/photos/library.png', caption: 'For a mind as sharp and curious as yours' },
    { id: 4, src: '/photos/photo1.jpg', caption: 'A beautiful moment' },
    { id: 5, src: '/photos/photo2.jpg', caption: 'Your radiant smile' },
    { id: 6, src: '/photos/photo3.jpg', caption: 'Simply stunning' },
    { id: 7, src: '/photos/photo4.jpg', caption: 'Grace personified' },
    { id: 8, src: '/photos/photo5.jpg', caption: 'Utterly enchanting' },
];

export default function PhotoGallery() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

    const handleImageError = (id: number) => {
        setImageErrors(prev => new Set(prev).add(id));
    };

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>A World of Beauty</h2>
                    <div className={styles.ornament}>❦</div>
                    <p className={styles.subtitle}>
                        Scenes that remind us of your elegance and grace
                    </p>
                </motion.div>

                <div className={styles.gallery}>
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            className={styles.photoWrapper}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.1 + index * 0.1,
                                ease: 'easeOut'
                            }}
                            onClick={() => !imageErrors.has(photo.id) && setSelectedPhoto(photo)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className={styles.photoFrame}>
                                <div className={styles.photo}>
                                    {!imageErrors.has(photo.id) ? (
                                        <Image
                                            src={photo.src}
                                            alt={photo.caption}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            onError={() => handleImageError(photo.id)}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className={styles.placeholder}>
                                            <span className={styles.placeholderIcon}>📷</span>
                                            <span className={styles.placeholderText}>Add Photo {photo.id}</span>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.photoOverlay}>
                                    <p className={styles.photoCaption}>{photo.caption}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setSelectedPhoto(null)}
                            >
                                ×
                            </button>
                            <div className={styles.lightboxImage}>
                                <Image
                                    src={selectedPhoto.src}
                                    alt={selectedPhoto.caption}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    sizes="90vw"
                                />
                            </div>
                            <p className={styles.lightboxCaption}>{selectedPhoto.caption}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
