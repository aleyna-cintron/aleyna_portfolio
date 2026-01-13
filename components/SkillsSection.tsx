'use client';

import { motion } from "framer-motion";
import { BookMarked, Target } from "lucide-react";

export function SkillsSection() {
  const skillTomes = [
    {
      name: "LANG_ARSENAL",
      color: "#00ffff",
      icon: "🗡️",
      rarity: "Epic",
      skills: [
        { name: "JavaScript", level: 95, element: "⚡ Shadow" },
        { name: "TypeScript", level: 90, element: "💎 Poison" },
        { name: "Python", level: 85, element: "🐍 Venom" },
        { name: "SQL", level: 85, element: "🗄️ Stealth" }
      ]
    },
    {
      name: "UI_BLADES",
      color: "#ff00ff",
      icon: "⚔️",
      rarity: "Legendary",
      skills: [
        { name: "React.js", level: 95, element: "⚛️ Critical" },
        { name: "Next.js", level: 90, element: "🚀 Swift" },
        { name: "Tailwind CSS", level: 90, element: "🎨 Deadly" },
        { name: "Redux", level: 85, element: "🔮 Dark" }
      ]
    },
    {
      name: "SERVER_DAGGERS",
      color: "#00ff00",
      icon: "🔪",
      rarity: "Epic",
      skills: [
        { name: "Node.js", level: 90, element: "🌲 Ambush" },
        { name: "Express.js", level: 88, element: "⚙️ Precise" },
        { name: "Django", level: 80, element: "🔥 Burning" },
        { name: "Flask", level: 82, element: "💧 Silent" }
      ]
    },
    {
      name: "DATA_LOCKPICKS",
      color: "#ffff00",
      icon: "🔓",
      rarity: "Rare",
      skills: [
        { name: "PostgreSQL", level: 85, element: "🌊 Breach" },
        { name: "MongoDB", level: 85, element: "🍃 Nimble" },
        { name: "AWS", level: 80, element: "☁️ Escape" },
        { name: "MySQL", level: 82, element: "💠 Frost" }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Shadow particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${i * 7}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          <div className="w-2 h-2 bg-purple-400/30 rounded-full" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookMarked className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              WEAPONS_CACHE
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// SELECT * FROM skills WHERE proficiency &gt; 80 ORDER BY lethality DESC;</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillTomes.map((tome, idx) => (
            <motion.div
              key={tome.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Weapon Card */}
              <div
                className="relative p-6 bg-black/90 border-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] backdrop-blur-xl"
                style={{
                  borderColor: `${tome.color}50`,
                  boxShadow: `0 0 20px ${tome.color}20`
                }}
              >
                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-current to-transparent"
                  style={{ color: tome.color }}
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: `${tome.color}30` }}>
                  <span className="text-3xl">{tome.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-mono font-bold" style={{ color: tome.color }}>
                      {tome.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">
                      <span style={{ color: tome.color }}>{tome.rarity}</span> Arsenal · Slot {idx + 1}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="w-5 h-5" style={{ color: tome.color }} />
                  </motion.div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {tome.skills.map((skill, skillIdx) => (
                    <SkillInscription
                      key={skill.name}
                      skill={skill}
                      color={tome.color}
                      delay={idx * 0.1 + skillIdx * 0.05}
                    />
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t flex justify-between items-center text-xs font-mono" style={{ borderColor: `${tome.color}30` }}>
                  <span className="text-gray-600">{tome.skills.length} weapons mastered</span>
                  <span style={{ color: tome.color }}>COMBAT_READY</span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-20" style={{ borderColor: tome.color }} />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-20" style={{ borderColor: tome.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-black/90 border-2 border-purple-500/50 rounded-lg backdrop-blur-xl"
          style={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' }}
        >
          <div className="mb-4">
            <p className="text-purple-400 font-mono text-sm mb-2">// Additional gear in inventory:</p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            {["Git", "Postman", "Jest", "Selenium", "JWT", "OAuth", "Stripe", "Bootstrap", "Context API", "Zustand"].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="px-3 py-1 bg-purple-500/10 border border-purple-500/40 text-purple-300 rounded text-sm font-mono hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Skill {
  name: string;
  level: number;
  element: string;
}

interface SkillInscriptionProps {
  skill: Skill;
  color: string;
  delay: number;
}

function SkillInscription({ skill, color, delay }: SkillInscriptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group/skill"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-gray-300 group-hover/skill:text-white transition-colors">
          {skill.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs italic" style={{ color, opacity: 0.6 }}>
            {skill.element}
          </span>
          <span
            className="text-xs font-mono font-bold px-2 py-0.5 rounded border"
            style={{
              background: `${color}15`,
              borderColor: `${color}30`,
              color: color
            }}
          >
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Magical Progress Bar */}
      <div className="relative overflow-hidden bg-black/40 rounded-full h-2 border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}cc)`
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
          />

          {/* Glow */}
          <div
            className="absolute inset-0 blur-sm"
            style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
          />
        </motion.div>

        {/* Particles for high level skills */}
        {skill.level >= 90 && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: color,
                  width: '3px',
                  height: '3px',
                  left: `${(skill.level / 100) * 100 - 5}%`,
                }}
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
