'use client';

'use client';

import { motion } from "motion/react";
import { Terminal, MapPin, Calendar, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const logs = [
    {
      id: "CMD_001",
      company: "Full Sail University",
      role: "JavaScript Tutorial Developer (Independent Contractor)",
      period: "March 2025 – May 2025",
      location: "Remote",
      timestamp: "2025-03-01 09:00:00",
      status: "COMPLETED",
      color: "#a78bfa",
      entries: [
        "Developed JavaScript game-based learning content for Full Sail students, leveraging insights from personal academic experience",
        "Built a self-directed tutorial project based on Scoundrel, a single-player rogue-like card game, emphasizing clean, beginner-friendly code and core JavaScript fundamentals",
        "Collaborated with a project lead to meet delivery requirements and align technical standards",
        "Provided technical support by reviewing student help requests via an Excel-based ticketing system"
      ]
    },
    {
      id: "CMD_002",
      company: "Conlin's Pharmacy",
      role: "Healthcare Data Analyst (Home Medical Equipment)",
      period: "January 2025 – March 2025",
      location: "Methuen, MA",
      timestamp: "2025-01-15 08:30:00",
      status: "COMPLETED",
      color: "#f472b6",
      entries: [
        "Analyzed and managed patient data, insurance checks, and HME prescription compliance",
        "Optimized insurance verification workflows, improving billing accuracy",
        "Coordinated with physicians' offices to resolve prescription discrepancies",
        "Boosted order fulfillment efficiency by streamlining processing workflows"
      ]
    },
    {
      id: "CMD_003",
      company: "House of Pawn",
      role: "Pawnbroker",
      period: "March 2024 – December 2024",
      location: "Haverhill, MA",
      timestamp: "2024-03-20 10:00:00",
      status: "COMPLETED",
      color: "#a78bfa",
      entries: [
        "Managed online inventory by listing and updating product descriptions on eBay",
        "Maintained a structured digital record of merchandise, including categorization, pricing, and sales tracking",
        "Processed online orders, verifying product details, packaging, and shipment logistics"
      ]
    },
    {
      id: "CMD_004",
      company: "LightScreen Art",
      role: "Development Intern",
      period: "December 2023 – February 2024",
      location: "Remote",
      timestamp: "2023-12-01 09:15:00",
      status: "COMPLETED",
      color: "#f472b6",
      entries: [
        "Developed full-stack features using Angular, TypeScript, Flask, and PostgreSQL",
        "Enhanced UI/UX with responsive design elements",
        "Optimized software infrastructure for better efficiency and performance",
        "Diagnosed and resolved bugs, enhancing system stability"
      ]
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentIndex((prev) => (prev + 1) % logs.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentIndex((prev) => (prev - 1 + logs.length) % logs.length);
      }
    };

    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [logs.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + logs.length) % logs.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % logs.length);
  };

  const currentLog = logs[currentIndex];
  const pastelColor = currentLog.color === '#a78bfa' ? '#c4b5fd' :
                      currentLog.color === '#f472b6' ? '#f9a8d4' :
                      currentLog.color === '#fb7185' ? '#fda4af' : '#a7f3d0';

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        >
          <div className="w-1 h-1 bg-purple-400/40 rounded-full" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
              WORK_HISTORY
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-sm">// tail -f /var/log/experience.log</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            key={currentLog.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="group"
          >
            {/* Log Entry */}
            <div
              className="relative p-6 bg-black/90 border-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] backdrop-blur-xl shadow-lg"
              style={{
                borderColor: pastelColor
              }}
            >
              {/* Scan line */}
              <motion.div
                className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-current to-transparent"
                style={{ color: currentLog.color }}
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 0% 50%, ${currentLog.color}15, transparent 70%)`
                }}
              />

              <div className="relative">
                {/* Log Header */}
                <div className="flex items-start justify-between mb-4 pb-4 border-b" style={{ borderColor: `${currentLog.color}30` }}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-gray-600">{currentLog.id}</span>
                      <div
                        className="px-2 py-1 rounded text-xs font-mono font-bold border"
                        style={{
                          borderColor: currentLog.color,
                          background: `${currentLog.color}20`,
                          color: currentLog.color
                        }}
                      >
                        {currentLog.status}
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-mono font-bold mb-2 text-white"
                    >
                      {currentLog.role}
                    </h3>
                    <p className="text-lg text-gray-300 font-mono mb-3">{currentLog.company}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {currentLog.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {currentLog.period}
                      </span>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="text-right">
                    <div className="text-xs text-gray-600 font-mono mb-1">TIMESTAMP</div>
                    <div className="text-xs font-mono" style={{ color: currentLog.color }}>
                      {currentLog.timestamp}
                    </div>
                  </div>
                </div>

                {/* Log Entries */}
                <div className="space-y-3">
                  {currentLog.entries.map((entry, entryIdx) => (
                    <motion.div
                      key={entryIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + entryIdx * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 group/entry"
                    >
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover/entry:scale-110 transition-transform"
                        style={{ color: currentLog.color }}
                      />
                      <p className="text-gray-400 font-mono text-sm leading-relaxed group-hover/entry:text-gray-300 transition-colors">
                        {entry}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: `${currentLog.color}30` }}>
                  <span className="text-gray-600">EXIT CODE: 0</span>
                  <span style={{ color: currentLog.color }}>SUCCESS</span>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-20" style={{ borderColor: currentLog.color }} />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-20" style={{ borderColor: currentLog.color }} />
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-black/90 border-2 border-purple-500 rounded-lg hover:border-purple-400 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400" />
          </motion.button>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {logs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="group relative"
              >
                <motion.div
                  className="w-3 h-3 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: idx === currentIndex ? logs[idx].color : '#4b5563',
                    backgroundColor: idx === currentIndex ? logs[idx].color : 'transparent',
                    boxShadow: idx === currentIndex ? `0 0 10px ${logs[idx].color}` : 'none'
                  }}
                  whileHover={{ scale: 1.3 }}
                />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-black/90 border-2 border-purple-500 rounded-lg hover:border-purple-400 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-purple-400" />
          </motion.button>
        </div>



        {/* End of log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 p-6 bg-black/90 border-2 border-purple-500/50 rounded-lg backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-2 text-purple-400 font-mono">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>END OF LOG // <span className="text-green-400">New entries incoming...</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
