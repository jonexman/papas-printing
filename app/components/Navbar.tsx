// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-yellow-400/10 border-b border-yellow-400/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-4 group"
            whileHover={{ scale: 1.05 }}
          >
            {/* THE TYPO WAS HERE — FIXED! */}
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-black font-black text-3xl">P</span>
            </div>
            <div>
              <h1 className="font-playfair text-2xl md:text-3xl font-bold text-gradient tracking-tight">
                PAPAS PRINTING
              </h1>
              <p className="text-xs text-yellow-400/80 tracking-widest uppercase">
                Premium Solutions
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="relative text-white font-medium tracking-wider uppercase text-sm hover:text-yellow-400 transition-all duration-300 after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}

            {/* WhatsApp Button */}
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://wa.me/2349077353555"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full uppercase tracking-wider text-sm hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/50 flex items-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                WhatsApp Us
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-10"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8 text-yellow-400" />
            ) : (
              <Menu className="w-8 h-8 text-yellow-400" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: "100%", opacity: 0 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 bg-black/99 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center gap-12"
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            variants={{
              closed: { opacity: 0, y: 20 },
              open: { opacity: 1, y: 0 },
            }}
            transition={{ delay: i * 0.1 }}
            className="font-playfair text-5xl font-bold text-gradient hover:scale-110 transition"
          >
            {link.name}
          </motion.a>
        ))}

        <motion.a
          href="https://wa.me/2349077353555"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-16 py-6 rounded-full text-2xl font-bold uppercase tracking-wider flex items-center gap-4 shadow-2xl"
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="w-10 h-10" />
          Chat on WhatsApp
        </motion.a>
      </motion.div>
    </>
  );
}
