'use client';

import { motion } from "motion/react";
import { Terminal, Code2, ChevronRight, Users } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ALEYNA_CINTRON";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
      {/* Soft floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
        </motion.div>
      ))}

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal Window */}
          <div className="relative bg-black/90 border-2 border-purple-500 rounded-lg overflow-hidden backdrop-blur-xl shadow-xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-b border-purple-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
                <div className="w-3 h-3 rounded-full bg-pink-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-purple-600 font-mono">aleyna@portfolio:~$ ./initialize.sh</span>
              </div>
              <Code2 className="w-4 h-4 text-purple-400" />
            </div>

            {/* Terminal Content */}
            <div className="p-8 md:p-12 font-mono text-sm">
              {/* Boot sequence */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-1 mb-6"
              >
                <p className="text-green-500">[✓] Loading system modules...</p>
                <p className="text-green-500">[✓] Initializing developer profile...</p>
                <p className="text-green-500">[✓] Connecting to portfolio network...</p>
                <p className="text-purple-500">[⚡] System ready.</p>
              </motion.div>

              {/* Name display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-500">NAME:</span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-7xl mb-4 relative">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-400 bg-clip-text text-transparent font-bold">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-purple-400"
                    >
                      _
                    </motion.span>
                  </span>
                </h1>
              </motion.div>

              {/* Class/Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ChevronRight className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-500">ROLE:</span>
                </div>
                <div className="pl-6">
                  <p className="text-2xl md:text-3xl text-purple-500 font-bold mb-2 flex items-center gap-2">
                    <Code2 className="w-6 h-6" />
                    &lt; Full Stack Software Engineer /&gt;
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Experienced engineer specializing in React.js, Node.js, and cloud technologies.
                    Expert in building scalable web applications, implementing modern development practices, and delivering high-quality solutions.
                  </p>
                </div>
              </motion.div>

              {/* RPG Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ChevronRight className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-500">CORE_STATS:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6">
                  <RPGStat label="LOCATION" value="Boston Area" max="" color="#a78bfa" icon="📍" delay={1.6} />
                  <RPGStat label="FOCUS" value="MERN + Next.js" max="" color="#f472b6" icon="⚡" delay={1.7} />
                  <RPGStat label="EDUCATION" value="BS Degree" max="" color="#10b981" icon="🎓" delay={1.8} />
                </div>
              </motion.div>

              {/* Resource bars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 }}
                className="mb-6 pl-6"
              >
                <div className="space-y-3">
                  <ResourceBar label="FRONTEND" value={95} color="#a78bfa" icon="🎨" />
                  <ResourceBar label="BACKEND" value={95} color="#f472b6" icon="⚙️" />
                  <ResourceBar label="DEVOPS" value={85} color="#10b981" icon="☁️" />
                </div>
              </motion.div>

              {/* Command options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="mb-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-500">AVAILABLE_COMMANDS:</span>
                </div>
                <div className="flex flex-wrap gap-3 pl-6">
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-6 py-3 bg-purple-100 border-2 border-purple-300 text-purple-600 rounded hover:bg-purple-200 hover:border-purple-400 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      ./view_projects
                    </span>
                    <div className="absolute inset-0 bg-purple-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>

                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-6 py-3 bg-pink-100 border-2 border-pink-300 text-pink-600 rounded hover:bg-pink-200 hover:border-pink-400 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      ./join_crew
                    </span>
                    <div className="absolute inset-0 bg-pink-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>

              {/* Cursor prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex items-center gap-2 text-purple-500"
              >
                <span>aleyna@portfolio:~$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ▊
                </motion.span>
              </motion.div>
            </div>

            {/* Bottom status bar */}
            <div className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-t border-purple-500/30">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-4">
                  <span className="text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" /> ONLINE
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-purple-400">OPEN TO OPPORTUNITIES</span>
                </div>
                <div className="text-gray-500">
                  status: ready
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}

interface RPGStatProps {
  label: string;
  value: string;
  max: string;
  color: string;
  icon: string;
  delay: number;
}

function RPGStat({ label, value, max, color, icon, delay }: RPGStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="relative p-3 bg-black/80 border border-gray-700 rounded group hover:border-gray-600 transition-all duration-300"
    >
      <div className="relative">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{icon}</span>
          <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
        </div>
        <div className="text-2xl font-bold mb-1 text-gray-300">
          {value}{max && ` / ${max}`}
        </div>
      </div>
    </motion.div>
  );
}

interface ResourceBarProps {
  label: string;
  value: number;
  color: string;
  icon: string;
}

function ResourceBar({ label, value, color, icon }: ResourceBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400 flex items-center gap-2">
          <span>{icon}</span> {label}
        </span>
        <span className="text-xs font-mono font-bold" style={{ color }}>{value}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ delay: 2.0, duration: 1 }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}cc)`
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
