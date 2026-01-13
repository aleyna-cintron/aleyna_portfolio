'use client';

import { motion } from "framer-motion";
import { Code, Database, Layers, Target } from "lucide-react";

export function PrimarySkills() {
  const skillCategories = [
    {
      name: "Languages / OOP",
      icon: Code,
      color: "#00ffff",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "NoSQL", "HTML", "CSS", "OOP"]
    },
    {
      name: "Web / Frameworks",
      icon: Layers,
      color: "#ff00ff",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Django", "Bootstrap", "Tailwind CSS"]
    },
    {
      name: "State Management",
      icon: Database,
      color: "#00ff00",
      skills: ["Redux", "Context API", "Zustand", "localStorage"]
    },
    {
      name: "Testing / Tools",
      icon: Target,
      color: "#ffff00",
      skills: ["Git", "Postman", "Jest", "Selenium", "JWT", "OAuth", "Stripe"]
    },
    {
      name: "Databases",
      icon: Database,
      color: "#ff6600",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS DynamoDB"]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#00ffff 1px, transparent 1px),
            linear-gradient(90deg, #00ffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Shadow streaks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-8 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          style={{
            left: `${5 + i * 5}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TECH_STACK
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// Professional toolset and technologies...</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Category Card */}
              <div
                className="relative p-6 bg-black/90 border-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] backdrop-blur-xl h-full"
                style={{
                  borderColor: `${category.color}50`,
                  boxShadow: `0 0 20px ${category.color}20`
                }}
              >
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-current to-transparent"
                  style={{ color: category.color }}
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${category.color}15, transparent 70%)`
                  }}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-14 h-14 rounded border-2 flex items-center justify-center relative flex-shrink-0"
                      style={{
                        borderColor: category.color,
                        background: `${category.color}10`,
                        boxShadow: `0 0 20px ${category.color}30`
                      }}
                    >
                      <category.icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-mono font-bold leading-tight" style={{ color: category.color }}>
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Skills - THE MAIN FOCUS */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                        className="px-3 py-2 text-sm font-mono border rounded hover:scale-105 transition-transform duration-200"
                        style={{
                          borderColor: `${category.color}60`,
                          background: `${category.color}15`,
                          color: category.color
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-30" style={{ borderColor: category.color }} />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-30" style={{ borderColor: category.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-black/90 border-2 border-green-500/50 rounded-lg backdrop-blur-xl"
          style={{ boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)' }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px #00ff00' }} />
              <span className="text-green-400 font-mono font-bold">ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="flex gap-6 text-sm font-mono">
              <div>
                <span className="text-gray-500">Frontend:</span>
                <span className="text-cyan-400 ml-2">READY</span>
              </div>
              <div>
                <span className="text-gray-500">Backend:</span>
                <span className="text-pink-400 ml-2">READY</span>
              </div>
              <div>
                <span className="text-gray-500">DevOps:</span>
                <span className="text-green-400 ml-2">READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
