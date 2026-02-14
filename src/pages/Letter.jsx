import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Letter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);
  const letterRef = useRef(null);

  // Track mouse position for flashlight effect
  useEffect(() => {
    if (!isOpened) return;

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpened]);

  // Touch support for mobile
  useEffect(() => {
    if (!isOpened) return;

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setCursorPosition({ x: touch.clientX, y: touch.clientY });
      document.documentElement.style.setProperty('--cursor-x', `${touch.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${touch.clientY}px`);
    };

    window.addEventListener('touchmove', handleTouchMove);
    return () => window.removeEventListener('touchmove', handleTouchMove);
  }, [isOpened]);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio playback prevented:', error);
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap');
        
        .handwriting {
          font-family: 'Dancing Script', cursive;
        }
        
        .handwriting-alt {
          font-family: 'Caveat', cursive;
        }
        
        /* Flashlight overlay effect */
        .flashlight-overlay {
          position: fixed;
          inset: 0;
          background: radial-gradient(
            circle 150px at var(--cursor-x, 50%) var(--cursor-y, 50%),
            transparent 0%,
            transparent 60px,
            rgba(0, 0, 0, 0.85) 120px,
            rgba(0, 0, 0, 0.98) 200px
          );
          pointer-events: none;
          z-index: 50;
          transition: opacity 0.3s ease;
        }
        
        /* Mobile: larger flashlight */
        @media (max-width: 768px) {
          .flashlight-overlay {
            background: radial-gradient(
              circle 200px at var(--cursor-x, 50%) var(--cursor-y, 50%),
              transparent 0%,
              transparent 80px,
              rgba(0, 0, 0, 0.85) 150px,
              rgba(0, 0, 0, 0.98) 250px
            );
          }
        }
        
        /* Paper texture */
        .paper-texture {
          background-color: #FFF8DC;
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(210, 180, 140, 0.08) 2px,
              rgba(210, 180, 140, 0.08) 4px
            );
        }
      `}</style>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/assets/audio/stream.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          /* Stage 1: The Envelope */
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-pink-900 to-black flex items-center justify-center"
          >
            <div className="text-center">
              {/* Envelope */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative cursor-pointer"
                onClick={handleOpenEnvelope}
              >
                <svg
                  width="300"
                  height="200"
                  viewBox="0 0 300 200"
                  className="drop-shadow-2xl"
                >
                  {/* Envelope body */}
                  <rect x="50" y="50" width="200" height="140" fill="#F5E6D3" stroke="#D4A373" strokeWidth="2" />
                  
                  {/* Envelope flap (closed) */}
                  <motion.path
                    d="M 50 50 L 150 120 L 250 50 Z"
                    fill="#E8D4B8"
                    stroke="#D4A373"
                    strokeWidth="2"
                    initial={{ rotateX: 0 }}
                    whileHover={{ rotateX: -20 }}
                    style={{ transformOrigin: "center top" }}
                  />
                  
                  {/* Seal */}
                  <motion.circle
                    cx="150"
                    cy="50"
                    r="20"
                    fill="#DC143C"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                  />
                  
                  {/* Heart on seal */}
                  <text x="150" y="58" textAnchor="middle" fill="white" fontSize="20">💕</text>
                </svg>

                {/* Hint text */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-8"
                >
                  <p className="text-white text-xl handwriting-alt mb-2">
                    Click to open 💌
                  </p>
                  <p className="text-pink-300 text-sm">
                    (Make sure your sound is on)
                  </p>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-20 left-20 text-4xl opacity-30 animate-pulse">✨</div>
              <div className="absolute bottom-32 right-32 text-5xl opacity-20 animate-pulse">💖</div>
              <div className="absolute top-40 right-40 text-3xl opacity-25 animate-pulse">💕</div>
            </div>
          </motion.div>
        ) : (
          /* Stage 2: The Letter with Flashlight Effect */
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black"
          >
            {/* The Letter Content */}
            <div
              ref={letterRef}
              className="absolute inset-0 overflow-y-auto scrollbar-hide"
            >
              <div className="min-h-screen flex items-center justify-center p-8">
                <motion.div
                  initial={{ scale: 0.8, y: 100 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="max-w-3xl w-full bg-[#FFF8DC] rounded-lg shadow-2xl p-12 md:p-16 paper-texture relative"
                >
                  {/* Letter Header */}
                  <div className="text-center mb-12 pb-8 border-b-2 border-amber-300">
                    <p className="text-sm text-gray-600 mb-2">February 15, 2026</p>
                    <h1 className="text-4xl md:text-5xl handwriting text-romantic-hot">
                      To My Forever Gugu
                    </h1>
                  </div>

                  {/* Letter Body */}
                  <div className="space-y-6 handwriting text-2xl md:text-3xl text-gray-800 leading-relaxed">
                    <p className="text-3xl md:text-4xl text-romantic-hot mb-8">
                      My Gugu,
                    </p>

                    <p>
                      As I write these words in the darkness, I'm reminded of how you 
                      brought light into my life. Six years ago, I was searching for 
                      something though I didn't know what. Then I found you. But mujhe uska liya anmol and ankita ko jhelna pada vo alag baat hai.
                    </p>

                    <p>
                      You are the flashlight that guides me through the darkest nights. 
                      Every moment with you illuminates my world in ways I never imagined possible.
                    </p>

                    <p className="text-center italic text-romantic-pink my-8">
                      "In your light, I learned how to love. In your beauty, how to make poems."
                    </p>

                    <p>
                      Do you remember our first date? The way we were fighting for chicken leg piece, losing 
                      track of time? Every morning after cycling I used to miss us moemnt. Let us not speak about you inability to eat softy 
                      Maine tumhe softy khana sikhaya haiiiiiii bossssss 🙂‍↕️.
                    </p>

                    <p>
                      I love the way you laungh on the most lamest joke. The way you do some random step (sign of ADHD btw) 
                      while cooking. How you can tell when something's wrong before I say a word. 
                      The way you believe in me even when I don't believe in myself.
                    </p>

                    <p className="text-3xl text-center my-10 text-romantic-hot">
                      You are my today and all of my tomorrows.
                    </p>

                    <p>
                      I don't know what future hold but agar tum shama ho so mai parwana... I dont care kaha land hoga 
                      But I'll always devote myslef to you... No more Hinfu ab me GUGU 🥺. You taught me lot of things
                      starting from "Gravy" to "How to be polite".
                    </p>

                    <p>
                      As we stand here at our sixth anniversary, I want to say we are the best... 
                      We are standing on the businesss... I know ye koi competetion nahi hai but agar rahi so we are winning 🥳. 
                      Batane dena tumahara dosto koo 😡.
                    </p>

                    <p>
                      Thank you for being there for me. Nahi pata life meri mujhe kaha se kaha uthake
                      fheki par you were still there for me no matter the condition I was in... If you ever
                      had 100 rs and I was hungry you always made sure you'll feed me first 🥺.
                    </p>

                    <p className="text-center text-4xl my-10">
                      Here's to forever, my love.
                    </p>

                    <div className="mt-16 pt-8 border-t-2 border-amber-300 text-center">
                      <p className="text-3xl md:text-4xl text-romantic-hot mb-4">
                        Forever yours,
                      </p>
                      <p className="text-4xl md:text-5xl text-gray-800">
                        Koko for my Gugu
                      </p>
                      <p className="text-xl text-gray-600 mt-4">
                        ❤️ With all my heart, today and always ❤️
                      </p>
                    </div>

                    {/* P.S. */}
                    <div className="mt-12 p-6 bg-pink-50 rounded-lg border-2 border-pink-200">
                      <p className="text-2xl text-romantic-hot mb-2">P.S.</p>
                      <p className="text-xl">
                        I hid this letter in darkness because some things are meant to be 
                        discovered slowly, cherished deeply. Just like how I discover new 
                        reasons to love you every single day. Thank you for being my light. ✨
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Flashlight Overlay - The darkness with movable light */}
            <div className="flashlight-overlay" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Letter;