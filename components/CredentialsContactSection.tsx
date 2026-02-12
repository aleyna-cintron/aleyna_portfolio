'use client';

import { motion } from "motion/react";
import { Award, Star, Shield, Lock, Mail, Linkedin, Github, Send } from "lucide-react";
import Image from "next/image";

export function CredentialsContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-black">
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
            y: [0, -15, 0],
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <div className="w-1.5 h-1.5 bg-purple-400/30 rounded-full" />
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
            <Shield className="w-6 h-6 text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 bg-clip-text text-transparent">
              CREDENTIALS & CONTACT
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-sm">// Verifying academic clearance & establishing connection...</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          {/* Left: Education/Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="relative p-4 sm:p-8 bg-black/90 border-2 sm:border-4 rounded-lg overflow-hidden backdrop-blur-xl shadow-xl flex-1"
              style={{ borderColor: '#a78bfa' }}
            >
              {/* Animated scan lines */}
              <motion.div
                className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Top security bar */}
              <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-purple-500/10 border-b border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3 text-purple-400" />
                  <span className="text-xs font-mono text-purple-400">VERIFIED</span>
                </div>
                <span className="text-xs font-mono text-gray-600">AC-98-FS-2023</span>
              </div>

              <div className="relative mt-6">
                {/* Graduate Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", duration: 1 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    {/* Photo Container */}
                    <div className="relative w-40 h-48 rounded-lg overflow-hidden border-2 border-purple-400 shadow-2xl"
                    >
                      <Image
                        src="/graduation.jpg"
                        alt="Aleyna Cintron — Full Stack Developer in Boston and New Hampshire"
                        width={160}
                        height={192}
                        className="w-full h-full object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Achievement Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 border-4 border-black flex items-center justify-center shadow-lg"
                      style={{ boxShadow: '0 0 8px rgba(167, 139, 250, 0.4)' }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Credential Details */}
                <div className="text-center mb-6">
                  <div className="inline-block px-3 py-1.5 mb-3 bg-purple-500/20 border border-purple-500/40 rounded">
                    <span className="text-xs text-purple-400 uppercase tracking-widest font-mono font-bold">
                      ◆ ACADEMIC CERTIFICATION ◆
                    </span>
                  </div>

                  <h3 className="text-2xl font-mono font-bold mb-2 text-purple-400">
                    Bachelor of Science
                  </h3>
                  <p className="text-lg text-gray-300 font-mono mb-1">Web Development</p>
                  <p className="text-sm text-gray-200 mb-1 font-mono">Full Sail University</p>
                  <p className="text-xs text-gray-400 font-mono">Winter Park, FL</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <CredentialStat
                    icon={Award}
                    label="HONOR"
                    value="Salutatorian"
                    color="#a78bfa"
                  />
                  <CredentialStat
                    icon={Star}
                    label="GPA"
                    value="3.98"
                    color="#10b981"
                  />
                  <CredentialStat
                    icon={Shield}
                    label="GRAD"
                    value="May '23"
                    color="#f472b6"
                  />
                </div>

                {/* Skills */}
                <div className="pt-6 border-t border-purple-500/30">
                  <div className="text-center mb-3">
                    <span className="text-xs text-purple-400/80 uppercase tracking-widest font-mono">
                      COMPETENCIES
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Full Stack Dev",
                      "Software Architecture",
                      "Web Tech",
                      "Database Design",
                      "Cloud Computing",
                      "Algorithms"
                    ].map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-pink-300 rounded text-xs font-mono hover:bg-purple-500/20 hover:border-purple-400 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-10 left-3 w-4 h-4 border-t-2 border-l-2 border-purple-400/40" />
              <div className="absolute top-10 right-3 w-4 h-4 border-t-2 border-r-2 border-purple-400/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-400/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-purple-400/40" />
            </div>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="relative p-4 sm:p-8 bg-black/90 border-2 sm:border-4 rounded-lg overflow-hidden backdrop-blur-xl shadow-xl flex-1"
              style={{
                borderColor: '#f472b6',
                boxShadow: '0 0 20px rgba(244, 114, 182, 0.1)'
              }}
            >
              {/* Animated scan line */}
              <motion.div
                className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Top status bar */}
              <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-pink-500/10 border-b border-pink-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 5px rgba(34, 197, 94, 0.6)' }} />
                  <span className="text-xs font-mono text-green-400">ONLINE</span>
                </div>
                <span className="text-xs font-mono text-gray-600">LATENCY: 12ms</span>
              </div>

              <div className="relative mt-6">
                {/* Connection Message */}
                <div className="text-center mb-8">
                  <div className="inline-block px-3 py-1.5 mb-4 bg-pink-500/20 border border-pink-500/40 rounded">
                    <span className="text-xs text-pink-400 uppercase tracking-widest font-mono font-bold">
                      ● RECRUITMENT ACTIVE ●
                    </span>
                  </div>

                  <h3 className="text-2xl font-mono font-bold mb-4 text-pink-300">
                    Let's Collaborate
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed font-mono mb-6">
                    Seeking a skilled <span className="text-pink-400 font-bold">FULL_STACK_ENGINEER</span>? 
                    Let's build something extraordinary together.
                  </p>
                </div>

                {/* Connection Channels */}
                <div className="space-y-3 mb-8">
                  <ConnectionNode
                    icon={Mail}
                    label="EMAIL"
                    value="aleynatcintron@gmail.com"
                    href="mailto:aleynatcintron@gmail.com"
                    color="#a78bfa"
                  />
                  <ConnectionNode
                    icon={Linkedin}
                    label="LINKEDIN"
                    value="/in/aleynacintron"
                    href="https://www.linkedin.com/in/aleynacintron/"
                    color="#f472b6"
                  />
                  <ConnectionNode
                    icon={Github}
                    label="GITHUB"
                    value="/aleyna-cintron"
                    href="https://github.com/aleyna-cintron?tab=repositories"
                    color="#a78bfa"
                  />
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-black px-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-4 h-4 text-pink-400" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Connect Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center"
                >
                  <a
                    href="mailto:aleynatcintron@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-mono font-bold text-sm transition-all duration-300 shadow-2xl border-4 group relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #a78bfa, #f472b6, #fb7185)',
                      borderColor: '#f472b6',
                      color: '#000'
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Mail className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">CONNECT()</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      &gt;&gt;
                    </motion.div>
                  </a>
                </motion.div>

                {/* System Stats */}
                <div className="mt-8 p-3 bg-black/60 border-2 border-pink-500/20 rounded-lg">
                  <div className="grid grid-cols-3 gap-3 text-center font-mono">
                    <div>
                      <div className="text-xl font-bold text-purple-400 mb-1">Full Stack</div>
                      <div className="text-xs text-gray-600">Web Development</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-pink-400 mb-1">React</div>
                      <div className="text-xs text-gray-600">Primary</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-400 mb-1">Open</div>
                      <div className="text-xs text-gray-600">To Opportunities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner markers */}
              <div className="absolute top-10 left-3 w-4 h-4 border-t-2 border-l-2 border-pink-400/40" />
              <div className="absolute top-10 right-3 w-4 h-4 border-t-2 border-r-2 border-pink-400/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-pink-400/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-pink-400/40" />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <div className="inline-block p-6 bg-black/90 border-2 border-purple-500/20 rounded-lg backdrop-blur-xl">
              <p className="text-gray-500 font-mono text-sm">
                © 2026 Aleyna Cintron — Full Stack Developer in Boston, MA &amp; Manchester, NH
              </p>
            </div>
          </motion.div>
        </footer>
      </div>
    </section>
  );
}

interface CredentialStatProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

function CredentialStat({ icon: Icon, label, value, color }: CredentialStatProps) {
  return (
    <div className="p-2 bg-black/60 border border-gray-800 rounded text-center group hover:border-opacity-100 transition-all">
      <Icon className="w-5 h-5 mx-auto mb-1" style={{ color }} />
      <p className="text-xs text-gray-600 uppercase font-mono mb-1">{label}</p>
      <p className="text-sm font-mono font-bold" style={{ color }}>{value}</p>
    </div>
  );
}

interface ConnectionNodeProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
}

function ConnectionNode({ icon: Icon, label, value, href, color }: ConnectionNodeProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex items-center gap-3 p-3 bg-black/60 border-2 border-gray-800 rounded-lg group hover:border-opacity-100 transition-all"
      style={{
        borderColor: `${color}30`
      }}
    >
      <div className="relative">
        <div
          className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: color }}
        />
        <Icon className="w-5 h-5 relative" style={{ color }} />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-600 uppercase tracking-wider font-mono">{label}</p>
        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-mono">{value}</p>
      </div>
      
      {/* Connection indicator */}
      <div className="w-16 h-1 bg-gray-900 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ background: color, width: '100%', boxShadow: `0 0 10px ${color}` }} />
      </div>
    </motion.a>
  );
}
