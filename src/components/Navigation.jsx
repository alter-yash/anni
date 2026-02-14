import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [showDock, setShowDock] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/calendar', label: 'Timeline', icon: '📅' },
    { path: '/letter', label: 'Letter', icon: '💌' },
    { path: '/journey', label: 'Journey', icon: '📸' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowHeight = window.innerHeight;
      const mouseY = e.clientY;
      
      if (windowHeight - mouseY < 100) {
        setShowDock(true);
      } else if (windowHeight - mouseY > 200) {
        setShowDock(false);
      }
    };

    const handleTouchStart = (e) => {
      const windowHeight = window.innerHeight;
      const touchY = e.touches[0].clientY;
      
      if (windowHeight - touchY < 100) {
        setShowDock(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    
    // Show dock initially for 3 seconds
    setShowDock(true);
    const timer = setTimeout(() => {
      setShowDock(false);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Hit area at bottom of screen */}
      <div
        className="fixed bottom-0 left-0 right-0 h-20 z-40"
        onMouseEnter={() => setShowDock(true)}
      />

      {/* Dock */}
      <AnimatePresence>
        {showDock && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onMouseEnter={() => setShowDock(true)}
            className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none"
          >
            <div className="pointer-events-auto bg-white/80 backdrop-blur-xl rounded-[2rem] px-4 py-3 shadow-2xl border border-white/20">
              <div className="flex items-end gap-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  const isHovered = hoveredItem === index;
                  const distance = hoveredItem !== null ? Math.abs(hoveredItem - index) : 0;
                  
                  let scale = 1;
                  if (isHovered) {
                    scale = 1.4;
                  } else if (distance === 1) {
                    scale = 1.2;
                  } else if (distance === 2) {
                    scale = 1.1;
                  }

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="relative group"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <motion.div
                        animate={{ 
                          scale,
                          y: isHovered ? -10 : 0
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="relative"
                      >
                        <div
                          className={`
                            w-14 h-14 rounded-2xl flex flex-col items-center justify-center
                            transition-all duration-300 relative
                            ${isActive 
                              ? 'bg-gradient-to-br from-romantic-pink to-romantic-hot shadow-lg' 
                              : 'bg-white/50 hover:bg-white/80'
                            }
                          `}
                        >
                          <span className="text-3xl">{item.icon}</span>
                          
                          {isActive && (
                            <motion.div
                              layoutId="activeDot"
                              className="absolute -bottom-1 w-1 h-1 bg-romantic-hot rounded-full"
                            />
                          )}
                        </div>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
                            >
                              <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                                {item.label}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hint arrow when dock is hidden */}
      <AnimatePresence>
        {!showDock && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-2 left-0 right-0 flex justify-center z-40 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="gray" className="opacity-50">
                <path d="M7 14l5-5 5 5z"/>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;