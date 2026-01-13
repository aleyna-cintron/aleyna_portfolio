import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Wifi, Send, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Network grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle, #00ffff 1px, transparent 1px),
            radial-gradient(circle, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 80px 80px',
          backgroundPosition: '0 0, 25px 25px'
        }} />
      </div>

      {/* Signal waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Wifi className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-mono font-bold bg-linear-to-r from-cyan-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              NETWORK_CONNECTION
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// Establishing secure communication channel...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          {/* Connection Panel */}
          <div className="relative p-10 md:p-16 bg-black/90 border-4 rounded-lg overflow-hidden backdrop-blur-xl"
            style={{
              borderColor: '#8b5cf6',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
            }}
          >
            {/* Animated scan line */}
            <motion.div
              className="absolute inset-0 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent"
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Top status bar */}
            <div className="absolute top-0 left-0 right-0 px-6 py-3 bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-b border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px #00ff00' }} />
                <span className="text-xs font-mono text-green-400">CONNECTION: ACTIVE</span>
              </div>
              <span className="text-xs font-mono text-gray-600">LATENCY: 12ms</span>
            </div>

            <div className="relative mt-8">
              {/* Connection Hub Icon */}
              <div className="flex justify-center mb-10">
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3, duration: 1.5 }}
                  className="relative"
                >
                  {/* Pulse rings */}
                  <div className="absolute inset-0 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse" />

                  {/* Rotating ring */}
                  <motion.div
                    className="absolute -inset-8 rounded-full border-2 border-dashed border-cyan-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Main hub */}
                  <div className="relative w-24 h-24 bg-linear-to-br from-purple-400 to-pink-500 rounded-full border-4 border-purple-900 flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 rounded-full bg-linear-to-t from-transparent to-white/30" />
                    <Globe className="w-12 h-12 text-white relative z-10" />
                  </div>

                  {/* Connection nodes */}
                  {[0, 120, 240].map((angle, i) => (
                    <motion.div
                      key={angle}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                      style={{
                        left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 70}px)`,
                        top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 70}px)`,
                        boxShadow: '0 0 10px #00ffff'
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Connection Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mb-10"
              >
                <div className="inline-block px-4 py-2 mb-4 bg-purple-500/20 border border-purple-500/40 rounded">
                  <span className="text-xs text-purple-400 uppercase tracking-widest font-mono font-bold">
                    ● RECRUITMENT PROTOCOL ACTIVE ●
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-purple-300">
                  Initiate Collaboration?
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-mono">
                  Seeking a skilled <span className="text-cyan-400 font-bold">FULL_STACK_ENGINEER</span> for your team?
                  Establish a secure connection and let&apos;s build something extraordinary together.
                </p>
              </motion.div>

              {/* Connection Channels */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="grid md:grid-cols-3 gap-4 mb-10"
              >
                <ConnectionNode
                  icon={Mail}
                  label="EMAIL_PROTOCOL"
                  value="aleynatcintron@gmail.com"
                  href="mailto:aleynatcintron@gmail.com"
                  color="#00ffff"
                />
                <ConnectionNode
                  icon={Linkedin}
                  label="LINKEDIN_NODE"
                  value="/in/aleynacintron"
                  href="https://www.linkedin.com/in/aleynacintron/"
                  color="#ff00ff"
                />
                <ConnectionNode
                  icon={Github}
                  label="GITHUB_REPO"
                  value="/aleyna-cintron"
                  href="https://github.com/aleyna-cintron"
                  color="#00ff00"
                />
              </motion.div>

              {/* Divider */}
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-black px-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Connect Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center mb-8"
              >
                <a
                  href="mailto:aleynatcintron@gmail.com"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-lg font-mono font-bold text-lg transition-all duration-300 shadow-2xl border-4 group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #00ffff, #8b5cf6, #ff00ff)',
                    borderColor: '#8b5cf6',
                    color: '#000'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Mail className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">ESTABLISH_CONNECTION()</span>
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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="p-4 bg-black/60 border-2 border-purple-500/20 rounded-lg"
              >
                <div className="grid grid-cols-3 gap-4 text-center font-mono">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">3.98</div>
                    <div className="text-xs text-gray-600 uppercase">GPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-400 mb-1">B.S.</div>
                    <div className="text-xs text-gray-600 uppercase">DEGREE</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-1">2023</div>
                    <div className="text-xs text-gray-600 uppercase">GRAD</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Corner markers */}
            <div className="absolute top-16 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400/40" />
            <div className="absolute top-16 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400/40" />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="text-center mt-12"
        >
          <div className="inline-block p-6 bg-black/90 border-2 border-cyan-500/20 rounded-lg backdrop-blur-xl">
            <p className="text-gray-500 font-mono text-sm mb-2">
              © 2026 ALEYNA_CINTRON // Powered by React + Tailwind + Cybernetic Energy
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-linear-to-r from-transparent to-cyan-500/50" />
              <p className="text-cyan-400/60 text-xs font-mono">
                &quot;Turning ideas into interactive experiences&quot;
              </p>
              <div className="h-px w-8 bg-linear-to-l from-transparent to-cyan-500/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
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
      whileHover={{ scale: 1.05, y: -3 }}
      className="p-4 bg-black/60 border-2 border-gray-800 rounded-lg text-center block group hover:border-opacity-100 transition-all"
      style={{
        borderColor: `${color}30`
      }}
    >
      <div className="relative inline-block mb-3">
        <div
          className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: color }}
        />
        <Icon className="w-7 h-7 mx-auto relative" style={{ color }} />
      </div>
      <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-mono">{label}</p>
      <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-mono break-all">{value}</p>

      {/* Connection indicator */}
      <div className="mt-3 h-1 bg-gray-900 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ background: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
    </motion.a>
  );
}
