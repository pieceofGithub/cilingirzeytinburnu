// components/Hero.tsx
import React from "react";

const phoneNumber = "+905530481400"; // Gerçek numaranızı buraya yazın
const whatsappLink = `https://wa.me/90${phoneNumber.replace(/^\+/, "")}`;

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/soldakiadam.png')" }}
    >
      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          7/24 Acil Çilingir Hizmeti
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
          Zeytinburnu ve çevresinde kapı açma, kilit değiştirme ve anahtar
          çoğaltma hizmetleri.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="px-6 py-3 bg-primary text-white rounded-2xl shadow-lg hover:bg-secondary transition"
          >
            Hemen Ara
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-primary rounded-2xl shadow-lg hover:bg-gray-100 transition"
          >
            {"WhatsApp'ta Yaz"}
          </a>
        </div>
      </div>
    </section>
  );
}
