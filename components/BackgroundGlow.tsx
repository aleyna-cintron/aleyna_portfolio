'use client';

'use client';

import { motion } from "motion/react";

export function BackgroundGlow() {
  const glows = [
    { size: 400, color: "rgba(167, 139, 250, 0.15)", x: "10%", y: "20%" },
    { size: 500, color: "rgba(244, 114, 182, 0.12)", x: "80%", y: "40%" },
    { size: 350, color: "rgba(167, 139, 250, 0.1)", x: "60%", y: "70%" },
    { size: 450, color: "rgba(244, 114, 182, 0.08)", x: "20%", y: "80%" },
    { size: 300, color: "rgba(167, 139, 250, 0.12)", x: "90%", y: "10%" },
    { size: 380, color: "rgba(244, 114, 182, 0.1)", x: "40%", y: "50%" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {glows.map((glow, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: glow.size,
            height: glow.size,
            background: `radial-gradient(circle, ${glow.color}, transparent 70%)`,
            filter: "blur(60px)",
            left: glow.x,
            top: glow.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  );
}
