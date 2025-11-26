// app/components/Services.tsx

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Books & Journals",
    icon: "Book",
    desc: "Hardcover, paperback, perfect binding, academic journals",
  },
  {
    title: "Magazines",
    icon: "Magazine",
    desc: "Glossy, matte, saddle-stitched, high-volume runs",
  },
  {
    title: "Brochures & Flyers",
    icon: "Flyer",
    desc: "Tri-fold, bi-fold, die-cut, premium paper stocks",
  },
  {
    title: "Large Format",
    icon: "Billboard",
    desc: "Billboards, banners, posters, roll-up stands & flex printing",
  },
  {
    title: "Vehicle Branding",
    icon: "Car",
    desc: "Full wraps, stickers, magnetic signs, fleet branding",
  },
  {
    title: "Office Branding",
    icon: "Office",
    desc: "Wall graphics, signage, reception branding, 3D letters",
  },
  {
    title: "3D Printing",
    icon: "3D",
    desc: "Prototypes, custom parts, architectural models",
  },
  {
    title: "Souvenirs & Gifts",
    icon: "Gift",
    desc: "Mugs, pens, T-shirts, calendars, branded merch",
  },
  {
    title: "Custom Printing",
    icon: "Custom",
    desc: "We can print on anything. If you can think it, we can print it.",
  },
  {
    title: "Finishing & Binding",
    icon: "Binding",
    desc: "Lamination, UV coating, foil stamping, embossing.",
  },
  {
    title: "Packaging",
    icon: "Packaging",
    desc: "Custom boxes, bags, labels, and more.",
  },
  {
    title: "Promotional Products",
    icon: "Promo",
    desc: "Pens, mugs, t-shirts, and other promotional items.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-text" style={{ top: "10%", left: "5%" }}>
          PRINT
        </div>
        <div className="floating-text" style={{ bottom: "15%", right: "8%" }}>
          QUALITY
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl sm:text-7xl md:text-8xl font-black text-gradient mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From concept to delivery — we handle every detail with precision and
            excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card */}
              <div
                className={`
                relative overflow-hidden rounded-3xl border p-10 h-full transition-all duration-500
                ${
                  hoveredIndex === index
                    ? "bg-gradient-to-br from-yellow-400/20 to-orange-600/20 border-yellow-400 shadow-2xl shadow-yellow-400/30 scale-105"
                    : "bg-white/5 border-white/10 backdrop-blur-sm hover:border-yellow-400/50"
                }
              `}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-orange-600/0 group-hover:from-yellow-400/20 transition-all duration-700" />

                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-black text-black">
                      {service.icon}
                    </span>
                  </div>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="glow"
                      className="absolute -inset-1 bg-yellow-400/30 rounded-3xl blur-2xl -z-10"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition">
                  {service.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-400 mb-8">
            Need something custom?{" "}
            <span className="text-yellow-400 font-bold">We do that too.</span>
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-black font-bold py-5 px-12 rounded-full text-lg uppercase tracking-wider btn-glow hover:bg-yellow-300 transition-all shadow-2xl"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
