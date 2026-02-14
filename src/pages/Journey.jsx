import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Journey = () => {
  const memories = [
    {
      id: 1,
      date: '2020',
      year: 'Year 1',
      title: 'The Beginning',
      imageUrl: '/assets/images/year1.jpeg',
      note: 'Remember the first vide call? Awkward silence nahi pata kya kehna hai kya krna hai .... Too shy to say I love you?'
    },
    {
      id: 2,
      date: '2021',
      year: 'Year 2',
      title: 'Growing Together',
      imageUrl: '/assets/images/year2.jpeg',
      note: 'I started being your house guest.... You used to love sitting on my lap :)'
    },
    {
      id: 3,
      date: '2022',
      year: 'Year 3',
      title: 'Adventures Await',
      imageUrl: '/assets/images/year3.jpeg',
      note: 'I finally started my college ... LDR was not new to me but the distnace between us was new TT ... Btw golu molu mera 👀'
    },
    {
      id: 4,
      date: '2023',
      year: 'Year 4',
      title: 'Deeper Connection',
      imageUrl: '/assets/images/year4.jpeg',
      note: 'We went on our first date bowling, chinese scooty ride and lot of laugh '
    },
    {
      id: 5,
      date: '2024',
      year: 'Year 5',
      title: 'Building Dreams',
      imageUrl: '/assets/images/year5.jpeg',
      note: 'Visited my makhmali komal si bachii in Hyd as she was all alone and was new to the place (used to hate her roomie)'
    },
    {
      id: 6,
      date: '2025',
      year: 'Year 6',
      title: 'Forever Starts Now',
      imageUrl: '/assets/images/year6.jpeg',
      note: 'Won by unanimous decision but lost by your biased roommates TT... I hate themmmmmmm 😡'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-cream via-amber-50 to-orange-50 pb-32 pt-12 px-4 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Patrick+Hand&display=swap');
        
        .handwritten {
          font-family: 'Caveat', cursive;
        }
        
        .handwritten-alt {
          font-family: 'Patrick Hand', cursive;
        }
        
        .paper-bg {
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(210, 180, 140, 0.05) 2px,
              rgba(210, 180, 140, 0.05) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(210, 180, 140, 0.05) 2px,
              rgba(210, 180, 140, 0.05) 4px
            );
        }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-display text-romantic-hot mb-4">
          Our Journey
        </h1>
        <p className="text-2xl handwritten text-gray-600">
          A treasure map of our love story
        </p>
        <p className="text-lg font-elegant text-gray-500 mt-4">
        </p>
      </motion.div>

      {/* Main container with dotted line */}
      <div className="relative max-w-5xl mx-auto">
        {/* Dotted vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2" style={{ zIndex: 0 }}>
          <svg width="4" height="100%" className="absolute left-0 top-0">
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#FF1493"
              strokeWidth="4"
              strokeDasharray="15, 15"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Memory Items - Zigzag layout */}
        <div className="relative space-y-32" style={{ zIndex: 1 }}>
          {memories.map((memory, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <MemoryCard
                key={memory.id}
                memory={memory}
                isLeft={isLeft}
                index={index}
              />
            );
          })}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mt-24 relative z-10"
        >
          <div className="inline-block bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl font-display text-romantic-hot mb-4 handwritten">
              You are my khazana
            </h2>
            <p className="text-xl font-elegant text-gray-700">
              And this journey has only just begun abhi aur kaffi ladai honi bakki...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Memory Card Component
const MemoryCard = ({ memory, isLeft, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100, rotate: 0 }}
      animate={isInView ? { opacity: 1, x: 0, rotate: isLeft ? -2 : 2 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-start gap-8 md:gap-16 relative`}
    >
      {/* Polaroid Photo */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: isLeft ? -5 : 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full md:w-1/2 relative"
      >
        <div className={`bg-white p-4 pb-16 shadow-2xl ${isLeft ? 'rotate-[-2deg]' : 'rotate-[2deg]'} hover:z-20 transition-all cursor-pointer paper-bg`}>
          {/* Image */}
          <div className="w-full aspect-square bg-gray-200 overflow-hidden">
            <img
              src={memory.imageUrl}
              alt={memory.title}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Polaroid Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="handwritten text-2xl text-gray-800">
              {memory.title}
            </p>
          </div>

          {/* Date stamp */}
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm font-bold transform rotate-12">
            {memory.date}
          </div>

          {/* X marker */}
          <div className="absolute -top-4 -left-4 text-5xl text-romantic-hot transform -rotate-12 font-bold">
            ✗
          </div>
        </div>
      </motion.div>

      {/* Handwritten Note */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full md:w-1/2"
      >
        <div className="bg-yellow-50 p-8 rounded-lg shadow-lg border-2 border-yellow-200 paper-bg relative">
          {/* Tape effect */}
          <div className="absolute -top-3 left-8 w-20 h-6 bg-yellow-100 opacity-60 transform -rotate-12" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
          
          {/* Year badge */}
          <div className="inline-block bg-romantic-hot text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            {memory.year}
          </div>
          
          {/* Handwritten note */}
          <p className="handwritten text-2xl md:text-3xl text-gray-800 leading-relaxed">
            {memory.note}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Journey;
