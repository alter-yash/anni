import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(1); // 0 = January, 11 = December
  const [selectedDate, setSelectedDate] = useState(null);
  const year = 2026;

  // Special dates across the year
  const specialDates = {
    '2026-02-14': {
      title: "Valentine's Day",
      desc: "Our 5th Valentine's together! Every year with you gets sweeter.",
    },
    '2026-02-15': {
      title: 'Our Anniversary',
      desc: 'Six years of love, laughter, and endless adventures. Here\'s to forever!',
    },
    '2026-05-10': {
      title: 'The GOAT',
      desc: 'The luckiest day of my life. Even though mai aaya nhi tha abhi tak par thik hai mujhe pata tha ek bihari paida hui hai mera liya',
    },
    '2026-11-29': {
      title: 'Good Luck on Exams!',
      desc: 'You\'ve got this! I believe in you always. Sending all my love and support.',
    },
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date('2026-02-15'); // Current date
  const currentDate = today.getDate();
  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, year);
  const firstDay = getFirstDayOfMonth(currentMonth, year);
  
  const days = [];
  
  // Empty cells for days before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  
  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const getDateKey = (day) => {
    return `${year}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const isPastDate = (day) => {
    const dateToCheck = new Date(year, currentMonth, day);
    return dateToCheck < today;
  };

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-cream via-pink-50 to-purple-50 pb-32 pt-12 px-4">
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px 5px rgba(255, 20, 147, 0.6);
          }
          50% {
            box-shadow: 0 0 30px 10px rgba(255, 105, 180, 0.8);
          }
        }
        
        .glow-ring {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-display text-romantic-hot mb-4">
          Our Year Together
        </h1>
        <p className="text-xl font-elegant text-gray-600">
          2026 - Every day is special with you
        </p>
        <p className="text-lg text-romantic-pink mt-2">
          Click the glowing dates to see why they're special
        </p>
      </motion.div>

      {/* Calendar Container */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevMonth}
              disabled={currentMonth === 0}
              className={`p-3 rounded-full transition-all ${
                currentMonth === 0
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-romantic-pink text-white hover:bg-romantic-hot'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <h2 className="text-3xl md:text-4xl font-display text-gray-800">
              {months[currentMonth]} {year}
            </h2>

            <button
              onClick={nextMonth}
              disabled={currentMonth === 11}
              className={`p-3 rounded-full transition-all ${
                currentMonth === 11
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-romantic-pink text-white hover:bg-romantic-hot'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-4 mb-6">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center text-sm font-bold text-gray-500">
                {day}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-4">
            {days.map((day, index) => {
              if (!day) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const dateKey = getDateKey(day);
              const isSpecial = specialDates[dateKey];
              const isToday =
                day === currentDate &&
                currentMonth === currentMonthIndex &&
                year === currentYear;
              const isPast = isPastDate(day);

              return (
                <motion.div
                  key={day}
                  whileHover={isSpecial ? { scale: 1.1 } : {}}
                  whileTap={isSpecial ? { scale: 0.95 } : {}}
                  className="aspect-square relative"
                >
                  <div
                    onClick={() => isSpecial && setSelectedDate(dateKey)}
                    className={`
                      w-full h-full flex items-center justify-center text-lg md:text-xl rounded-xl
                      transition-all duration-300 relative
                      ${isSpecial
                        ? 'bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold cursor-pointer glow-ring'
                        : isToday
                        ? 'bg-yellow-300 text-gray-800 font-bold'
                        : isPast
                        ? 'bg-pink-100 text-gray-400'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    {day}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-300 rounded-lg flex-shrink-0" />
                <span className="text-sm font-elegant text-gray-700">Today</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex-shrink-0 glow-ring" />
                <span className="text-sm font-elegant text-gray-700">Special Dates</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex-shrink-0" />
                <span className="text-sm font-elegant text-gray-700">Past Days</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for special dates */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedDate(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              {/* Content */}
              <div className="text-center">
                <h2 className="text-3xl font-display text-romantic-hot mb-4">
                  {specialDates[selectedDate].title}
                </h2>
                <p className="text-lg font-elegant text-gray-700 leading-relaxed mb-6">
                  {specialDates[selectedDate].desc}
                </p>
                <div className="text-sm text-gray-500">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calendar;
