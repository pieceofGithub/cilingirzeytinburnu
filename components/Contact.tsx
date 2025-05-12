"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-20 px-4 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        İletişim
      </h2>
      <motion.div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.form
          action="https://formspree.io/f/yourFormId"
          method="POST"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon Numaranız"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            rows={5}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-2xl hover:bg-secondary transition"
          >
            Gönder
          </button>
        </motion.form>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-700"
        >
          <p>
            <strong>Telefon:</strong>{" "}
            <a
              href="tel:+905530481400"
              className="text-primary hover:underline"
            >
              +90 553 048 1400
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/905530481400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              +90 553 048 1400
            </a>
          </p>
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:info@cilingirzeytinburnu.com"
              className="text-primary hover:underline"
            >
              info@cilingirzeytinburnu.com
            </a>
          </p>
          <p>
            <strong>Adres:</strong> Zeytinburnu, İstanbul
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
