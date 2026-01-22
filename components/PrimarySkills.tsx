'use client';

'use client';

import { motion } from "motion/react";
import { Package, Star, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiGit,
  SiAmazonwebservices,
  SiDocker,
  SiJest,
  SiJsonwebtokens,
  SiStripe,
  SiSelenium
} from "react-icons/si";
import { MdApi, MdCode, MdSecurity } from "react-icons/md";
import { TbBrandOauth } from "react-icons/tb";

export function PrimarySkills() {
  // Core stack - highlighted (MERN + Next.js)
  const coreStack = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61dafb",
      needsInvert: false
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#68a063",
      needsInvert: false
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#ffffff",
      needsInvert: true
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#4db33d",
      needsInvert: false
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#ffffff",
      needsInvert: true
    }
  ];

  // All other skills organized by category
  const skillCategories = [
    {
      category: "Languages & Frontend",
      color: "#a78bfa",
      skills: [
        { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
        { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
        { name: "Tailwind", Icon: SiTailwindcss, color: "#06b6d4" },
        { name: "Redux", Icon: SiRedux, color: "#764abc" },
        { name: "Zustand", Icon: MdCode, color: "#78716c" },
        { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
        { name: "CSS3", Icon: SiCss3, color: "#1572b6" },
      ]
    },
    {
      category: "Backend & APIs",
      color: "#f472b6",
      skills: [
        { name: "Python", Icon: SiPython, color: "#3776ab" },
        { name: "Django", Icon: SiDjango, color: "#0c4b33" },
        { name: "Flask", Icon: SiFlask, color: "#ffffff" },
        { name: "RESTful APIs", Icon: MdApi, color: "#f97316" },
        { name: "JWT", Icon: SiJsonwebtokens, color: "#d946ef" },
        { name: "OAuth", Icon: TbBrandOauth, color: "#6366f1" },
        { name: "Stripe", Icon: SiStripe, color: "#635bff" },
        { name: "Zod", Icon: MdSecurity, color: "#3b82f6" },
      ]
    },
    {
      category: "Data & Databases",
      color: "#a78bfa",
      skills: [
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
        { name: "Prisma", Icon: SiPrisma, color: "#2d3748" },
        { name: "Redis", Icon: SiRedis, color: "#dc382d" },
        { name: "SQL", Icon: MdCode, color: "#ea580c" },
      ]
    },
    {
      category: "DevOps & Tools",
      color: "#f472b6",
      skills: [
        { name: "AWS", Icon: SiAmazonwebservices, color: "#ff9900" },
        { name: "Docker", Icon: SiDocker, color: "#2496ed" },
        { name: "Git", Icon: SiGit, color: "#f05032" },
        { name: "Jest", Icon: SiJest, color: "#c21325" },
        { name: "Selenium", Icon: SiSelenium, color: "#43b02a" },
      ]
    }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden bg-black">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <div className="w-1 h-1 bg-pink-400/50 rounded-full" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <Package className="w-6 h-6 text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              SKILLS_INVENTORY
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-sm">// Equipped technologies and tools...</p>
        </motion.div>

        {/* Core Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative p-6 bg-black/90 border-2 border-pink-500 rounded-lg backdrop-blur-xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className="relative mb-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                  <h3 className="text-xl font-mono font-bold text-white">CORE_STACK</h3>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-pink-500/20 border border-pink-500 rounded">
                  <span className="text-yellow-400">★</span> <span className="text-white">LEGENDARY</span> <span className="text-yellow-400">★</span>
                </span>
              </div>
              <p className="text-gray-500 font-mono text-sm">// MERN + Next.js - Primary combat loadout</p>
            </div>

            {/* Core Stack Grid */}
            <div className="relative grid grid-cols-3 md:grid-cols-5 gap-3">
              {coreStack.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative"
                >
                  <div className="relative p-3 bg-black/80 border-2 border-pink-500 rounded-lg overflow-hidden shadow-md">
                    <div className="relative flex flex-col items-center gap-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                        style={{ filter: skill.needsInvert ? 'invert(1)' : 'none' }}
                      />
                      <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-3 h-3 text-pink-400 fill-pink-400" />
                      </motion.div>
                      <p className="font-mono text-sm font-bold text-white group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Skills - Efficient Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08, duration: 0.5 }}
            >
              <div className="relative p-4 bg-black/90 border-2 rounded-lg backdrop-blur-xl overflow-hidden h-full shadow-md"
                style={{
                  borderColor: `${category.color}80`
                }}
              >
                {/* Category Header */}
                <div className="mb-4 pb-2 border-b" style={{ borderColor: `${category.color}40` }}>
                  <h3 className="text-lg font-mono font-bold">
                    {(() => {
                      const parts = category.category.toUpperCase().split(' & ');
                      return (
                        <>
                          <span className="text-white">{parts[0]}</span>
                          <span style={{ color: category.color }}>
                            &nbsp;{parts.length > 1 ? `& ${parts[1]}` : ''}
                          </span>
                        </>
                      );
                    })()}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.08 + idx * 0.04 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group relative"
                    >
                      <div className="relative p-4 bg-black/60 border-2 rounded-lg overflow-hidden transition-all duration-300 h-full shadow-sm"
                        style={{ borderColor: `${skill.color}60` }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: `linear-gradient(135deg, ${skill.color}20, transparent)` }}
                        />

                        <div className="relative flex flex-col items-center gap-2.5 justify-center min-h-[80px]">
                          <skill.Icon
                            className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300"
                            style={{ color: skill.color }}
                          />
                          <p className="font-mono text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                            {skill.name}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.08 + idx * 0.04 + 0.15, duration: 0.4 }}
                            className="h-full"
                            style={{ background: skill.color }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inventory Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="p-5 bg-black/90 border-2 border-purple-500 rounded-lg backdrop-blur-xl shadow-md"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
              <span className="text-green-400 font-mono font-bold text-sm">ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="flex gap-6 text-sm font-mono">
              <div>
                <span className="text-gray-400">Total Skills:</span>
                <span className="text-purple-400 ml-2">{coreStack.length + skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}</span>
              </div>
              <div>
                <span className="text-gray-400">Core Stack:</span>
                <span className="text-pink-400 ml-2">{coreStack.length}</span>
              </div>
              <div>
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 ml-2">READY</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
