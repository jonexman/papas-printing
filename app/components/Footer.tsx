// app/components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Main Footer Text */}
        <div className="mb-8">
          <h3 className="font-playfair text-4xl md:text-5xl font-bold text-gradient mb-4">
            PAPAS PRINTING
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for premium printing, branding, and creative
            solutions since day one.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-10">
          <ul className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </li>
            <li className="text-gray-500">•</li>
            <li className="text-gray-400">
              Call:{" "}
              <span className="text-yellow-400 font-bold">0907 735 3555</span>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          <p>© {currentYear} Papas Printing Services. All Rights Reserved.</p>
          <p className="mt-2 text-xs opacity-70">
            Crafted with precision • Delivered with excellence
          </p>
        </div>

        {/* Optional: Small floating accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="floating-text opacity-5"
            style={{ top: "20%", right: "10%" }}
          >
            QUALITY
          </div>
        </div>
      </div>
    </footer>
  );
}
