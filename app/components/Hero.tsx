// app/components/Hero.tsx

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
          alt="Professional Printing Press"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Animated Words */}
      <div className="floating-text" style={{ top: "12%", left: "5%" }}>
        PRINT
      </div>
      <div className="floating-text" style={{ top: "65%", right: "8%" }}>
        DESIGN
      </div>
      <div className="floating-text" style={{ bottom: "18%", left: "10%" }}>
        BRAND
      </div>

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Main Heading - Gold Gradient */}
        <motion.h1
          className="font-playfair text-6xl sm:text-8xl md:text-9xl font-black leading-tight mb-6 text-gradient"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          PAPAS PRINTING
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          We Bring Your Ideas to Life
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Premium printing & branding solutions — Books, Magazines, Billboards,
          Vehicle Wraps, 3D Printing and more.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href="#services"
            className="bg-yellow-400 text-black font-bold py-5 px-12 rounded-full text-lg uppercase tracking-wider btn-glow hover:bg-yellow-300 transition-all"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border-2 border-yellow-400 text-yellow-400 font-bold py-5 px-12 rounded-full text-lg uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-all"
          >
            Get a Quote
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
