'use client';

import { motion } from "framer-motion";
import { Terminal, MapPin, Calendar, CheckCircle } from "lucide-react";

export function ExperienceSection() {
  const logs = [
    {
      id: "LOG_001",
      timestamp: "2025-03-01 09:00:00",
      title: "JavaScript Tutorial Developer (Independent Contractor)",
      organization: "Full Sail University",
      location: "Remote",
      period: "March 2025 – May 2025",
      status: "COMPLETED",
      color: "#00ffff",
      entries: [
        "Developed JavaScript game-based learning content for Full Sail students, leveraging insights from personal academic experience",
        "Built a self-directed tutorial project based on Scoundrel, a single-player rogue-like card game, emphasizing clean, beginner-friendly code and core JavaScript fundamentals",
        "Collaborated with a project lead to meet delivery requirements and align technical standards",
        "Provided technical support by reviewing student help requests via an Excel-based ticketing system"
      ]
    },
    {
      id: "LOG_002",
      timestamp: "2025-01-15 08:30:00",
      title: "Healthcare Data Analyst (Home Medical Equipment)",
      organization: "Conlin's Pharmacy",
      location: "Methuen, MA",
      period: "January 2025 – March 2025",
      status: "COMPLETED",
      color: "#ff00ff",
      entries: [
        "Analyzed and managed patient data, insurance checks, and HME prescription compliance",
        "Optimized insurance verification workflows, improving billing accuracy",
        "Coordinated with physicians' offices to resolve prescription discrepancies",
        "Boosted order fulfillment efficiency by streamlining processing workflows"
      ]
    },
    {
      id: "LOG_003",
      timestamp: "2024-03-20 10:00:00",
      title: "Pawnbroker",
      organization: "House of Pawn",
      location: "Haverhill, MA",
      period: "March 2024 – December 2024",
      status: "COMPLETED",
      color: "#00ff00",
      entries: [
        "Managed online inventory by listing and updating product descriptions on eBay",
        "Maintained a structured digital record of merchandise, including categorization, pricing, and sales tracking",
        "Processed online orders, verifying product details, packaging, and shipment logistics"
      ]
    },
    {
      id: "LOG_004",
      timestamp: "2023-12-01 09:15:00",
      title: "Development Intern",
      organization: "LightScreen Art",
      location: "Remote",
      period: "December 2023 – February 2024",
      status: "COMPLETED",
      color: "#ffff00",
      entries: [
        "Developed full-stack features using Angular, TypeScript, Flask, and PostgreSQL",
        "Enhanced UI/UX with responsive design elements",
        "Optimized software infrastructure for better efficiency and performance",
        "Diagnosed and resolved bugs, enhancing system stability"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Binary rain effect (subtle) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400/10 font-mono text-xs"
          style={{
            left: `${5 + i * 8}%`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '110vh'],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              COMMAND_HISTORY
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// tail -f /var/log/experience.log</p>
        </motion.div>

        <div className="space-y-6">
          {logs.map((log, idx) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group"
            >
              {/* Log Entry */}
              <div
                className="relative p-6 bg-black/90 border-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] backdrop-blur-xl"
                style={{
                  borderColor: `${log.color}50`,
                  boxShadow: `0 0 20px ${log.color}20`
                }}
              >
                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-current to-transparent"
                  style={{ color: log.color }}
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 0% 50%, ${log.color}15, transparent 70%)`
                  }}
                />

                <div className="relative">
                  {/* Log Header */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b" style={{ borderColor: `${log.color}30` }}>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-gray-600">{log.id}</span>
                        <div
                          className="px-2 py-1 rounded text-xs font-mono font-bold border"
                          style={{
                            borderColor: log.color,
                            background: `${log.color}20`,
                            color: log.color
                          }}
                        >
                          {log.status}
                        </div>
                      </div>
                      <h3
                        className="text-2xl font-mono font-bold mb-2"
                        style={{ color: log.color }}
                      >
                        {log.title}
                      </h3>
                      <p className="text-lg text-gray-300 font-mono mb-3">{log.organization}</p>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {log.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {log.period}
                        </span>
                      </div>
                    </div>

                    {/* Timestamp */}
                    <div className="text-right">
                      <div className="text-xs text-gray-600 font-mono mb-1">TIMESTAMP</div>
                      <div className="text-xs font-mono" style={{ color: log.color }}>
                        {log.timestamp}
                      </div>
                    </div>
                  </div>

                  {/* Log Entries */}
                  <div className="space-y-3">
                    {log.entries.map((entry, entryIdx) => (
                      <motion.div
                        key={entryIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + entryIdx * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 group/entry"
                      >
                        <CheckCircle
                          className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover/entry:scale-110 transition-transform"
                          style={{ color: log.color }}
                        />
                        <p className="text-gray-400 font-mono text-sm leading-relaxed group-hover/entry:text-gray-300 transition-colors">
                          {entry}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs font-mono" style={{ borderColor: `${log.color}30` }}>
                    <span className="text-gray-600">EXIT CODE: 0</span>
                    <span style={{ color: log.color }}>SUCCESS</span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-20" style={{ borderColor: log.color }} />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-20" style={{ borderColor: log.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* End of log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 p-6 bg-black/90 border-2 border-green-500/50 rounded-lg backdrop-blur-xl"
          style={{ boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)' }}
        >
          <div className="flex items-center justify-center gap-2 text-green-400 font-mono">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>END OF LOG // New entries incoming...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
