'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import CinematicSection from '@/components/CinematicSection';
import QuoteSection from '@/components/QuoteSection';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingHearts from '@/components/FloatingHearts';
import ScrollProgress from '@/components/ScrollProgress';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    // Start music
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => { });
    }

    // Start transition
    setIsTransitioning(true);

    // After transition, hide intro
    setTimeout(() => {
      setShowIntro(false);
    }, 2000);
  };

  return (
    <>
      {/* Hidden audio element for music */}
      <audio
        ref={audioRef}
        src="/music/Pride & Prejudice (Soundtrack Medley)  Dario Marianelli - Tim S. Lucas.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              overflow: 'hidden',
            }}
          >
            {/* Transition Effect - Curtains */}
            <AnimatePresence>
              {isTransitioning && (
                <>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '50%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #722F37 0%, #4a1f24 100%)',
                      zIndex: 2,
                    }}
                  />
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '50%',
                      height: '100%',
                      background: 'linear-gradient(270deg, #722F37 0%, #4a1f24 100%)',
                      zIndex: 2,
                    }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* Intro Content */}
            {!isTransitioning && (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    color: '#D4AF37',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    marginBottom: '2rem',
                  }}
                >
                  A Romantic Tribute
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    color: '#D4AF37',
                  }}
                >
                  ❦
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  style={{
                    color: '#FFFEF7',
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: 'clamp(3rem, 10vw, 5rem)',
                    marginTop: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  For Ankita
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  style={{
                    color: 'rgba(255, 254, 247, 0.7)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    marginTop: '0.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  Inspired by Pride & Prejudice
                </motion.p>

                {/* Elegant Start Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  onClick={handleStart}
                  style={{
                    marginTop: '3rem',
                    padding: '1rem 3rem',
                    background: 'transparent',
                    border: '1px solid #D4AF37',
                    color: '#D4AF37',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                  }}
                  whileHover={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #b8962e 100%)',
                    color: '#000',
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Begin the Journey
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                  style={{
                    color: 'rgba(255, 254, 247, 0.5)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.75rem',
                    marginTop: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span>🎵</span> Best experienced with sound
                </motion.p>
              </>
            )}

            {/* Transition text */}
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: '#D4AF37',
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: 'clamp(2rem, 6vw, 3rem)',
                  zIndex: 1,
                }}
              >
                ❦
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <MusicPlayer audioRef={audioRef} />
          <ScrollProgress />
          <FloatingHearts />
          <FilmGrain />
        </>
      )}

      <main style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease' }}>
        <HeroSection />

        {/* Section 1: Ballroom - Screenshot 1 */}
        <CinematicSection
          id="section-1"
          backgroundImage="/photos/ballroom.png"
          ankitaMedia={{
            type: 'image',
            src: '/photos/Screenshot 2026-02-01 135103.png'
          }}
          title="A Spirit of Grace"
          subtitle="Like Elizabeth Bennet entering the Netherfield Ball, you carry yourself with an elegance that captivates every room you enter."
          quote="There is a stubbornness about me that never can bear to be frightened at the will of others."
          quoteAuthor="Elizabeth Bennet"
          overlayPosition="left"
          theme="dark"
        />

        <QuoteSection
          quote="You have bewitched me, body and soul."
          author="Mr. Darcy"
        />

        {/* Section 2: Garden - WhatsApp Image 1 (Portrait) */}
        <CinematicSection
          id="section-2"
          backgroundImage="/photos/garden_enhanced.png"
          ankitaMedia={{
            type: 'image',
            src: '/photos/WhatsApp Image 2026-02-01 at 11.22.16 AM.jpeg'
          }}
          title="Beauty in Bloom"
          subtitle="Like the roses in an English garden, your beauty is timeless and natural. Your radiance lights up every space you enter."
          quote="I declare after all there is no enjoyment like reading!"
          quoteAuthor="Pride and Prejudice"
          overlayPosition="right"
          theme="light"
        />

        <QuoteSection
          quote="I was in the middle before I knew that I had begun."
          author="Mr. Darcy"
          variant="light"
        />

        {/* Section 3: Library - Screenshot 2 */}
        <CinematicSection
          id="section-3"
          backgroundImage="/photos/library.png"
          ankitaMedia={{
            type: 'image',
            src: '/photos/Screenshot 2026-02-01 135122.png'
          }}
          title="A Brilliant Mind"
          subtitle="You possess something truly precious — a heart full of compassion and a mind as sharp as any Austen heroine."
          quote="My good opinion once lost, is lost forever."
          quoteAuthor="Mr. Darcy"
          overlayPosition="left"
          theme="dark"
        />

        <QuoteSection
          quote="I love you. Most ardently."
          author="Mr. Darcy"
        />

        {/* Section 4: Pemberley - WhatsApp Image 2 (Portrait) */}
        <CinematicSection
          id="section-4"
          backgroundImage="/photos/pemberley.png"
          ankitaMedia={{
            type: 'image',
            src: '/photos/WhatsApp Image 2026-02-01 at 11.22.1611AM.jpeg'
          }}
          title="Your Own Pemberley"
          subtitle="No grand mansion could compare to the empire you're building — your dreams, your ambitions, your future."
          quote="What are men to rocks and mountains?"
          quoteAuthor="Elizabeth Bennet"
          overlayPosition="right"
          theme="light"
        />

        <QuoteSection
          quote="You must allow me to tell you how ardently I admire you."
          author="Mr. Darcy"
          variant="light"
        />

        {/* Section 5: Screenshot 3 */}
        <CinematicSection
          id="section-5"
          backgroundImage="/photos/ballroom.png"
          ankitaMedia={{
            type: 'image',
            src: '/photos/Screenshot 2026-02-01 135721.png'
          }}
          title="Enchanting Presence"
          subtitle="Every glance, every smile — utterly captivating. You are the kind of person people remember forever."
          quote="You are too generous to trifle with me."
          quoteAuthor="Elizabeth Bennet"
          overlayPosition="left"
          theme="dark"
        />

        <QuoteSection
          quote="My affections and wishes are unchanged."
          author="Mr. Darcy"
        />

        {/* Section 6: Screenshot 4 */}
        <CinematicSection
          id="section-6"
          backgroundImage="/photos/garden_enhanced.png"
          ankitaMedia={{
            type: 'image',
            src: '/photos/Screenshot 2026-02-01 135736.png'
          }}
          title="Radiant Soul"
          subtitle="Your spirit shines brighter than any star. A warmth that touches everyone fortunate enough to know you."
          quote="I am happier even than Jane; she only smiles, I laugh."
          quoteAuthor="Elizabeth Bennet"
          overlayPosition="right"
          theme="light"
        />

        <QuoteSection
          quote="You are the finest, loveliest, most wonderful person I have ever met."
          author="Mr. Darcy"
          variant="light"
        />

        {/* Section 7: Lake - WhatsApp Video (Portrait) */}
        <CinematicSection
          id="section-7"
          backgroundImage="/photos/lake.png"
          ankitaMedia={{
            type: 'video',
            src: '/photos/WhatsApp Video 2026-02-01 at 11.22.17 AM.mp4'
          }}
          title="Precious Moments"
          subtitle="A glimpse of you in motion — laughter, grace, and pure joy captured forever."
          overlayPosition="left"
          theme="dark"
        />

        <QuoteSection
          quote="For what do we live, but to make sport for our neighbors, and laugh at them in our turn?"
          author="Mr. Bennet"
        />

        {/* Section 8: Final Video */}
        <CinematicSection
          id="section-8"
          backgroundImage="/photos/pemberley.png"
          ankitaMedia={{
            type: 'video',
            src: '/photos/Untitled video - Made with Clipchamp (2).mp4'
          }}
          title="Captured Forever"
          subtitle="Every moment with you is a treasure. Your laughter, your smile, your spirit — eternally enchanting."
          overlayPosition="center"
          theme="dark"
          videoLandscape={true}
        />

        <QuoteSection
          quote="In vain I have struggled. It will not do. My feelings will not be repressed."
          author="Mr. Darcy"
        />

        <Footer />
      </main>
    </>
  );
}
