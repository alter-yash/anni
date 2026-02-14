import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Characters start off-screen and meet very close together in the center
  const brideX = useTransform(scrollYProgress, [0, 1], ['-48vw', '-4vw']);
  const groomX = useTransform(scrollYProgress, [0, 1], ['48vw', '4vw']);
  
  // Cloud parallax
  const cloudX = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const cloud2X = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const cloud3X = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Bird movement
  const birdX = useTransform(scrollYProgress, [0, 1], ['-10%', '110%']);
  const bird2X = useTransform(scrollYProgress, [0, 1], ['110%', '-10%']);
  
  // Heart appears and grows when they're close
  const heartOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const heartScale = useTransform(scrollYProgress, [0.85, 1], [0.3, 1.5]);
  const heartY = useTransform(scrollYProgress, [0.85, 1], [20, -20]);

  // Celebration elements appear at the very end
  const celebrateOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  // Small hearts that burst outward
  const hearts = [
    { angle: 0, dist: 80 }, { angle: 45, dist: 100 }, { angle: 90, dist: 80 },
    { angle: 135, dist: 90 }, { angle: 180, dist: 80 }, { angle: 225, dist: 100 },
    { angle: 270, dist: 80 }, { angle: 315, dist: 90 }
  ];

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <style>{`
        .pixel-art {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-60px) scale(0.5); opacity: 0; }
        }
        .spark {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        .float-heart {
          animation: floatUp 1.5s ease-out infinite;
        }
      `}</style>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100">
        
        {/* Sun (top right) */}
        <div className="absolute top-10 right-10 md:top-20 md:right-20">
          <svg width="80" height="80" viewBox="0 0 80 80" className="pixel-art">
            <rect x="20" y="20" width="40" height="40" fill="#FFD700" />
            <rect x="15" y="25" width="10" height="30" fill="#FFD700" />
            <rect x="55" y="25" width="10" height="30" fill="#FFD700" />
            <rect x="25" y="15" width="30" height="10" fill="#FFD700" />
            <rect x="25" y="55" width="30" height="10" fill="#FFD700" />
            <rect x="10" y="10" width="10" height="10" fill="#FFD700" />
            <rect x="60" y="10" width="10" height="10" fill="#FFD700" />
            <rect x="10" y="60" width="10" height="10" fill="#FFD700" />
            <rect x="60" y="60" width="10" height="10" fill="#FFD700" />
          </svg>
        </div>

        {/* Clouds (pixelated) */}
        <motion.div style={{ x: cloudX }} className="absolute top-24 left-10">
          <svg width="60" height="40" viewBox="0 0 60 40" className="pixel-art opacity-90">
            <rect x="10" y="20" width="40" height="10" fill="white" />
            <rect x="5" y="15" width="50" height="15" fill="white" />
            <rect x="15" y="10" width="30" height="10" fill="white" />
          </svg>
        </motion.div>

        <motion.div style={{ x: cloud2X }} className="absolute top-40 right-16">
          <svg width="70" height="45" viewBox="0 0 70 45" className="pixel-art opacity-80">
            <rect x="15" y="25" width="40" height="10" fill="white" />
            <rect x="10" y="20" width="50" height="15" fill="white" />
            <rect x="20" y="15" width="30" height="10" fill="white" />
          </svg>
        </motion.div>

        <motion.div style={{ x: cloud3X }} className="absolute top-60 left-1/3">
          <svg width="50" height="35" viewBox="0 0 50 35" className="pixel-art opacity-85">
            <rect x="10" y="18" width="30" height="8" fill="white" />
            <rect x="5" y="12" width="40" height="12" fill="white" />
            <rect x="12" y="8" width="26" height="8" fill="white" />
          </svg>
        </motion.div>

        {/* Flying birds (pixelated) */}
        <motion.div style={{ x: birdX }} className="absolute top-32 left-0">
          <svg width="20" height="10" viewBox="0 0 20 10" className="pixel-art">
            <rect x="0" y="4" width="5" height="2" fill="#333" />
            <rect x="5" y="2" width="5" height="2" fill="#333" />
            <rect x="10" y="2" width="5" height="2" fill="#333" />
            <rect x="15" y="4" width="5" height="2" fill="#333" />
          </svg>
        </motion.div>

        <motion.div style={{ x: bird2X }} className="absolute top-48 right-0">
          <svg width="20" height="10" viewBox="0 0 20 10" className="pixel-art">
            <rect x="0" y="4" width="5" height="2" fill="#333" />
            <rect x="5" y="2" width="5" height="2" fill="#333" />
            <rect x="10" y="2" width="5" height="2" fill="#333" />
            <rect x="15" y="4" width="5" height="2" fill="#333" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-12 left-0 right-0 text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-display text-white drop-shadow-lg mb-2">
            Ek tha Raja ek this Rani ...
          </h1>
          <p className="text-lg md:text-xl font-elegant text-white/90 drop-shadow">
            Scroll to see us come together
          </p>
        </motion.div>

        {/* Grass ground (pixelated) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600 to-green-500 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0"
              style={{ left: `${i * 3.5}%` }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" className="pixel-art">
                <rect x="8" y="10" width="4" height="10" fill="#2d5016" />
                <rect x="6" y="6" width="8" height="4" fill="#2d5016" />
                <rect x="8" y="2" width="4" height="4" fill="#2d5016" />
              </svg>
            </div>
          ))}
        </div>

        {/* Character Container */}
        <div className="absolute bottom-32 left-0 right-0 h-64">
          
          {/* Celebration burst - mini floating hearts around meeting point */}
          <motion.div
            style={{ left: '50%', bottom: '60px', opacity: celebrateOpacity }}
            className="absolute bottom-0 left-1/2 z-30"
          >
            {/* Burst hearts */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x = Math.cos(angle) * 70;
              const y = Math.sin(angle) * 70;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [0, 1.2, 0.8, 1],
                    opacity: [0, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <span style={{ fontSize: i % 2 === 0 ? '18px' : '12px' }}>
                    {['❤️','💕','✨','💖','⭐','💗','🌟','💝'][i]}
                  </span>
                </motion.div>
              );
            })}

            {/* Stars / sparkles flying up */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{ left: `${(i - 2) * 20}px`, top: '-10px' }}
                animate={{
                  y: [-10, -80],
                  opacity: [1, 0],
                  scale: [1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              >
                <span style={{ fontSize: '14px' }}>✨</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Bride */}
          <motion.div
            style={{ x: brideX }}
            className="absolute bottom-0 left-1/2 z-20"
          >
            <div className="relative pixel-art">
              <svg width="120" height="180" viewBox="0 0 120 180" className="pixel-art">
                <rect x="40" y="20" width="40" height="10" fill="#FFD700" />
                <rect x="35" y="25" width="10" height="5" fill="#FFD700" />
                <rect x="75" y="25" width="10" height="5" fill="#FFD700" />
                <rect x="45" y="30" width="30" height="30" fill="#FFDBAC" />
                <rect x="40" y="30" width="5" height="30" fill="#FFA500" />
                <rect x="75" y="30" width="5" height="30" fill="#FFA500" />
                <rect x="40" y="60" width="10" height="10" fill="#FFA500" />
                <rect x="70" y="60" width="10" height="10" fill="#FFA500" />
                <rect x="50" y="45" width="5" height="5" fill="#000000" />
                <rect x="65" y="45" width="5" height="5" fill="#000000" />
                <rect x="50" y="55" width="20" height="3" fill="#FFFFFF" />
                <rect x="45" y="70" width="30" height="20" fill="#FF69B4" />
                <rect x="40" y="90" width="40" height="30" fill="#FFB3D9" />
                <rect x="35" y="120" width="50" height="40" fill="#FFB3D9" />
                <rect x="35" y="80" width="10" height="30" fill="#FFDBAC" />
                <rect x="75" y="80" width="10" height="30" fill="#FFDBAC" />
              </svg>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            style={{ x: groomX }}
            className="absolute bottom-0 left-1/2 z-20"
          >
            <div className="relative pixel-art">
              <svg width="120" height="180" viewBox="0 0 120 180" className="pixel-art">
                <rect x="45" y="15" width="30" height="15" fill="#DC143C" />
                <rect x="45" y="30" width="30" height="30" fill="#708090" />
                <rect x="50" y="40" width="20" height="15" fill="#FFDBAC" />
                <rect x="52" y="45" width="5" height="5" fill="#000000" />
                <rect x="63" y="45" width="5" height="5" fill="#000000" />
                <rect x="52" y="52" width="16" height="2" fill="#FFFFFF" />
                <rect x="45" y="60" width="30" height="40" fill="#708090" />
                <rect x="50" y="65" width="20" height="5" fill="#A9A9A9" />
                <rect x="30" y="70" width="15" height="60" fill="#DC143C" />
                <rect x="75" y="70" width="15" height="60" fill="#DC143C" />
                <rect x="35" y="80" width="10" height="30" fill="#FFDBAC" />
                <rect x="75" y="80" width="10" height="30" fill="#FFDBAC" />
                <rect x="50" y="100" width="10" height="50" fill="#2F4F4F" />
                <rect x="60" y="100" width="10" height="50" fill="#2F4F4F" />
                <rect x="48" y="150" width="12" height="15" fill="#000000" />
                <rect x="60" y="150" width="12" height="15" fill="#000000" />
              </svg>
            </div>
          </motion.div>

          {/* Heart (appears and bounces when they're close) */}
          <motion.div
            style={{ 
              opacity: heartOpacity,
              scale: heartScale,
              y: heartY,
            }}
            className="absolute left-1/2 z-25"
            style={{
              bottom: '160px',
              left: '50%',
              transform: 'translateX(-50%)',
              opacity: heartOpacity,
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [-5, 5, -5]
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <svg width="100" height="90" viewBox="0 0 100 90" className="pixel-art">
                <rect x="30" y="20" width="10" height="10" fill="#FF0000" />
                <rect x="60" y="20" width="10" height="10" fill="#FF0000" />
                <rect x="20" y="30" width="10" height="10" fill="#FF0000" />
                <rect x="30" y="30" width="30" height="10" fill="#FF1A1A" />
                <rect x="60" y="30" width="10" height="10" fill="#FF0000" />
                <rect x="70" y="30" width="10" height="10" fill="#FF0000" />
                <rect x="20" y="40" width="60" height="10" fill="#FF0000" />
                <rect x="30" y="50" width="40" height="10" fill="#FF0000" />
                <rect x="40" y="60" width="20" height="10" fill="#FF0000" />
                <rect x="45" y="70" width="10" height="10" fill="#FF0000" />
                <rect x="35" y="25" width="5" height="5" fill="#FFA07A" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ 
            opacity: scrollYProgress.get() > 0.1 ? 0 : 1,
            y: [0, 10, 0]
          }}
          transition={{ 
            y: { duration: 1.5, repeat: Infinity },
            opacity: { duration: 0.3 }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
        >
          <div className="text-sm font-elegant text-white/90 mb-2">Scroll Down</div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="mx-auto opacity-75">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
          <div className="w-1 h-48 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full bg-white origin-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;