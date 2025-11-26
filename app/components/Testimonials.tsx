// app/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company Inc.",
    quote:
      "Papas Printing is the best printing company I have ever worked with. They are fast, reliable, and their quality is second to none. I would recommend them to anyone.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Jane Doe",
    role: "CTO, Another Company Inc.",
    quote:
      "I have been using Papas Printing for years and I am always impressed with their work. They are a great team and they always go the extra mile to make sure I am happy.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Peter Jones",
    role: "Lead Designer, Design Co.",
    quote:
      "Papas Printing is the only printing company I trust. They are always on time, their prices are fair, and their quality is amazing. I would not use anyone else.",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center text-gradient"
        >
          What Our Clients Say
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
