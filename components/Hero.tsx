"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

const phoneNumber = "+905530481400";
const whatsappLink = `https://wa.me/90${phoneNumber.replace(/^\+/, "")}`;

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/soldakiadam.png')" }}
    >
      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* İçerik */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
        >
          7/24 Acil Çilingir Hizmeti
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl"
        >
          Zeytinburnu ve çevresinde kapı açma, kilit değiştirme ve anahtar
          çoğaltma hizmetleri.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href={`tel:${phoneNumber}`}
            className="px-6 py-3 bg-primary text-white rounded-2xl shadow-lg hover:bg-secondary transition"
            whileTap={{ scale: 0.95 }}
          >
            Hemen Ara
          </motion.a>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-primary rounded-2xl shadow-lg hover:bg-gray-100 transition"
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp&apos;ta Yaz
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
