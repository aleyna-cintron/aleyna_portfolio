'use client';

import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Github, Lock, Unlock } from "lucide-react";

export function ProjectsSection() {
  const fileRecords = [
    {
      filename: "E-Commerce Platform",
      classification: "CRITICAL",
      classColor: "#ff0000",
      accessLevel: "LEVEL_5",
      fileSize: "2.4 GB",
      description: "High-security commercial application with real-time inventory synchronization, encrypted payment gateway, and multi-tier authentication protocols.",
      features: [
        "Real-time inventory sync",
        "Stripe payment integration",
        "Admin dashboard with analytics",
        "JWT-based authentication"
      ],
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "DEPLOYED",
      color: "#00ffff",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      filename: "Task Management System",
      classification: "RESTRICTED",
      classColor: "#ff8800",
      accessLevel: "LEVEL_4",
      fileSize: "1.8 GB",
      description: "Collaborative workspace platform featuring drag-and-drop task orchestration, real-time team synchronization, and advanced notification systems.",
      features: [
        "Drag-and-drop task boards",
        "Real-time collaboration",
        "Push notifications",
        "Performance analytics"
      ],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      status: "DEPLOYED",
      color: "#ff00ff",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      filename: "Portfolio Builder",
      classification: "CONFIDENTIAL",
      classColor: "#ffaa00",
      accessLevel: "LEVEL_3",
      fileSize: "1.5 GB",
      description: "Visual website construction framework with template engine, custom domain binding, SEO optimization algorithms, and cloud deployment automation.",
      features: [
        "Drag-and-drop builder",
        "Custom domain support",
        "SEO optimization",
        "Cloud hosting integration"
      ],
      stack: ["Angular", "Firebase", "SCSS", "Cloud Functions"],
      status: "ACTIVE",
      color: "#00ff00",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      filename: "Recipe Sharing Platform",
      classification: "PUBLIC",
      classColor: "#00ff00",
      accessLevel: "LEVEL_2",
      fileSize: "1.2 GB",
      description: "Community-driven culinary database with user-generated content aggregation, rating algorithms, recommendation engine, and meal planning tools.",
      features: [
        "User content management",
        "Rating & review system",
        "AI recommendations",
        "Meal calendar planner"
      ],
      stack: ["Vue.js", "Express", "MySQL", "Redis"],
      status: "ACTIVE",
      color: "#ffff00",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#00ffff 1px, transparent 1px),
            linear-gradient(90deg, #00ffff 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              FILE_SYSTEM
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// Accessing secure project archives...</p>
        </motion.div>

        {/* File Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fileRecords.map((file, idx) => (
            <FileCard key={file.filename} file={file} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FileRecord {
  filename: string;
  classification: string;
  classColor: string;
  accessLevel: string;
  fileSize: string;
  description: string;
  features: string[];
  stack: string[];
  status: string;
  color: string;
  liveUrl: string;
  githubUrl: string;
}

function FileCard({ file, delay }: { file: FileRecord; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group"
    >
      {/* File Card */}
      <div
        className="relative rounded-lg overflow-hidden bg-black/90 border-2 transition-all duration-300 hover:scale-[1.02] backdrop-blur-xl"
        style={{
          borderColor: `${file.color}50`,
          boxShadow: `0 0 30px ${file.color}20`
        }}
      >
        {/* Scan line */}
        <motion.div
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-current to-transparent"
          style={{ color: file.color }}
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${file.color}15, transparent 70%)`
          }}
        />

        {/* Header Bar */}
        <div
          className="px-6 py-3 border-b flex items-center justify-between"
          style={{
            background: `linear-gradient(90deg, ${file.color}20, transparent)`,
            borderColor: `${file.color}30`
          }}
        >
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4" style={{ color: file.color }} />
            <span className="text-xs font-mono text-gray-500">RECORD_ID: {1000 + delay * 100}</span>
          </div>
          <div
            className="px-2 py-1 rounded text-xs font-mono font-bold border"
            style={{
              borderColor: file.classColor,
              background: `${file.classColor}20`,
              color: file.classColor
            }}
          >
            {file.classification}
          </div>
        </div>

        <div className="p-6 relative">
          {/* File Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-mono font-bold mb-2" style={{ color: file.color }}>
                  {file.filename}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    {file.accessLevel}
                  </span>
                  <span>SIZE: {file.fileSize}</span>
                  <span className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: file.color, boxShadow: `0 0 8px ${file.color}` }}
                    />
                    {file.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-4" style={{ color: file.color }} />

            {/* Description */}
            <p className="text-gray-400 text-sm font-mono leading-relaxed mb-4">
              {file.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <div className="text-xs text-gray-600 uppercase font-mono mb-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: file.color }} />
              FEATURES
            </div>
            <div className="space-y-2">
              {file.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-gray-600 font-mono">&gt;</span>
                  <span className="text-gray-400 font-mono">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="text-xs text-gray-600 uppercase font-mono mb-2">STACK:</div>
            <div className="flex flex-wrap gap-2">
              {file.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono border rounded"
                  style={{
                    borderColor: `${file.color}40`,
                    background: `${file.color}10`,
                    color: file.color
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={file.liveUrl}
              className="group/btn flex items-center justify-center gap-2 px-4 py-3 rounded border-2 font-mono text-sm font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden"
              style={{
                borderColor: file.color,
                background: `${file.color}10`,
                color: file.color
              }}
            >
              <div
                className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                style={{ background: `${file.color}20` }}
              />
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">ACCESS</span>
            </a>
            <a
              href={file.githubUrl}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded border-2 border-gray-700 bg-gray-900/50 text-gray-400 font-mono text-sm font-bold hover:border-gray-500 hover:text-gray-300 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>SOURCE</span>
            </a>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 opacity-20" style={{ borderColor: file.color }} />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 opacity-20" style={{ borderColor: file.color }} />
        </div>

        {/* Bottom status bar */}
        <div
          className="px-6 py-2 border-t flex items-center justify-between text-xs font-mono"
          style={{
            background: `linear-gradient(90deg, transparent, ${file.color}10)`,
            borderColor: `${file.color}30`
          }}
        >
          <div className="flex items-center gap-2">
            <Unlock className="w-3 h-3 text-green-400" />
            <span className="text-gray-600">ACCESS GRANTED</span>
          </div>
          <span className="text-gray-600">CHECKSUM: OK</span>
        </div>
      </div>
    </motion.div>
  );
}
