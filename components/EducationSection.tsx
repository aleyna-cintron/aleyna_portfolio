'use client';

'use client';

import { motion } from "motion/react";
import { Award, Star, Shield, Lock } from "lucide-react";
import Image from "next/image";

export function EducationSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L30 10 M30 10 L30 30 M30 30 L50 30" stroke="#00ffff" strokeWidth="0.5" fill="none"/>
            <circle cx="30" cy="10" r="2" fill="#00ffff"/>
            <circle cx="30" cy="30" r="2" fill="#ff00ff"/>
            <path d="M70 70 L90 70 M90 70 L90 50" stroke="#00ff00" strokeWidth="0.5" fill="none"/>
            <circle cx="90" cy="70" r="2" fill="#00ff00"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              CREDENTIALS
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// Verifying academic clearance...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Credential Card */}
          <div className="relative p-10 md:p-16 bg-black/90 border-4 rounded-lg overflow-hidden backdrop-blur-xl"
            style={{
              borderColor: '#f59e0b',
              boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)'
            }}
          >
            {/* Animated scan lines */}
            <motion.div
              className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Top security bar */}
            <div className="absolute top-0 left-0 right-0 px-6 py-3 bg-yellow-500/10 border-b border-yellow-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-mono text-yellow-400">SECURITY CLEARANCE: VERIFIED</span>
              </div>
              <span className="text-xs font-mono text-gray-600">ID: AC-98-FS-2023</span>
            </div>

            <div className="relative mt-8">
              {/* Graduate Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", duration: 1 }}
                className="flex justify-center mb-10"
              >
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-3xl opacity-20 animate-pulse" />
                  <motion.div
                    className="absolute -inset-4 rounded-lg border-2 border-yellow-400/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -inset-6 rounded-lg border border-cyan-400/20"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Photo Container */}
                  <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-lg overflow-hidden border-4 border-yellow-500 shadow-2xl"
                    style={{ boxShadow: '0 0 40px rgba(245, 158, 11, 0.5)' }}
                  >
                    <Image
                      src="/graduation.jpg"
                      alt="Aleyna Cintron Graduation Photo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, 224px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Corner stars */}
                  {[
                    { top: '-8px', left: '-8px' },
                    { top: '-8px', right: '-8px' },
                    { bottom: '-8px', left: '-8px' },
                    { bottom: '-8px', right: '-8px' }
                  ].map((position, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4"
                      style={position}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <Star className="w-full h-full text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}

                  {/* Achievement Badge Overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 border-4 border-black flex items-center justify-center shadow-lg"
                    style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.8)' }}
                  >
                    <Award className="w-8 h-8 text-black" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Credential Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mb-8"
              >
                <div className="inline-block px-4 py-2 mb-4 bg-yellow-500/20 border border-yellow-500/40 rounded">
                  <span className="text-xs text-yellow-400 uppercase tracking-widest font-mono font-bold">
                    ◆ ACADEMIC CERTIFICATION ◆
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-yellow-400">
                  Bachelor of Science in Web Development
                </h3>

                <p className="text-xl text-gray-200 mb-2 font-mono">Full Sail University</p>
                <p className="text-gray-400 font-mono text-sm">Winter Park, FL | Authorized Institution</p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="grid md:grid-cols-3 gap-4 mb-8"
              >
                <CredentialStat
                  icon={Award}
                  label="HONOR_RANK"
                  value="Salutatorian"
                  color="#f59e0b"
                  delay={0.8}
                />
                <CredentialStat
                  icon={Star}
                  label="GPA_SCORE"
                  value="3.98 / 4.0"
                  color="#10b981"
                  delay={0.9}
                />
                <CredentialStat
                  icon={Shield}
                  label="GRAD_DATE"
                  value="May 2023"
                  color="#8b5cf6"
                  delay={1}
                />
              </motion.div>

              {/* Security Notice */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="p-6 bg-black/60 border-2 border-yellow-500/30 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded border-2 border-yellow-400 bg-yellow-400/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-yellow-400 font-mono font-bold mb-2 uppercase tracking-wider text-sm">
                      AUTHENTICATION VERIFIED
                    </div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      Credential holder <span className="text-yellow-400 font-bold">ALEYNA CINTRON</span> has been
                      authenticated with <span className="text-yellow-400 font-bold">SALUTATORIAN</span> honors,
                      achieving a <span className="text-green-400 font-bold">3.98 GPA</span> in specialized web
                      development and software engineering curriculum. Clearance granted for advanced full-stack operations.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Skill Certifications */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="mt-8 pt-8 border-t border-yellow-500/30"
              >
                <div className="text-center mb-4">
                  <span className="text-xs text-yellow-400/80 uppercase tracking-widest font-mono">
                    AUTHORIZED COMPETENCIES
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Full Stack Development",
                    "Software Architecture",
                    "Web Technologies",
                    "Database Design",
                    "Cloud Computing",
                    "Algorithm Design"
                  ].map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 + i * 0.1 }}
                      className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 rounded text-xs font-mono hover:bg-yellow-500/20 hover:border-yellow-400 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Digital Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
                className="mt-8 flex items-center justify-center gap-4"
              >
                <div className="h-px w-32 bg-gradient-to-r from-transparent to-yellow-500/50" />
                <div className="text-center">
                  <div className="text-yellow-400 font-mono text-sm mb-1">DIGITAL SIGNATURE</div>
                  <div className="text-xs text-gray-600 font-mono">SHA-256: f4e9a2...c8d3b1</div>
                </div>
                <div className="h-px w-32 bg-gradient-to-l from-transparent to-yellow-500/50" />
              </motion.div>
            </div>

            {/* Corner security markers */}
            <div className="absolute top-16 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-400/40" />
            <div className="absolute top-16 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-400/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-400/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-400/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface CredentialStatProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  delay: number;
}

function CredentialStat({ icon: Icon, label, value, color, delay }: CredentialStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="p-4 bg-black/60 border-2 border-gray-800 rounded-lg text-center group hover:border-opacity-100 transition-all"
    >
      <div className="relative inline-block mb-3">
        <div
          className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: color }}
        />
        <Icon className="w-8 h-8 mx-auto relative" style={{ color }} />
      </div>
      <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-mono">{label}</p>
      <p className="text-lg font-mono font-bold" style={{ color }}>{value}</p>
      <div className="h-1 mt-2 bg-gray-900 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8 }}
          className="h-full rounded-full"
          style={{ background: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
    </motion.div>
  );
}
