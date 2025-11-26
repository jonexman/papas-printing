// app/components/Contact.tsx

"use client";

import { useEffect } from "react";
import { MessageCircle, MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  // Floating WhatsApp Button — opens 0907 735 3555
  useEffect(() => {
    const whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/2349077353555"; // Your real number
    whatsappBtn.target = "_blank";
    whatsappBtn.rel = "noopener noreferrer";
    whatsappBtn.className = "fixed bottom-6 right-6 z-50 group";
    whatsappBtn.innerHTML = `
      <div class="relative">
        <div class="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div class="relative bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all transform hover:scale-110 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.198-.173.396-.297.595-.297.198 0 .396.074.595.297.198.223.396.62.396 1.512 0 .893-.198 1.787-.596 2.183-.397.396-.893.595-1.39.595-.496 0-.992-.198-1.289-.595-.297-.396-.446-.893-.446-1.488 0-.595.149-1.091.446-1.488.297-.396.893-.595 1.588-.595.695 0 1.39.198 1.885.595.496.396.744.992.744 1.686 0 .694-.248 1.289-.744 1.686-.496.396-1.191.595-1.885.595z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.47 15.47c-.39.39-1.01.58-1.88.58-.69 0-1.38-.19-1.88-.58-.49-.39-.74-.94-.74-1.66 0-.72.25-1.27.74-1.66.49-.39 1.19-.58 1.88-.58.69 0 1.38.19 1.88.58.49.39.74.94.74 1.66 0 .72-.25 1.27-.74 1.66z"/>
          </svg>
        </div>
        <span class="absolute -top-12 right-0 bg-black text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </div>
    `;

    document.body.appendChild(whatsappBtn);
    return () => whatsappBtn.remove();
  }, []);

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-5xl md:text-7xl font-bold text-center mb-20 text-gradient">
          Visit Us or Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-yellow-400 flex items-center gap-4">
              <Send className="w-10 h-10" />
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-6 px-12 rounded-full text-xl uppercase tracking-wider btn-glow hover:bg-yellow-300 transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-6 h-6" />
                Send Message
              </button>
            </form>
          </div>

          {/* Location & Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 flex items-center gap-4 mb-8">
                <MapPin className="w-10 h-10" />
                Our Location
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.345678901234!2d7.364876614757421!3d5.113456996259876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042e1f8b5e5e5e5%3A0x9c8f8e8f8e8f8e8f!2s494G%2BVCH%2C%20Market%20Rd%2C%20Aba%20450261%2C%20Abia!5e0!3m2!1sen!2sng!4v1733859200000!5m2!1sen!2sng"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Papas Printing – Aba"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-yellow-400 mb-8">
                Contact Information
              </h4>
              <div className="space-y-7 text-gray-300 text-lg">
                <div className="flex items-center gap-5">
                  <MapPin className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <p className="leading-relaxed">
                    494G+VCH, Market Road,
                    <br />
                    Aba 450261, Abia State, Nigeria
                  </p>
                </div>
                <a
                  href="tel:+2349077353555"
                  className="flex items-center gap-5 hover:text-yellow-400 transition"
                >
                  <Phone className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <p className="font-bold">0907 735 3555</p>
                </a>
                <div className="flex items-center gap-5">
                  <Mail className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <p>info@papasprinting.com</p>
                </div>
                <a
                  href="https://wa.me/2349077353555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-green-400 hover:text-green-300 transition font-semibold"
                >
                  <MessageCircle className="w-8 h-8 flex-shrink-0" />
                  Chat on WhatsApp → 0907 735 3555
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
