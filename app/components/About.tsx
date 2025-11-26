// app/components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center text-gradient"
        >
          About Us
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="https://picsum.photos/seed/picsum/800/600"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-300 text-lg">
              Papas Printing is a family-owned business that has been providing
              top-quality printing services for over 20 years. We pride
              ourselves on our commitment to customer satisfaction and our
              ability to deliver exceptional results on every project.
            </p>
            <p className="text-gray-300 text-lg mt-4">
              Our state-of-the-art equipment and experienced team allow us to
              handle a wide range of printing needs, from business cards and
              brochures to large-format banners and signs. We are dedicated to
              helping our clients make a lasting impression with
              professional, high-quality printed materials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
