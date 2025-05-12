// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";

const navItems = [
  { label: "Hizmetler", href: "#services" },
  { label: "Neden Bizi Seçin", href: "#why-choose-us" },
  { label: "Bölgeler", href: "#service-areas" },
  { label: "Yorumlar", href: "#testimonials" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const phoneNumber = "+905530481400";
  const whatsappLink = `https://wa.me/90${phoneNumber.replace(/^\+/, "")}`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition"
        >
          ÇilingirZeytinburnu
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-primary transition"
            >
              {label}
            </Link>
          ))}
          {/* Hemen Ara Butonu */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center space-x-1 px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Ara</span>
          </a>
        </nav>

        {/* Mobile Menü Butonu */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col space-y-2 px-4 pb-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 text-gray-700 hover:text-primary transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              >
                <PhoneCall className="w-4 h-4 rotate-45" />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
