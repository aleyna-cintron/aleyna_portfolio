'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { Terminal, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.3]
  );

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-1 text-2xl font-mono font-bold">
              <span className="text-purple-400 group-hover:text-pink-400 transition-colors">&lt;</span>
              <span className="text-purple-400 group-hover:text-pink-400 transition-colors">AC</span>
              <span className="text-purple-400 group-hover:text-pink-400 transition-colors">/&gt;</span>
            </div>
            <span className="text-xl font-mono font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ALEYNA_CINTRON
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 font-mono text-sm font-bold transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`relative z-10 ${isActive ? 'text-pink-400' : 'text-gray-400 group-hover:text-purple-400'} transition-colors`}>
                    {link.name}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-pink-500/10 border border-pink-500/30 rounded"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-purple-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              );
            })}

            {/* Status Indicator */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-purple-400 hover:text-pink-400 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-purple-500/30"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-4 py-2 font-mono text-sm font-bold rounded border-2 transition-all ${
                      isActive
                        ? 'bg-pink-500/10 border-pink-500/50 text-pink-400'
                        : 'bg-black/40 border-purple-500/30 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
