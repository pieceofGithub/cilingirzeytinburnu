"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="bg-gray-900 text-gray-300 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* … site haritası, iletişim, sosyal medya kodu … */}
      </div>
    </motion.footer>
  );
}
